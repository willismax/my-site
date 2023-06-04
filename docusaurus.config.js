const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'willismax',
  tagline: '威力斯 技術分享',
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
      // /** @type {import('@docusaurus/preset-classic').Options} */
      {
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        blog: {
          showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          blogTitle: '威力斯技術填坑分享部落格!',
          blogDescription: '威力斯在技術上不停地踩坑與填坑，分享技術與應用的心得',
          editUrl:
            'https://willismax.github.io/my-site/edit/main/website/', //改
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} willismax.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
            
        },
        gtag: {
          trackingID: 'G-N364955R5S',
          anonymizeIP: true,
        },
        
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://willismax.github.io/my-site/edit/main/website/', //改
        // },
       
        
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'willismax 威力斯',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: "/blog",
            activeBasePath: "blog",
            label: "Blog",
            position: "right",
            items: [
              {
                label: "Tech",
                to: "/blog/tags/Tech",
              },
              {
                label: "ESG",
                to: "/blog/tags/ESG",
              },
            ],
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docs',
          },
          {
            href: "https://hackmd.io/@wiimax",
            label: "HackMD",
            position: "right",
          },
          {
            href: 'https://github.com/willismax/my-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: '關於我',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'HackMD',
        //         href: 'https://hackmd.io/@wiimax',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/willismax',
        //       },
        //       {
        //         label: 'iThome',
        //         href: 'https://ithelp.ithome.com.tw/users/20121130/',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Social',
        //     items: [
              
        //       {
        //         label: 'LinkedIn',
        //         href: 'https://www.linkedin.com/in/willis-chen/',
        //       },
              
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/wiimax9527',
        //       },
        //     ],
        //   }, 
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} willismax. Built with Docusaurus.`,
      },
      metadata: [
        { name: "robots", content: "max-image-preview:large" },
        { name: '威力斯', content: 'Python, ICT, Python, Tech, ESG'}
    ],
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
      giscus: {
        repo: 'willismax/my-site',
        repoId: 'R_kgDOJEzR1A',
        category: 'Announcements',
        categoryId: 'DIC_kwDOJEzR1M4CW7nQ',
        theme: 'light',
        darkTheme: 'dark',
      },
      facebookPixelId : {
        facebookAppId: '212741651307312',
      },
    }),
});
