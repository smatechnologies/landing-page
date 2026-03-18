// ── Popular search terms shown when the search bar is empty ───────────────────
export const POPULAR_SEARCHES = [
  'solution manager',
  'schedule build',
  'job dependency',
  'notification manager',
  'self service',
  'global property',
  'agent configuration',
  'threshold',
  'resource',
  'access code',
  'expression dependency',
  'visual designer',
];

// ── Abbreviation / synonym expansion ─────────────────────────────────────────
// Keys are what users type; values are what gets sent to Lunr
export const SYNONYMS = {
  'sm':       'solution manager',
  'lsam':     'agent',
  'mslsam':   'windows agent',
  'mft':      'managed file transfer',
  'jem':      'job execution',
  'jors':     'job output retrieval',
  'ado':      'agent deployment',
  'smadb':    'database',
  'smaddi':   'data input',
  'xps':      'expression dependency',
  'opconmft': 'managed file transfer',
  'sm api':   'solution manager rest api',
  'rest api': 'solution manager rest api',
};

// Expand any known abbreviations in a query before sending to Lunr
export function expandSynonyms(query) {
  if (!query) return query;
  const lower = query.toLowerCase().trim();
  // Exact match first
  if (SYNONYMS[lower]) return SYNONYMS[lower];
  // Word-boundary substitution for multi-word queries
  let expanded = query;
  for (const [abbr, full] of Object.entries(SYNONYMS)) {
    const regex = new RegExp(`(?<![\\w])${abbr}(?![\\w])`, 'gi');
    expanded = expanded.replace(regex, full);
  }
  return expanded;
}

// ── Recent-search localStorage helpers ───────────────────────────────────────
const STORAGE_KEY = 'sma-docs-recent-searches';
const MAX_RECENT  = 5;

export function getRecentSearches() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function addRecentSearch(term) {
  if (!term?.trim()) return;
  try {
    const recent = getRecentSearches().filter((s) => s !== term);
    recent.unshift(term);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent.slice(0, MAX_RECENT)));
  } catch {
    // localStorage may be unavailable (private mode, etc.)
  }
}
