#!/usr/bin/env node
/**
 * convert-rst-tables.js
 *
 * Converts Pandoc-generated RST table formats in Markdown files to GFM pipe
 * tables that Docusaurus can render. Handles three RST table formats:
 *
 *   Format A – Pandoc simple table with header row above the separator:
 *     Col1   Col2   Col3
 *     ------ ------ ------
 *     data   data   data
 *     : optional caption
 *
 *   Format B – Framed table (no header), separator on both sides:
 *     ------ --------
 *     data   data
 *     ------ --------
 *
 *   Format C – Hybrid: GFM table start + RST content rows + closing separator.
 *     (Occurs in PERT View / Workflow Designer icon tables.)
 *     |  |  |
 *     |---|---|
 *     |img|name|          <-- GFM rows already in place
 *     |img|name|
 *       img  name  img  name   <-- RST content rows (4-col separator follows)
 *       ------- -- ------- --  <-- closing separator defines columns
 *
 * Also converts RST grid tables (+---+---+).
 *
 * Skips content inside fenced code blocks.
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Parse column {start, end} positions from an RST separator line. */
function getColPositions(line) {
  const cols = [];
  let i = 0;
  while (i < line.length) {
    if (line[i] === '-' || line[i] === '=') {
      const start = i;
      while (i < line.length && (line[i] === '-' || line[i] === '=')) i++;
      cols.push({ start, end: i - 1 });
    } else {
      i++;
    }
  }
  return cols;
}

/** Extract trimmed cell text for each column position from a row. */
function extractCells(row, cols) {
  return cols.map(col => {
    if (col.start >= row.length) return '';
    return row.substring(col.start, Math.min(col.end + 1, row.length)).trim();
  });
}

/** True if line is an RST simple-table separator (2+ indented dash groups). */
const RST_SEP_RE = /^ {2,}[-=]{3,}(\s+[-=]{3,})+\s*$/;
function isRstSep(line) { return RST_SEP_RE.test(line); }

/** True if line looks like an RST table content row (indented, non-empty, non-sep). */
function isRstContentRow(line) {
  return line.startsWith('  ') && line.trim() !== '' && !isRstSep(line);
}

/** Build a GFM separator row for N columns. */
function gfmSepRow(n) { return '| ' + Array(n).fill('---').join(' | ') + ' |'; }

/** Wrap cells in a GFM row. */
function gfmRow(cells) { return '| ' + cells.join(' | ') + ' |'; }

// ---------------------------------------------------------------------------
// Core converter
// ---------------------------------------------------------------------------

