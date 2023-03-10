const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'willismax',
  tagline: 'willismax website',
  url: 'https://willismax.github.io/', //'https://<<github帳號>>.github.io/, 
  baseUrl: '/my-site/', ///專案名稱 repo name/
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'willismax', // Usually your GitHub org/user name.
  projectName: 'my-site', // Usually your repo name.
  githubHost: 'github.com',
  i18n: {
    defaultLocale: 'zh-TW',     // 預設語系
    locales: ['en', 'zh-TW'],   // 語系配置
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-TW': {
        label: '繁體中文（台灣）',
        direction: 'ltr',
      },
    },
  },
  

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-N364955R5S',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://willismax.github.io/my-site/edit/main/website/', //改
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://willismax.github.io/my-site/edit/main/website/', //改
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Willismax 威力斯',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docusaurus Tutorial',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'},
          {
            href: 'https://github.com/willismax',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '官方 Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'HackMD',
                href: 'https://hackmd.io/@wiimax',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/willis-chen/',
              },
              {
                label: 'iThome',
                href: 'https://ithelp.ithome.com.tw/users/20121130/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wiimax9527',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/willismax',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Willismax. Built with Docusaurus.`,
      },
      metadata: [{ name: "robots", content: "max-image-preview:large" }],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      plugins: ['@docusaurus/theme-live-codeblock'],
        themeConfig: {
          liveCodeBlock: {
            /**
             * The position of the live playground, above or under the editor
             * Possible values: "top" | "bottom"
             */
            playgroundPosition: 'bottom',
          },
        },
    }),
});
