// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AzerothCore 艾泽拉斯魔兽世界服务端',
  tagline: 'AzerothCore 艾泽拉斯魔兽世界服务端',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://azeroth.bookhub.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dev2007', // Usually your GitHub org/user name.
  projectName: 'azerothcore-doc', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8380975615223941',
      crossorigin: 'anonymous'
    },
    {
      src: 'https://hm.baidu.com/hm.js?515219eaf5ea41da1f256ab6720cc764',
      async: true
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs:{
        sidebar: {
          hideable: true,
        },
      },
      metadata: [{ name: 'keywords', content: 'AzerothCore,艾泽拉斯,魔兽世界,魔兽世界单机版,wow,World of Warcraft,暴雪,魔兽争霸' },{name: "baidu-site-verification",content: "codeva-A3wvTEAORf"}],
      navbar: {
        title: 'AzerothCore 艾泽拉斯魔兽世界服务端',
        logo: {
          alt: 'AzerothCore Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {
            href: 'https://github.com/dev2007/azerothcore-doc',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub 仓库',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'BookHub',
            items: [
              {
                label: '首页',
                href: 'https://www.bookhub.tech'
              },
              {
                label: '中文文档',
                href: 'https://docs.bookhub.tech',
              },
            ],
          },
          {
            title: '其他文档',
            items: [
              {
                label: 'Micronaut',
                href: 'https://micronaut.bookhub.tech',
              },
              {
                label: 'ElasticSearch',
                href: 'https://elasticsearch.bookhub.tech',
              },
              {
                label: 'MySQL',
                href: 'https://mysql.bookhub.tech',
              },
              {
                label: 'Pac4j',
                href: 'https://pac4j.bookhub.tech',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} bookHub.tech`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'java', 'yaml', 'json', 'groovy', 'kotlin', 'graphql', 'properties', 'toml', 'hoon']
      },
    }),
};

module.exports = config;
