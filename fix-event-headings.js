#!/usr/bin/env node
/**
 * fix-event-headings.js
 *
 * Wraps OpCon event-type headings in backticks so Docusaurus renders the full
 * name in the right-hand TOC. Without backticks, headings like:
 *
 *   ### $CALENDAR:ADD
 *
 * can display as just "$CALENDAR" in the TOC due to how special characters are
 * handled during TOC text extraction. Wrapping in backticks changes the AST
 * node type to `inlineCode`, which the TOC builder serializes in full:
 *
 *   ### `$CALENDAR:ADD`
 *
 * Only transforms headings that match the OpCon event pattern ($TYPE:ACTION)
 * and are not already wrapped. Skips content inside fenced code blocks.
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const EVENT_HEADING_RE = /^(#{1,4}) (\$[A-Z][A-Z_]*:[A-Z][A-Z_]*)$/;

function convertContent(original) {
  const lines       = original.split('\n');
  let   inCodeBlock = false;
  let   changed     = false;

  const out = lines.map(line => {
    if (/^```/.test(line.trim())) {
      inCodeBlock = !inCodeBlock;
      return line;
    }
    if (inCodeBlock) return line;

    const m = EVENT_HEADING_RE.exec(line);
    if (m) {
      changed = true;
      return `${m[1]} \`${m[2]}\``;
    }
    return line;
  });

  return changed ? out.join('\n') : original;
}

function processFile(filePath) {
  const original  = fs.readFileSync(filePath, 'utf8');
  const converted = convertContent(original);
  if (converted !== original) {
    fs.writeFileSync(filePath, converted);
    process.stdout.write('  Wrapped event headings: ' + filePath + '\n');
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

for (const arg of process.argv.slice(2)) {
  const stat = fs.existsSync(arg) ? fs.statSync(arg) : null;
  if (!stat) { process.stderr.write('Not found: ' + arg + '\n'); continue; }
  if (stat.isDirectory()) walkDir(arg);
  else processFile(arg);
}
