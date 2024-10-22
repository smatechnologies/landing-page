/** @type {import('@docusaurus/types').DocusaurusConfig} */
const VersionsArchived = require("./opcon-docs_versionsArchived.json");
module.exports = {
  title: 'Help',
  tagline: 'SMA Help',
  url: 'https://help.smatechnologies.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'smatechnologies',
  projectName: 'help-landing-page',
  themeConfig: {
    navbar: {
      title: 'SMA Technologies',
      logo: {
        alt: 'SMA Technologies Help Logo',
        src: 'img/smabranding.svg',
        href: 'https://www.smatechnologies.com',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Training',
          position: 'right',
          items: [
            {
              href: 'https://www.smatechnologies.com/training',
              label: 'Training Registration',
            },
            {
              to: '/basic-training-agenda/',
              label: 'Basic Training Agenda',
            },
            {
              to: '/training/opcon-basic/',
              label: 'Basic Training Content',
            },
            {
              to: '/deploy-training-agenda/',
              label: 'Deploy Training Agenda',
            },
            {
              to: '/training/opcon-deploy',
              label: 'Deploy Training Content',
            },
            {
              to: '/advanced-training-agenda/',
              label: 'Advanced Training Agenda',
            },
            {
              to: '/sm_vs_em/',
              label: 'Solution Manager/Enterprise Manager Side-by-Side',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Customer Service',
          position: 'right',
          items: [
            {
              href: 'https://smatech2.my.site.com/SMAOpConUserCommunity/s/',
              label: 'Support',
            },
            {
              to: '/opcon/knowledge-base/',
              label: 'Knowledge Base',
            },
          ],
        },
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
        {
          type: "docsVersionDropdown",
          position: "left",
          docsPluginId: 'opcon-docs',
          dropdownItemsAfter: [
            ...Object.entries(VersionsArchived).map(
              ([versionName, versionUrl]) => ({
                label: versionName,
                href: versionUrl,
              })
            ),
            {
              href: '/opcon-release-notes-22/',
              label: 'OpCon 22.x STS Release Notes',
            },
            {
              to: '/opcon-release-notes-21',
              label: 'OpCon 21.x STS Release Notes',
            },
          ],
        },
        {
          to: '/integrations/',
          label: 'Integrations',
          position: 'left',
        },
        {
          href: '/opcon/deploy/',
          label: 'Deploy',
          position: 'left',
        },
        {
          href: '/opcon-relay/',
          label: 'Relay',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          to: '/opcon/contributor-guide/',
          label: 'Contributor Guide',
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SMA Technologies.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/smatechnologies/landing-page/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: "G-7XYMFXX81Y",
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'opcon-docs',
        path: '../content/smatechnologies/opcon-docs/docs',
        routeBasePath: 'opcon/core',
        sidebarPath: require.resolve('../content/smatechnologies/opcon-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-docs/blob/main/',
        lastVersion: "current",
        versions: {
          current: {
            label: "OpCon",
          },         
          "23.0": {
            label: "OpCon 23.0 (On-Prem)",
            path: "v23.0",
            banner: "none",
          },
          "22.0": {
            label: "OpCon 22.0 (On-Prem)",
            path: "v22.0",
            banner: "none",
          },
          "21.0": {
            label: "OpCon 21.0 (On-Prem)",
            path: "v21.0",
            banner: "none",
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'opcon-deploy-docs',
        path: '../content/smatechnologies/opcon-deploy-docs/docs',
        routeBasePath: 'opcon/deploy',
        sidebarPath: require.resolve('../content/smatechnologies/opcon-deploy-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-deploy-docs/blob/main/',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-contributor-guide',
        path: '../content/smatechnologies/docs-contributor-guide/docs',
        routeBasePath: 'opcon/contributor-guide',
        sidebarPath: require.resolve('../content/smatechnologies/docs-contributor-guide/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/docs-contributor-guide/blob/main/',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'opcon-basic-training',
        path: '../content/smatechnologies/opcon-basic-training/docs',
        routeBasePath: 'training/opcon-basic',
        sidebarPath: require.resolve('../content/smatechnologies/opcon-basic-training/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-basic-training/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'opcon-deploy-training',
        path: '../content/smatechnologies/opcon-deploy-training/docs',
        routeBasePath: 'training/opcon-deploy',
        sidebarPath: require.resolve('../content/smatechnologies/opcon-deploy-training/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-deploy-training/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'opcon-advanced-training',
        path: '../content/smatechnologies/opcon-advanced-training/docs',
        routeBasePath: 'training/opcon-advanced',
        sidebarPath: require.resolve('../content/smatechnologies/opcon-advanced-training/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-advanced-training/main/blob',
        
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'modular-training',
        path: '../content/smatechnologies/modular-training/docs',
       routeBasePath: 'training/modular-training',
        sidebarPath: require.resolve('../content/smatechnologies/modular-training/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/modular-training/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'opcon-mft-training',
        path: '../content/smatechnologies/opcon-mft-training/docs',
        routeBasePath: 'training/opcon-mft-training',
        sidebarPath: require.resolve('../content/smatechnologies/opcon-mft-training/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-mft-training/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guidewire-agent-docs',
        path: '../content/smatechnologies/guidewire-agent-docs/docs',
        routeBasePath: 'opcon/agents/guidewire',
        sidebarPath: require.resolve('../content/smatechnologies/guidewire-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/guidewire-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ibm-i-agent-docs',
        path: '../content/smatechnologies/ibm-i-agent-docs/docs',
        routeBasePath: 'opcon/agents/ibm-i',
        sidebarPath: require.resolve('../content/smatechnologies/ibm-i-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/ibm-i-agent-docs/main/blob',
            lastVersion: "current",
            versions: {
              current: {
                label: "23.1",
              },
              "21.1": {
                label: "21.1",
                path: "v21.1",
                banner: "none",
              },
              "18.1": {
                label: "18.1",
                path: "v18.1",
                banner: "none",
              },
            },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'jaspersoft-connector-docs',
        path: '../content/smatechnologies/jaspersoft-connector-docs/docs',
        routeBasePath: 'opcon/connectors/jaspersoft',
        sidebarPath: require.resolve('../content/smatechnologies/jaspersoft-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/jaspersoft-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'java-agent-docs',
        path: '../content/smatechnologies/java-agent-docs/docs',
        routeBasePath: 'opcon/agents/java',
        sidebarPath: require.resolve('../content/smatechnologies/java-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/java-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'jboss-connector-docs',
        path: '../content/smatechnologies/jboss-connector-docs/docs',
        routeBasePath: 'opcon/connectors/jboss',
        sidebarPath: require.resolve('../content/smatechnologies/jboss-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/jboss-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'knowledge-base-docs',
        path: '../content/smatechnologies/knowledge-base-docs/docs',
        routeBasePath: 'opcon/knowledge-base',
        sidebarPath: require.resolve('../content/smatechnologies/knowledge-base-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/knowledge-base-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mcp-agent-docs',
        path: '../content/smatechnologies/mcp-agent-docs/docs',
        routeBasePath: 'opcon/agents/mcp',
        sidebarPath: require.resolve('../content/smatechnologies/mcp-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/mcp-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mft-agent-docs',
        path: '../content/smatechnologies/mft-agent-docs/docs',
        routeBasePath: 'opcon/agents/opconmft',
        sidebarPath: require.resolve('../content/smatechnologies/mft-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/mft-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'opcon-rpa-docs',
        path: '../content/smatechnologies/opcon-rpa-docs/docs',
        routeBasePath: 'opcon/agents/opcon-rpa',
        sidebarPath: require.resolve('../content/smatechnologies/opcon-rpa-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-rpa-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'os2200-agent-docs',
        path: '../content/smatechnologies/os2200-agent-docs/docs',
        routeBasePath: 'opcon/agents/os2200',
        sidebarPath: require.resolve('../content/smatechnologies/os2200-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/os2200-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sap-agent-docs',
        path: '../content/smatechnologies/sap-agent-docs/docs',
        routeBasePath: 'opcon/agents/sap',
        sidebarPath: require.resolve('../content/smatechnologies/sap-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/sap-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sap-bw-agent-docs',
        path: '../content/smatechnologies/sap-bw-agent-docs/docs',
        routeBasePath: 'opcon/agents/sap-bw',
        sidebarPath: require.resolve('../content/smatechnologies/sap-bw-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/sap-bw-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sap-data-services-docs',
        path: '../content/smatechnologies/sap-data-services-docs/docs',
        routeBasePath: 'opcon/connectors/sap-data-services',
        sidebarPath: require.resolve('../content/smatechnologies/sap-data-services-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/sap-data-services-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sql-agent-docs',
        path: '../content/smatechnologies/sql-agent-docs/docs',
        routeBasePath: 'opcon/agents/sql',
        sidebarPath: require.resolve('../content/smatechnologies/sql-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/sql-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tuxedo-art-agent-docs',
        path: '../content/smatechnologies/tuxedo-art-agent-docs/docs',
        routeBasePath: 'opcon/agents/tuxedo-art',
        sidebarPath: require.resolve('../content/smatechnologies/tuxedo-art-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/tuxedo-art-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'unix-agent-docs',
        path: '../content/smatechnologies/unix-agent-docs/docs',
        routeBasePath: 'opcon/agents/unix',
        sidebarPath: require.resolve('../content/smatechnologies/unix-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/unix-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'windows-agent-docs',
        path: '../content/smatechnologies/windows-agent-docs/docs',
        routeBasePath: 'opcon/agents/windows',
        sidebarPath: require.resolve('../content/smatechnologies/windows-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/windows-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'zos-agent-docs',
        path: '../content/smatechnologies/zos-agent-docs/docs',
        routeBasePath: 'opcon/agents/zos',
        sidebarPath: require.resolve('../content/smatechnologies/zos-agent-docs/sidebars.js'),
        editUrl:
           'https://github.com/smatechnologies/zos-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'asysco-amt-connector-docs',
        path: '../content/smatechnologies/asysco-amt-connector-docs/docs',
        routeBasePath: 'opcon/connectors/asysco-amt',
        sidebarPath: require.resolve('../content/smatechnologies/asysco-amt-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/asysco-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'awsec2-connector-docs',
        path: '../content/smatechnologies/awsec2-connector-docs/docs',
        routeBasePath: 'opcon/connectors/awsec2',
        sidebarPath: require.resolve('../content/smatechnologies/awsec2-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/awsec2-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'azurestorage-connector-docs',
        path: '../content/smatechnologies/azurestorage-connector-docs/docs',
        routeBasePath: 'opcon/connectors/azure-storage',
        sidebarPath: require.resolve('../content/smatechnologies/azurestorage-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/azurestorage-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'azurevm-connector-docs',
        path: '../content/smatechnologies/azurevm-connector-docs/docs',
        routeBasePath: 'opcon/connectors/azure-vm',
        sidebarPath: require.resolve('../content/smatechnologies/azurevm-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/azurevm-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cegid-cbr-connector-docs',
        path: '../content/smatechnologies/cegid-cbr-connector-docs/docs',
        routeBasePath: 'opcon/connectors/cegid-cbr',
        sidebarPath: require.resolve('../content/smatechnologies/cegid-cbr-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/cegid-cbr-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cegid-orli-connector-docs',
        path: '../content/smatechnologies/cegid-orli-connector-docs/docs',
        routeBasePath: 'opcon/connectors/cegid-orli',
        sidebarPath: require.resolve('../content/smatechnologies/cegid-orli-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/cegid-orli-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'commvault-connector-docs',
        path: '../content/smatechnologies/commvault-connector-docs/docs',
        routeBasePath: 'opcon/connectors/commvault',
        sidebarPath: require.resolve('../content/smatechnologies/commvault-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/commvault-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'corelation-connector-docs',
        path: '../content/smatechnologies/corelation-connector-docs/docs',
        routeBasePath: 'opcon/connectors/corelation',
        sidebarPath: require.resolve('../content/smatechnologies/corelation-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/corelation-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'episys-connector-docs',
        path: '../content/smatechnologies/episys-connector-docs/docs',
        routeBasePath: 'opcon/connectors/episys',
        sidebarPath: require.resolve('../content/smatechnologies/episys-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/episys-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'fics-connector-docs',
        path: '../content/smatechnologies/fics-connector-docs/docs',
        routeBasePath: 'opcon/connectors/fics',
        sidebarPath: require.resolve('../content/smatechnologies/fics-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/fics-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dna-connector-docs',
        path: '../content/smatechnologies/dna-connector-docs/docs',
        routeBasePath: 'opcon/connectors/fiserv-dna',
        sidebarPath: require.resolve('../content/smatechnologies/dna-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/dna-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'easyvista-connector-docs',
        path: '../content/smatechnologies/easyvista-connector-docs/docs',
        routeBasePath: 'opcon/connectors/easyvista',
        sidebarPath: require.resolve('../content/smatechnologies/easyvista-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/easyvista-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'exigen-connector-docs',
        path: '../content/smatechnologies/exigen-connector-docs/docs',
        routeBasePath: 'opcon/connectors/exigen',
        sidebarPath: require.resolve('../content/smatechnologies/exigen-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/exigen-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'jdedwards-connector-docs',
        path: '../content/smatechnologies/jdedwards-connector-docs/docs',
        routeBasePath: 'opcon/connectors/jdedwards',
        sidebarPath: require.resolve('../content/smatechnologies/jdedwards-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/jdedwards-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'peoplesoft-connector-docs',
        path: '../content/smatechnologies/peoplesoft-connector-docs/docs',
        routeBasePath: 'opcon/connectors/peoplesoft',
        sidebarPath: require.resolve('../content/smatechnologies/peoplesoft-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/peoplesoft-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sapbo-connector-docs',
        path: '../content/smatechnologies/sapbo-connector-docs/docs',
        routeBasePath: 'opcon/connectors/sapbo',
        sidebarPath: require.resolve('../content/smatechnologies/sapbo-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/sapbo-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'servicenow-connector-docs',
        path: '../content/smatechnologies/servicenow-connector-docs/docs',
        routeBasePath: 'opcon/connectors/servicenow',
        sidebarPath: require.resolve('../content/smatechnologies/servicenow-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/servicenow-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'smart-email--docs',
        path: '../content/smatechnologies/smart-email-docs/docs',
        routeBasePath: 'opcon/connectors/smart-email',
        sidebarPath: require.resolve('../content/smatechnologies/smart-email-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/smart-email-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'symphonysummit-connector--docs',
        path: '../content/smatechnologies/symphonysummit-connector-docs/docs',
        routeBasePath: 'opcon/connectors/symphonysummit',
        sidebarPath: require.resolve('../content/smatechnologies/symphonysummit-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/symphonysummit-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'unikix-connector-docs',
        path: '../content/smatechnologies/unikix-connector-docs/docs',
        routeBasePath: 'opcon/connectors/unikix',
        sidebarPath: require.resolve('../content/smatechnologies/unikix-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/unikix-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vmware-connector-docs',
        path: '../content/smatechnologies/vmware-connector-docs/docs',
        routeBasePath: 'opcon/connectors/vmware',
        sidebarPath: require.resolve('../content/smatechnologies/vmware-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/vmware-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'webservices-connector-docs',
        path: '../content/smatechnologies/webservices-connector-docs/docs',
        routeBasePath: 'opcon/connectors/webservices',
        sidebarPath: require.resolve('../content/smatechnologies/webservices-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/webservices-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wsus-connector-docs',
        path: '../content/smatechnologies/wsus-connector-docs/docs',
        routeBasePath: 'opcon/connectors/wsus',
        sidebarPath: require.resolve('../content/smatechnologies/wsus-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/wsus-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'xp2-connector-docs',
        path: '../content/smatechnologies/xp2-connector-docs/docs',
        routeBasePath: 'opcon/connectors/xp2',
        sidebarPath: require.resolve('../content/smatechnologies/xp2-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/xp2-connector-docs/main/blob',

      },
    ],
//    [
//      '@docusaurus/plugin-content-docs',
//      {
//        id: 'opcon-acs-sdk-docs',
//        path: '../content/smatechnologies/opcon-acs-sdk-docs/docs',
//        routeBasePath: 'opcon/connectors/opcon-acs-sdk',
//        sidebarPath: require.resolve('../content/smatechnologies/opcon-acs-sdk-docs/sidebars.js'),
//        editUrl:
//            'https://github.com/smatechnologies/opcon-acs-sdk-docs/main/blob',
//     },
//    ],
],
};
