const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Will is MAX',
  tagline: '學而時習之，不亦悅乎',
  url: 'https://willismax.github.io/',
  baseUrl: '/my-site/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  markdown: {
    format: 'detect',
    mermaid: true,
  },
  favicon: 'img/favicon.ico',
  organizationName: 'willismax',
  projectName: 'my-site',
  githubHost: 'github.com',
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          blogTitle: 'Willismax 威利斯資訊技部落格!',
          blogDescription: '威利斯在技術上不停地踩坑與填坑，分享技術與應用的心得',
          postsPerPage: 'ALL',
          blogSidebarTitle: '所有文章',
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/willismax/my-site/blob/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} willismax.`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
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
          editUrl: 'https://github.com/willismax/my-site/blob/main/',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/blog/用HackMD API打造個人專屬LINE BOT助手',
            to: '/blog/hackmd-line-bot',
          },
          {
            from: '/blog/用PlayWright抓取動態網站資料',
            to: '/blog/playwright-web-scraping',
          },
          {
            from: '/blog/在 Render 上快速部署 HackMD 與 LINE 的聊天機器人',
            to: '/blog/hackmd-line-bot-render',
          },
          {
            from: '/blog/Python 虛擬環境管理 - pipenv 與 venv 比較',
            to: '/blog/pipenv-vs-venv',
          },
          {
            from: '/blog/Customize Your AI Teaching Assistant - A Socratic Approach',
            to: '/blog/ai-teaching-assistant-socratic',
          },
          {
            from: '/blog/如何使用 GitHub Codespace 建立並部署 LINE Bot',
            to: '/blog/github-codespaces-line-bot',
          },
          {
            from: '/blog/使用 Whisper 離線完成聲音轉文字',
            to: '/blog/whisper-speech-to-text',
          },
          {
            from: '/blog/在 Zeabur 使用 n8n 開發 LINE Bot：新手與開發者的真實體驗',
            to: '/blog/n8n-line-bot-zeabur',
          },
          {
            from: '/blog/為什麼該用 uv 取代傳統的 Python venv？',
            to: '/blog/uv-vs-venv',
          },
          {
            from: '/blog/Java 陣列是 call by address？Python 是 call by reference？兩個常見誤解一次釐清',
            to: '/blog/java-array-python-list-pass-by-value',
          },
          {
            from: '/blog/用 GAS 打造專屬 LINE AI 課程助教，整合 Gemini、上下文記憶與 Google 試算表 QA 知識庫',
            to: '/blog/line-ai-course-assistant',
          },
        ],
      },
    ],
    [
      'posthog-docusaurus',
      {
        apiKey: process.env.POSTHOG_API_KEY || 'phc_placeholder',
        appUrl: 'https://app.posthog.com',
        enableInDevelopment: false,
      },
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'HRS5TFT9KD',
        apiKey: '079bfb99b9ac37548344f80d32d2e07e',
        indexName: 'willismax',
      },
      announcementBar: {
        id: 'welcome_back_2025',
        content:
          '🎉 部落格全新改版！歡迎回來！如果覺得有幫助，歡迎給個 ⭐️ <a target="_blank" rel="noopener noreferrer" href="https://github.com/willismax/my-site">GitHub</a>',
        backgroundColor: '#0d1117',
        textColor: '#e6edf3',
        isCloseable: true,
      },
      navbar: {
        title: 'WillisMax',
        logo: {
          alt: 'WillisMax Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '📚 教學文件',
          },
          {
            to: '/blog',
            activeBasePath: 'blog',
            label: '✏️ 文章',
            position: 'left',
          },
          {
            to: '/portfolio',
            label: '🏆 作品集',
            position: 'left',
          },
          {
            to: '/about',
            label: '👤 關於我',
            position: 'right',
          },
          {
            href: 'https://hackmd.io/@wiimax',
            label: 'HackMD',
            position: 'right',
          },
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
        links: [
          {
            title: '內容',
            items: [
              {
                label: '教學文件',
                to: '/docs/intro',
              },
              {
                label: '文章',
                to: '/blog',
              },
              {
                label: '作品集',
                to: '/portfolio',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: 'HackMD',
                href: 'https://hackmd.io/@wiimax',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/willismax',
              },
              {
                label: 'iThome',
                href: 'https://ithelp.ithome.com.tw/users/20121130/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/willis-chen/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'RSS Feed',
                href: 'https://willismax.github.io/my-site/blog/rss.xml',
              },
              {
                label: 'Atom Feed',
                href: 'https://willismax.github.io/my-site/blog/atom.xml',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} willismax. Built with Docusaurus.`,
      },
      metadata: [
        { name: 'robots', content: 'max-image-preview:large' },
        { name: 'keywords', content: 'Python, AI, Machine Learning, LINE Bot, 教學, Tech, Willis' },
        { name: 'author', content: 'willismax' },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['python', 'bash', 'json', 'yaml', 'docker', 'java'],
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      giscus: {
        repo: 'willismax/my-site',
        repoId: 'R_kgDOJEzR1A',
        category: 'Announcements',
        categoryId: 'DIC_kwDOJEzR1M4CW7nQ',
        theme: 'light',
        darkTheme: 'dark_dimmed',
      },
    }),
};

module.exports = config;
