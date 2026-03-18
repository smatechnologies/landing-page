import { concatDocumentPath } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/concatDocumentPath";
import { getStemmedPositions } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/getStemmedPositions";
import { highlight } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlight";
import { highlightStemmed } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlightStemmed";
import { explicitSearchResultPath } from "@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated";
import { iconAction, iconContent, iconHeading, iconTitle, iconTreeInter, iconTreeLast } from "./icons";
import styles from "./SearchBar.module.css";

// Map URL paths to human-readable section labels and version info
function getDocInfo(url) {
    if (!url) return null;

    // OpCon Core — check for versioned path first (e.g. /opcon/core/v26.0/)
    if (url.includes("/opcon/core")) {
        const versionMatch = url.match(/\/opcon\/core\/v(\d+\.\d+)\//);
        if (versionMatch) {
            return { section: "OpCon", version: `v${versionMatch[1]}`, isCurrent: false };
        }
        return { section: "OpCon", version: "Cloud · Current", isCurrent: true };
    }

    // Agents
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
        return { section: name, version: null, isCurrent: false };
    }

    // Connectors
    if (url.includes("/opcon/connectors/")) {
        const connectorMap = {
            "jaspersoft":        "Jaspersoft Connector",
            "jboss":             "JBoss Connector",
            "sap-data-services": "SAP Data Services",
        };
        const match = url.match(/\/opcon\/connectors\/([^/]+)/);
        const name = match ? (connectorMap[match[1]] || "Connector") : "Connector";
        return { section: name, version: null, isCurrent: false };
    }

    if (url.includes("/opcon/deploy"))          return { section: "Deploy",         version: null, isCurrent: false };
    if (url.includes("/opcon/knowledge-base"))  return { section: "Knowledge Base", version: null, isCurrent: false };
    if (url.includes("/opcon-relay"))           return { section: "Relay",          version: null, isCurrent: false };
    if (url.includes("/wripple"))               return { section: "Wripple",        version: null, isCurrent: false };
    if (url.includes("/training"))              return { section: "Training",       version: null, isCurrent: false };

    return null;
}

export function SuggestionTemplate({ document, type, page, metadata, tokens, isInterOfTree, isLastOfTree }) {
    const isTitle   = type === 0;
    const isHeading = type === 1;

    const tree = [];
    if (isInterOfTree) {
        tree.push(iconTreeInter);
    } else if (isLastOfTree) {
        tree.push(iconTreeLast);
    }

    const treeWrapper = tree.map((item) => `<span class="${styles.hitTree}">${item}</span>`);
    const icon = `<span class="${styles.hitIcon}">${isTitle ? iconTitle : isHeading ? iconHeading : iconContent}</span>`;

    const wrapped = [
        `<span class="${styles.hitTitle}">${highlightStemmed(document.t, getStemmedPositions(metadata, "t"), tokens)}</span>`,
    ];

    // Build section/version badge from the result URL
    const docInfo = getDocInfo(document.u);
    let badge = "";
    if (docInfo) {
        const badgeClass = docInfo.isCurrent ? "search-badge search-badge--current" : "search-badge";
        const label = docInfo.version ? `${docInfo.section} · ${docInfo.version}` : docInfo.section;
        badge = `<span class="${badgeClass}">${label}</span> `;
    }

    const needsExplicitHitPath = !isInterOfTree && !isLastOfTree && explicitSearchResultPath;
    if (needsExplicitHitPath) {
        const pathItems = page
            ? (page.b ?? [])
                .concat(page.t)
                .concat(!document.s || document.s === page.t ? [] : document.s)
            : document.b;
        wrapped.push(`<span class="${styles.hitPath}">${badge}${concatDocumentPath(pathItems ?? [])}</span>`);
    } else if (!isTitle) {
        wrapped.push(`<span class="${styles.hitPath}">${badge}${highlight(
            page.t ||
            // istanbul ignore next
            (document.u.startsWith("/docs/api-reference/") ? "API Reference" : ""),
            tokens
        )}</span>`);
    } else if (badge) {
        // For title-only results still show the badge
        wrapped.push(`<span class="${styles.hitPath}">${badge}</span>`);
    }

    const action = `<span class="${styles.hitAction}">${iconAction}</span>`;
    return [
        ...treeWrapper,
        icon,
        `<span class="${styles.hitWrapper}">`,
        ...wrapped,
        "</span>",
        action,
    ].join("");
}
