/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SMA Technologies Help',
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
      title: 'SMA Technologies Help',
      logo: {
        alt: 'SMA Technologies Help Logo',
        src: 'img/logo.svg',
        href: '/',
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
              to: '/training/opcon-basic/',
              label: 'Basic Training',
            },
            {
              to: '/training/opcon-deploy',
              label: 'Deploy Training',
            },
          ],
        },
        {
          to: 'releases',
          label: 'Releases',
          position: 'right',
        },
        {
          to: '/opcon/core/',
          label: 'OpCon',
          position: 'right',
        },
        {
          to: 'agents',
          label: 'Agents',
          position: 'right',
        },
        {
          to: 'connectors',
          label: 'Connectors',
          position: 'right',
        },
        {
          href: '/opcon/agents/opconmft/',
          label: 'MFT',
          position: 'right',
        },
        {
          href: '/opcon/deploy/',
          label: 'Deploy',
          position: 'right',
        },
        {
          href: 'https://smatechnologies.my.site.com/SMAOpConUserCommunity/s/login/',
          label: 'Support',
          position: 'right',
        },
        {
          href: 'https://help.smatechnologies.com/opcon/contributor-guide/',
          label: 'Contributor Guide',
          position: 'right',
        },
        {
          to: 'phone',
          label: 'Phone',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
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
        path: '../content/opcon-docs/docs',
        routeBasePath: 'opcon/core',
        sidebarPath: require.resolve('../content/opcon-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-docs/blob/main/',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'opcon-deploy-docs',
        path: '../content/opcon-deploy-docs/docs',
        routeBasePath: 'opcon/deploy',
        sidebarPath: require.resolve('../content/opcon-deploy-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-deploy-docs/blob/main/',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'opcon-basic-training',
        path: '../content/opcon-basic-training/docs',
        routeBasePath: 'training/opcon-basic',
        sidebarPath: require.resolve('../content/opcon-basic-training/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-basic-training/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'opcon-deploy-training',
        path: '../content/opcon-deploy-training/docs',
        routeBasePath: 'training/opcon-deploy',
        sidebarPath: require.resolve('../content/opcon-deploy-training/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-deploy-training/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'opcon-advanced-training',
        path: '../content/opcon-advanced-training/docs',
        routeBasePath: 'training/opcon-advanced',
        sidebarPath: require.resolve('../content/opcon-advanced-training/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/opcon-advanced-training/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ibm-i-agent-docs',
        path: '../content/ibm-i-agent-docs/docs',
        routeBasePath: 'opcon/agents/ibm-i',
        sidebarPath: require.resolve('../content/ibm-i-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/ibm-i-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'java-agent-docs',
        path: '../content/java-agent-docs/docs',
        routeBasePath: 'opcon/agents/java',
        sidebarPath: require.resolve('../content/java-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/java-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mcp-agent-docs',
        path: '../content/mcp-agent-docs/docs',
        routeBasePath: 'opcon/agents/mcp',
        sidebarPath: require.resolve('../content/mcp-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/mcp-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mft-agent-docs',
        path: '../content/mft-agent-docs/docs',
        routeBasePath: 'opcon/agents/opconmft',
        sidebarPath: require.resolve('../content/mft-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/mft-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'os2200-agent-docs',
        path: '../content/os2200-agent-docs/docs',
        routeBasePath: 'opcon/agents/os2200',
        sidebarPath: require.resolve('../content/os2200-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/os2200-agent-docs/main/blob',

      },
    ],  
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sap-agent-docs',
        path: '../content/sap-agent-docs/docs',
        routeBasePath: 'opcon/agents/sap',
        sidebarPath: require.resolve('../content/sap-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/sap-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sap-bw-agent-docs',
        path: '../content/sap-bw-agent-docs/docs',
        routeBasePath: 'opcon/agents/sap-bw',
        sidebarPath: require.resolve('../content/sap-bw-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/sap-bw-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sql-agent-docs',
        path: '../content/sql-agent-docs/docs',
        routeBasePath: 'opcon/agents/sql',
        sidebarPath: require.resolve('../content/sql-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/sql-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tuxedo-art-agent-docs',
        path: '../content/tuxedo-art-agent-docs/docs',
        routeBasePath: 'opcon/agents/tuxedo-art',
        sidebarPath: require.resolve('../content/tuxedo-art-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/tuxedo-art-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'unix-agent-docs',
        path: '../content/unix-agent-docs/docs',
        routeBasePath: 'opcon/agents/unix',
        sidebarPath: require.resolve('../content/unix-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/unix-agent-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'windows-agent-docs',
        path: '../content/windows-agent-docs/docs',
        routeBasePath: 'opcon/agents/windows',
        sidebarPath: require.resolve('../content/windows-agent-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/windows-agent-docs/main/blob',

      },
    ],
//    [
//      '@docusaurus/plugin-content-docs',
//      {
//        id: 'zos-agent-docs',
//        path: '../content/zos-agent-docs/docs',
//        routeBasePath: 'opcon/agents/zos',
//        sidebarPath: require.resolve('../content/zos-agent-docs/sidebars.js'),
//        editUrl:
//           'https://github.com/smatechnologies/zos-agent-docs/main/blob',
//
//      },
//    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'asysco-amt-connector-docs',
        path: '../content/asysco-amt-connector-docs/docs',
        routeBasePath: 'opcon/connectors/asysco-amt',
        sidebarPath: require.resolve('../content/asysco-amt-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/asysco-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'awsec2-connector-docs',
        path: '../content/awsec2-connector-docs/docs',
        routeBasePath: 'opcon/connectors/awsec2',
        sidebarPath: require.resolve('../content/awsec2-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/awsec2-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'azurestorage-connector-docs',
        path: '../content/azurestorage-connector-docs/docs',
        routeBasePath: 'opcon/connectors/azure-storage',
        sidebarPath: require.resolve('../content/azurestorage-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/azurestorage-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'azurevm-connector-docs',
        path: '../content/azurevm-connector-docs/docs',
        routeBasePath: 'opcon/connectors/azure-vm',
        sidebarPath: require.resolve('../content/azurevm-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/azurevm-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cegid-cbr-connector-docs',
        path: '../content/cegid-cbr-connector-docs/docs',
        routeBasePath: 'opcon/connectors/cegid-cbr',
        sidebarPath: require.resolve('../content/cegid-cbr-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/cegid-cbr-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cegid-orli-connector-docs',
        path: '../content/cegid-orli-connector-docs/docs',
        routeBasePath: 'opcon/connectors/cegid-orli',
        sidebarPath: require.resolve('../content/cegid-orli-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/cegid-orli-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'commvault-connector-docs',
        path: '../content/commvault-connector-docs/docs',
        routeBasePath: 'opcon/connectors/commvault',
        sidebarPath: require.resolve('../content/commvault-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/commvault-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'corelation-connector-docs',
        path: '../content/corelation-connector-docs/docs',
        routeBasePath: 'opcon/connectors/corelation',
        sidebarPath: require.resolve('../content/corelation-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/corelation-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'episys-connector-docs',
        path: '../content/episys-connector-docs/docs',
        routeBasePath: 'opcon/connectors/episys',
        sidebarPath: require.resolve('../content/episys-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/episys-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'fics-connector-docs',
        path: '../content/fics-connector-docs/docs',
        routeBasePath: 'opcon/connectors/fics',
        sidebarPath: require.resolve('../content/fics-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/fics-connector-docs/main/blob',

      },
    ], 
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dna-connector-docs',
        path: '../content/dna-connector-docs/docs',
        routeBasePath: 'opcon/connectors/fiserv-dna',
        sidebarPath: require.resolve('../content/dna-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/dna-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'easyvista-connector-docs',
        path: '../content/easyvista-connector-docs/docs',
        routeBasePath: 'opcon/connectors/easyvista',
        sidebarPath: require.resolve('../content/easyvista-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/easyvista-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'exigen-connector-docs',
        path: '../content/exigen-connector-docs/docs',
        routeBasePath: 'opcon/connectors/exigen',
        sidebarPath: require.resolve('../content/exigen-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/exigen-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'jdedwards-connector-docs',
        path: '../content/jdedwards-connector-docs/docs',
        routeBasePath: 'opcon/connectors/jdedwards',
        sidebarPath: require.resolve('../content/jdedwards-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/jdedwards-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'peoplesoft-connector-docs',
        path: '../content/peoplesoft-connector-docs/docs',
        routeBasePath: 'opcon/connectors/peoplesoft',
        sidebarPath: require.resolve('../content/peoplesoft-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/peoplesoft-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'servicenow-connector-docs',
        path: '../content/servicenow-connector-docs/docs',
        routeBasePath: 'opcon/connectors/servicenow',
        sidebarPath: require.resolve('../content/servicenow-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/servicenow-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'smart-email--docs',
        path: '../content/smart-email-docs/docs',
        routeBasePath: 'opcon/connectors/smart-email',
        sidebarPath: require.resolve('../content/smart-email-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/smart-email-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'unikix-connector-docs',
        path: '../content/unikix-connector-docs/docs',
        routeBasePath: 'opcon/connectors/unikix',
        sidebarPath: require.resolve('../content/unikix-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/unikix-connector-docs/main/blob',

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'webservices-connector-docs',
        path: '../content/webservices-connector-docs/docs',
        routeBasePath: 'opcon/connectors/webservices',
        sidebarPath: require.resolve('../content/webservices-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/webservices-connector-docs/main/blob',

      },
    ],      
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'xp2-connector-docs',
        path: '../content/xp2-connector-docs/docs',
        routeBasePath: 'opcon/connectors/xp2',
        sidebarPath: require.resolve('../content/xp2-connector-docs/sidebars.js'),
        editUrl:
            'https://github.com/smatechnologies/xp2-connector-docs/main/blob',

      },
    ],  
],
};