function convertContent(original) {
  const lines        = original.split('\n');
  const out          = [];
  let   inCodeBlock  = false;
  let   i            = 0;

  while (i < lines.length) {
    const line = lines[i];

    // ── code fence tracking ─────────────────────────────────────────────────
    if (/^```/.test(line.trim())) {
      inCodeBlock = !inCodeBlock;
      out.push(line);
      i++;
      continue;
    }
    if (inCodeBlock) { out.push(line); i++; continue; }

    // ── RST grid table (+---+---+) ──────────────────────────────────────────
    if (/^\+[-=]+\+/.test(line)) {
      // Collect the full grid block
      const gridLines = [];
      let j = i;
      while (j < lines.length && (/^\+[-=]+\+/.test(lines[j]) || /^\|/.test(lines[j]))) {
        gridLines.push(lines[j]);
        j++;
      }

      // Column boundaries from the first +---+ line
      const boundaries = [];
      for (let k = 0; k < line.length; k++) {
        if (line[k] === '+') boundaries.push(k);
      }
      const nCols = boundaries.length - 1;

      if (nCols > 0) {
        // Collect content rows (| rows), merging multi-line cells within each block
        const cellBlocks = []; // array of string[] (one entry per +---+ block = one table row)
        let   cellRow    = null;

        for (const gl of gridLines) {
          if (/^\+[-=]+\+/.test(gl)) {
            // separator: flush current cell row
            if (cellRow !== null) { cellBlocks.push(cellRow); cellRow = null; }
            continue;
          }
          if (/^\|/.test(gl)) {
            const cells = [];
            for (let c = 0; c < nCols; c++) {
              const s = boundaries[c] + 1;
              const e = boundaries[c + 1];
              cells.push(gl.substring(s, e).trim());
            }
            if (cellRow === null) {
              cellRow = cells;
            } else {
              // Multi-line cell: concatenate non-empty parts
              cellRow = cellRow.map((existing, ci) => {
                const extra = cells[ci] || '';
                return extra ? (existing ? existing + ' ' + extra : extra) : existing;
              });
            }
          }
        }
        if (cellRow !== null) cellBlocks.push(cellRow);

        if (cellBlocks.length > 0) {
          out.push(gfmRow(cellBlocks[0]));
          out.push(gfmSepRow(nCols));
          for (const row of cellBlocks.slice(1)) out.push(gfmRow(row));
          i = j;
          continue;
        }
      }

      // Fallback: output as-is
      gridLines.forEach(gl => out.push(gl));
      i = j;
      continue;
    }

    // ── RST simple-table separator ──────────────────────────────────────────
    if (isRstSep(line)) {
      const cols = getColPositions(line);

      // Look ahead: content rows after this separator → determines Format A/B
      let j = i + 1;
      const afterRows = [];
      while (j < lines.length && !isRstSep(lines[j]) && lines[j].trim() !== '') {
        afterRows.push(lines[j]);
        j++;
      }
      const closingSepIdx = (j < lines.length && isRstSep(lines[j])) ? j : -1;

      // Look backward in output buffer for RST content rows → Format C
      const beforeRows = [];
      if (afterRows.length === 0 || closingSepIdx === -1) {
        while (out.length > 0 && isRstContentRow(out[out.length - 1])) {
          beforeRows.unshift(out.pop());
        }
      }

      // ── determine which format and collect content ──
      let headerLine   = null;
      let contentRows  = [];

      if (beforeRows.length > 0) {
        // Format C: trailing separator, content was already pushed to out
        contentRows = beforeRows;
      } else if (closingSepIdx !== -1) {
        // Format B: framed table (no header row)
        contentRows = afterRows;
      } else if (afterRows.length > 0) {
        // Format A: header before this separator, content after
        if (out.length > 0) {
          const prev = out[out.length - 1];
          if (prev.trim() !== '' && !isRstSep(prev) && !prev.startsWith('|')) {
            headerLine = out.pop();
          }
        }
        contentRows = afterRows;
      }

      if (contentRows.length === 0) {
        // Nothing to convert – output the separator as a horizontal rule
        out.push('---');
        i++;
        continue;
      }

      // ── emit GFM table header ─────────────────────────────────────────────
      const lastOut = out[out.length - 1] || '';
      const appendToExistingTable = lastOut.startsWith('|');

      if (!appendToExistingTable) {
        if (headerLine) {
          out.push(gfmRow(extractCells(headerLine, cols)));
        } else {
          out.push(gfmRow(cols.map(() => '')));
        }
        out.push(gfmSepRow(cols.length));
      }

      // ── emit content rows ─────────────────────────────────────────────────
      for (const rowLine of contentRows) {
        const cells = extractCells(rowLine, cols);
        if (cols.length === 4) {
          // Split 4-column RST rows into 2 GFM rows of 2 columns
          out.push(gfmRow([cells[0], cells[1]]));
          if (cells[2] || cells[3]) out.push(gfmRow([cells[2], cells[3]]));
        } else {
          out.push(gfmRow(cells));
        }
      }

      // ── check for Pandoc table caption (`: Caption text`) ────────────────
      const afterIdx = closingSepIdx !== -1 ? closingSepIdx + 1 : j;
      if (afterIdx < lines.length && lines[afterIdx].trim().startsWith(': ')) {
        out.push('');
        out.push('*' + lines[afterIdx].trim().slice(2) + '*');
        i = afterIdx + 1;
      } else {
        i = closingSepIdx !== -1 ? closingSepIdx + 1 : j;
      }

      out.push('');
      continue;
    }

    // Default: pass through unchanged
    out.push(line);
    i++;
  }

  return out.join('\n');
}

// ---------------------------------------------------------------------------
// File / directory walker
// ---------------------------------------------------------------------------

function processFile(filePath) {
  const original  = fs.readFileSync(filePath, 'utf8');
  const converted = convertContent(original);
  if (converted !== original) {
    fs.writeFileSync(filePath, converted);
    process.stdout.write('  Converted RST tables: ' + filePath + '\n');
    return true;
  }
  return false;
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full);
    else if (entry.name.endsWith('.md')) processFile(full);
  }
}

// Accept directories or individual files as arguments
for (const arg of process.argv.slice(2)) {
  const stat = fs.existsSync(arg) ? fs.statSync(arg) : null;
  if (!stat) { process.stderr.write('Not found: ' + arg + '\n'); continue; }
  if (stat.isDirectory()) walkDir(arg);
  else processFile(arg);
}
