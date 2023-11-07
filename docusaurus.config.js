const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Will is MAX',
  tagline: '學而時習之，不亦悅乎',
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
    defaultLocale: 'zh-TW',     
    locales: ['zh-TW','en'],  
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',       
      },
      'zh-TW': {
        label: '繁體中文（台灣）',
        direction: 'ltr',
      },
    },
    
  },

  // scripts: [
    
  //   // String format.
  //   'https://docusaurus.io/script.js',
  //   // Object format.
  //   {
  //     src:
  //       'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  //     async: true,    // 是否同步
  //   },
  // ],

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
          blogTitle: 'Willismax 威力斯資訊技部落格!',
          blogDescription: '威力斯在技術上不停地踩坑與填坑，分享技術與應用的心得',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          editUrl:
            'https://github.com/willismax/my-site/blob/main/', //改
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} willismax.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 15 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 15),
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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/willismax/my-site/blob/main/',
        },
      },
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({  
      algolia: {
        appId: 'HRS5TFT9KD',
        apiKey: '079bfb99b9ac37548344f80d32d2e07e',
        indexName: 'willismax',
      },
      announcementBar: {
        id: 'support_us',
        content: '⭐️ 如果這個網站能幫助到你，歡迎給一個Star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/willismax/my-site">GitHub</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      }, 
      navbar: {
        title: 'WillisMax',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc', 
            docId: 'intro',
            position: 'left',
            label: '教學與技術文',
          },
          {
            to: "/blog", 
            activeBasePath: "blog",
            label: "文章",
            position: "left",
            // items: [
            //   {
            //     label: "Tech",
            //     to: "/blog/tags/Tech",
            //   },
            //   {
            //     label: "ESG",
            //     to: "/blog/tags/ESG",
            //   },
            // ],
          },
          { 
            to: "about/", 
            label: "關於我", 
            position: "right" },

          // {
          //   href: "https://hackmd.io/@wiimax",
          //   label: "HackMD",
          //   position: "right",
          // },
          // {
          //   type: 'localeDropdown',
          //   position: 'left',
          // },
          {
            href: 'https://github.com/willismax/my-site',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
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
        copyright: `Copyright © 2022-${new Date().getFullYear()} willismax. Built with Docusaurus.`,
      },
      metadata: [
        { name: "robots", content: "max-image-preview:large" },
        { name: '威力斯', content: 'Python, ICT, Tech'},
        { name: "robots", content: "max-image-preview:large" }
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      plugins: [
        [
          '@docusaurus/theme-live-codeblock',
          {
            themeConfig: {
              liveCodeBlock: {
                playgroundPosition: 'bottom', //"top" | "bottom"
              },
            }
          },
          "posthog-docusaurus",
          {
            apiKey: process.env.POSTHOG_API_KEY || "DEV",
            appUrl: "https://app.posthog.com", // optional
            enableInDevelopment: false, // optional
          },
          "giscus",
           {
            repo: 'willismax/my-site',
            repoId: 'R_kgDOJEzR1A',
            category: 'Announcements',
            categoryId: 'DIC_kwDOJEzR1M4CW7nQ',
            theme: 'light',
            darkTheme: 'dark',
          },
        ],
      ],
    
    }),
});