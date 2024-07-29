// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Deets Docs',
  tagline: 'Deets is an all-in-one solution designed to address challenges in legacy payment systems, such as compliance with various regulations and merchant onboarding. ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.digitzs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'deets', // Usually your GitHub org/user name.
  projectName: 'doc-portal-deets', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          // hideable: true,
          autoCollapseCategories: true,
        },
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255,0.9)',
          dark: 'rgb(50, 50, 50)',
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        },
      },
      // Replace with your project's social card
      image: 'img/small-logo.png',
      navbar: {
        //title: 'Deets Documentation',
        logo: {
          alt: 'deets logo',
          src: 'img/small-logo.png',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
            className: 'home_btn'
          },
          {
            type: 'doc',
            position: 'left',
            label: 'Guides',
            className: 'guides_btn',
            docId: 'getting-started/what-is-deets',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'apiReference',
            className: 'api_btn',
            label: 'API Reference',
          },
          /*{
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       /*{
        //         label: 'Blog',
        //         to: '/blog',
        //       },*/
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()}  | DIGITZS Solutions Inc. All trademarks and copyrights belong to their respective owners.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        prism: {
          additionalLanguages: [
            "ruby",
            "csharp",
            "php",
            "java",
            "powershell",
            "json",
            "bash",
          ],
        },
      },
    }),
    plugins: [
      'docusaurus-plugin-image-zoom',
      [ require.resolve('docusaurus-lunr-search'), {
        maxHits: '7',
        highlightResult: 'true'
      }],
      [
        "docusaurus-plugin-openapi-docs",
        {
          id: "openapi",
          docsPluginId: "classic",
          config: {
            /*petstore: {
              specPath: "openapi-files/petstore.yaml",
              outputDir: "docs/petstore",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag",
              },
            },*/
            authorization: {
              specPath: "openapi-files/authorization.yml",
              proxy: "https://proxy.writechoice.io/",
              outputDir: "docs/api-reference/authorization",
            },
            merchants: {
              specPath: "openapi-files/merchant.yml",
              proxy: "https://proxy.writechoice.io/",
              outputDir: "docs/api-reference/merchants",
            },
            payments: {
              specPath: "openapi-files/payments.yml",
              proxy: "https://proxy.writechoice.io/",
              outputDir: "docs/api-reference/payments",
            },
            paymentsplit: {
              specPath: "openapi-files/payment-split.yml",
              proxy: "https://proxy.writechoice.io/",
              outputDir: "docs/api-reference/payment-split",
            },
            refundSplit: {
              specPath: "openapi-files/refund-split.yml",
              proxy: "https://proxy.writechoice.io/",
              outputDir: "docs/api-reference/refund-split",
            },
            refund: {
              specPath: "openapi-files/refund.yml",
              proxy: "https://proxy.writechoice.io/",
              outputDir: "docs/api-reference/refund",
            },
          } 
        },
      ],
    ],
  
    themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
