import React, { useCallback, useEffect, useMemo, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import { usePluralForm } from "@docusaurus/theme-common";
import clsx from "clsx";
import useSearchQuery from "@easyops-cn/docusaurus-search-local/dist/client/client/theme/hooks/useSearchQuery";
import { fetchIndexes } from "../SearchBar/fetchIndexes";
import { SearchSourceFactory } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/SearchSourceFactory";
import { highlight } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlight";
import { highlightStemmed } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlightStemmed";
import { getStemmedPositions } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/getStemmedPositions";
import LoadingRing from "@easyops-cn/docusaurus-search-local/dist/client/client/theme/LoadingRing/LoadingRing";
import { concatDocumentPath } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/concatDocumentPath";
import {
    Mark,
    searchContextByPaths,
    useAllContextsWithNoSearchContext,
} from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated";
import { normalizeContextByPath } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/normalizeContextByPath";
import styles from "./SearchPage.module.css";

// ── Section detection ─────────────────────────────────────────────────────────

function getDocInfo(url) {
    if (!url) return { key: "other", section: "Other", version: null, isCurrent: false };

    if (url.includes("/opcon/core")) {
        const versionMatch = url.match(/\/opcon\/core\/v(\d+\.\d+)\//);
        if (versionMatch) {
            return { key: "opcon-onprem", section: "OpCon", version: `v${versionMatch[1]}`, isCurrent: false };
        }
        return { key: "opcon-current", section: "OpCon", version: "Cloud · Current", isCurrent: true };
    }

    if (url.includes("/opcon/agents/")) {
        const agentMap = {
            "guidewire":  "Guidewire Agent",
            "ibm-i-1801": "IBM i Agent",
            "ibm-i-2101": "IBM i Agent",
            "java":       "Java Agent",
            "mcp":        "MCP Agent",
            "opconmft":   "MFT Agent",
            "opcon-rpa":  "OpCon RPA",
            "os2200":     "OS 2200 Agent",
            "sap-bw":     "SAP BW Agent",
            "sap":        "SAP Agent",
            "windows":    "Windows Agent",
        };
        const match = url.match(/\/opcon\/agents\/([^/]+)/);
        const name = match ? (agentMap[match[1]] || "Agent") : "Agent";
        return { key: "agents", section: name, version: null, isCurrent: false };
    }

    if (url.includes("/opcon/connectors/")) {
        const connectorMap = {
            "jaspersoft":        "Jaspersoft Connector",
            "jboss":             "JBoss Connector",
            "sap-data-services": "SAP Data Services",
        };
        const match = url.match(/\/opcon\/connectors\/([^/]+)/);
        const name = match ? (connectorMap[match[1]] || "Connector") : "Connector";
        return { key: "connectors", section: name, version: null, isCurrent: false };
    }

    if (url.includes("/opcon/deploy"))         return { key: "other", section: "Deploy",         version: null, isCurrent: false };
    if (url.includes("/opcon/knowledge-base")) return { key: "other", section: "Knowledge Base", version: null, isCurrent: false };
    if (url.includes("/opcon-relay"))          return { key: "other", section: "Relay",          version: null, isCurrent: false };
    if (url.includes("/wripple"))              return { key: "other", section: "Wripple",        version: null, isCurrent: false };
    if (url.includes("/training"))             return { key: "other", section: "Training",       version: null, isCurrent: false };

    return { key: "other", section: null, version: null, isCurrent: false };
}

// Sort results: current OpCon version first, then preserve Lunr relevance order
function sortResults(results) {
    return [...results].sort((a, b) => {
        const aInfo = getDocInfo(a.document.u);
        const bInfo = getDocInfo(b.document.u);
        if (aInfo.isCurrent && !bInfo.isCurrent) return -1;
        if (bInfo.isCurrent && !aInfo.isCurrent) return 1;
        return 0;
    });
}

// ── Filter pills ──────────────────────────────────────────────────────────────

const FILTER_SECTIONS = [
    { key: "all",           label: "All Results" },
    { key: "opcon-current", label: "OpCon · Current" },
    { key: "opcon-onprem",  label: "OpCon · On-Prem" },
    { key: "agents",        label: "Agents" },
    { key: "connectors",    label: "Connectors" },
    { key: "other",         label: "Other" },
];

function FilterPills({ activeFilter, counts, onSelect }) {
    return (
        <div className="search-filter-pills">
            {FILTER_SECTIONS.map(({ key, label }) => {
                const count = key === "all" ? counts.total : (counts[key] ?? 0);
                if (key !== "all" && count === 0) return null;
                return (
                    <button
                        key={key}
                        className={clsx("search-filter-pill", {
                            "search-filter-pill--active": activeFilter === key,
                            "search-filter-pill--current": key === "opcon-current",
                        })}
                        onClick={() => onSelect(key)}
                    >
                        {label}
                        <span className="search-filter-count">{count}</span>
                    </button>
                );
            })}
        </div>
    );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function SearchPage() {
    return (
        <Layout>
            <SearchPageContent />
        </Layout>
    );
}

function SearchPageContent() {
    const { siteConfig: { baseUrl }, i18n: { currentLocale } } = useDocusaurusContext();
    const { selectMessage } = usePluralForm();
    const { searchValue, searchContext, searchVersion, updateSearchPath, updateSearchContext } = useSearchQuery();
    const [searchQuery, setSearchQuery] = useState(searchValue);
    const [searchSource, setSearchSource] = useState();
    const [rawResults, setRawResults] = useState();
    const [activeFilter, setActiveFilter] = useState("all");
    const versionUrl = `${baseUrl}${searchVersion}`;

    const pageTitle = useMemo(() =>
        searchQuery
            ? translate(
                { id: "theme.SearchPage.existingResultsTitle", message: 'Search results for "{query}"' },
                { query: searchQuery }
              )
            : translate({ id: "theme.SearchPage.emptyResultsTitle", message: "Search the documentation" }),
        [searchQuery]
    );

    // Run search when query or source changes
    useEffect(() => {
        updateSearchPath(searchQuery);
        if (searchSource) {
            if (searchQuery) {
                searchSource(searchQuery, (results) => {
                    setRawResults(sortResults(results));
                    setActiveFilter("all");
                });
            } else {
                setRawResults(undefined);
                setActiveFilter("all");
            }
        }
    }, [searchQuery, searchSource]);

    const handleSearchInputChange = useCallback((e) => {
        setSearchQuery(e.target.value);
    }, []);

    useEffect(() => {
        if (searchValue && searchValue !== searchQuery) {
            setSearchQuery(searchValue);
        }
    }, [searchValue]);

    useEffect(() => {
        async function doFetchIndexes() {
            const { wrappedIndexes, zhDictionary } =
                !Array.isArray(searchContextByPaths) || searchContext || useAllContextsWithNoSearchContext
                    ? await fetchIndexes(versionUrl, searchContext)
                    : { wrappedIndexes: [], zhDictionary: [] };
            setSearchSource(() => SearchSourceFactory(wrappedIndexes, zhDictionary, 100));
        }
        doFetchIndexes();
    }, [searchContext, versionUrl]);

    // Compute per-section counts and filtered list
    const { filteredResults, counts } = useMemo(() => {
        if (!rawResults) return { filteredResults: undefined, counts: {} };

        const countMap = { total: rawResults.length };
        for (const r of rawResults) {
            const { key } = getDocInfo(r.document.u);
            countMap[key] = (countMap[key] ?? 0) + 1;
        }

        const filtered = activeFilter === "all"
            ? rawResults
            : rawResults.filter((r) => getDocInfo(r.document.u).key === activeFilter);

        return { filteredResults: filtered, counts: countMap };
    }, [rawResults, activeFilter]);

    return (
        <React.Fragment>
            <Head>
                <meta property="robots" content="noindex, follow" />
                <title>{pageTitle}</title>
            </Head>

            <div className="container margin-vert--lg">
                <h1>{pageTitle}</h1>

                {/* Search input + context selector row */}
                <div className="row">
                    <div className={clsx("col", {
                        [styles.searchQueryColumn]: Array.isArray(searchContextByPaths),
                        "col--9": Array.isArray(searchContextByPaths),
                        "col--12": !Array.isArray(searchContextByPaths),
                    })}>
                        <input
                            type="search"
                            name="q"
                            className={styles.searchQueryInput}
                            aria-label="Search"
                            onChange={handleSearchInputChange}
                            value={searchQuery}
                            autoComplete="off"
                            autoFocus
                        />
                    </div>
                    {Array.isArray(searchContextByPaths) && (
                        <div className={clsx("col", "col--3", "padding-left--none", styles.searchContextColumn)}>
                            <select
                                name="search-context"
                                className={styles.searchContextInput}
                                id="context-selector"
                                value={searchContext}
                                onChange={(e) => updateSearchContext(e.target.value)}
                            >
                                {useAllContextsWithNoSearchContext && (
                                    <option value="">
                                        {translate({ id: "theme.SearchPage.searchContext.everywhere", message: "everywhere" })}
                                    </option>
                                )}
                                {searchContextByPaths.map((context) => {
                                    const { label, path } = normalizeContextByPath(context, currentLocale);
                                    return <option key={path} value={path}>{label}</option>;
                                })}
                            </select>
                        </div>
                    )}
                </div>

                {/* Loading indicator */}
                {!searchSource && searchQuery && <div><LoadingRing /></div>}

                {/* Result count + filter pills */}
                {rawResults && (
                    rawResults.length > 0 ? (
                        <>
                            <p className="search-results-count">
                                {selectMessage(
                                    rawResults.length,
                                    translate({
                                        id: "theme.SearchPage.documentsFound.plurals",
                                        message: "1 document found|{count} documents found",
                                    }, { count: rawResults.length })
                                )}
                            </p>
                            <FilterPills
                                activeFilter={activeFilter}
                                counts={counts}
                                onSelect={setActiveFilter}
                            />
                        </>
                    ) : process.env.NODE_ENV === "production" ? (
                        <p>{translate({ id: "theme.SearchPage.noResultsText", message: "No documents were found" })}</p>
                    ) : (
                        <p>⚠️ The search index is only available when you run docusaurus build!</p>
                    )
                )}

                {/* Results list */}
                <section>
                    {filteredResults && filteredResults.map((item) => (
                        <SearchResultItem key={item.document.i} searchResult={item} />
                    ))}
                </section>
            </div>
        </React.Fragment>
    );
}

function SearchResultItem({ searchResult: { document, type, page, tokens, metadata } }) {
    const isTitle   = type === 0;
    const isContent = type === 2;

    const pathItems    = (isTitle ? document.b : page.b).slice();
    const articleTitle = isContent ? document.s : document.t;
    if (!isTitle) pathItems.push(page.t);

    let search = "";
    if (Mark && tokens.length > 0) {
        const params = new URLSearchParams();
        for (const token of tokens) params.append("_highlight", token);
        search = `?${params.toString()}`;
    }

    const docInfo = getDocInfo(document.u);
    const badgeLabel = docInfo.version
        ? `${docInfo.section} · ${docInfo.version}`
        : docInfo.section;

    return (
        <article className={clsx(styles.searchResultItem, "search-result-article")}>
            {/* Section / version badge */}
            {badgeLabel && (
                <div className="search-result-article-meta">
                    <span className={clsx("search-badge", { "search-badge--current": docInfo.isCurrent })}>
                        {badgeLabel}
                    </span>
                </div>
            )}

            <h2>
                <Link
                    to={document.u + search + (document.h || "")}
                    dangerouslySetInnerHTML={{
                        __html: isContent
                            ? highlight(articleTitle, tokens)
                            : highlightStemmed(articleTitle, getStemmedPositions(metadata, "t"), tokens, 100),
                    }}
                />
            </h2>

            {pathItems.length > 0 && (
                <p className={styles.searchResultItemPath}>{concatDocumentPath(pathItems)}</p>
            )}

            {isContent && (
                <p
                    className={styles.searchResultItemSummary}
                    dangerouslySetInnerHTML={{
                        __html: highlightStemmed(document.t, getStemmedPositions(metadata, "t"), tokens, 100),
                    }}
                />
            )}
        </article>
    );
}
