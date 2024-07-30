// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import {themes as prismThemes} from 'prism-react-renderer';
import fs from 'fs';
import path from 'path';

function getConfigJson() {
  const configJsonPath = path.join(__dirname, 'config.json');
  const data = fs.readFileSync(configJsonPath, 'utf8');
  return JSON.parse(data);
}

const configurations = getConfigJson();

function getFirstPageFromJson(sectionName) {
  try {
    // Read the JSON file
    // const data = getConfigJson();

    // Parse the JSON data
    const jsonData = configurations.sidebar;

    // Check if the section exists in the JSON data
    if (jsonData[sectionName]) {
      // Get the first category in the section
      const firstCategory = jsonData[sectionName][0];
      
      if (firstCategory) {
        // Check if the first category has pages
        const firstPage = firstCategory.pages[0];
        
        if (firstPage) {
          // Return the first page or page object
          if (typeof firstPage === 'string') {
            return firstPage;
          } else if (typeof firstPage === 'object' && firstPage.page) {
            return firstPage.page;
          }
        }
      }
    }
    // If no page is found, return null or undefined
    return null;
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    return null;
  }
}

function createOpenApiConfig() {
  const directoryPath = 'openapi';
  const proxyUrl = 'https://proxy.writechoice.io/';
  const outputBaseDir = 'docs/api-reference';

  // Read the files in the openapi directory
  const files = fs.readdirSync(directoryPath);

  const config = files.reduce((acc, file) => {
    const fileName = path.parse(file).name; // Get the base name without extension
    const specPath = `${directoryPath}/${file}`;
    const outputDir = `${outputBaseDir}/${fileName.replace('_', '-')}`;

    acc[fileName] = {
      specPath,
      proxy: proxyUrl,
      outputDir,
    };

    return acc;
  }, {});

  return {
    id: 'openapi',
    docsPluginId: 'classic',
    config,
  };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: configurations.websiteName,
  tagline: configurations.description,
  favicon: configurations.images.favicon,

  // Set the production url of your site here
  url: 'https://docs.digitzs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: configurations.organizationName, // Usually your GitHub org/user name.
  projectName: configurations.repositoryName, // Usually your repo name.

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
      image: configurations.images.logo,
      navbar: {
        //title: 'Deets Documentation',
        logo: {
          alt: 'deets logo',
          src: configurations.images.logo,
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
            docId: getFirstPageFromJson('docs'),
          },
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
        createOpenApiConfig()
      ],
    ],
  
    themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
