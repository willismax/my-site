import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const portfolioItems = [
    {
        category: '🏆 ITHome 鐵人賽',
        items: [
            {
                title: '用 LINE 串起多媒體系統 (2020)',
                description:
                    '以 LINE Messaging API 為核心，串接多媒體服務打造完整聊天機器人系統。完賽 30 天連續技術文章。',
                tags: ['LINE Bot', 'Python', 'API'],
                links: [
                    {
                        label: '鐵人賽文章',
                        url: 'https://ithelp.ithome.com.tw/users/20121130/ironman/3131',
                    },
                    { label: '教學文件', url: '/docs/category/用line串起多媒體系統2020ithome鐵人賽' },
                ],
                image: 'https://d1dwq032kyr03c.cloudfront.net/images/ironman_sticker/12/self.png?sticker',
            },
            {
                title: '從 AI 落地談 MLOps (2021)',
                description:
                    '探討 AI 從開發到部署的完整流程，涵蓋 MLOps 概念與實踐。完賽 30 天連續技術文章。',
                tags: ['AI', 'MLOps', 'Python'],
                links: [
                    {
                        label: '鐵人賽文章',
                        url: 'https://ithelp.ithome.com.tw/users/20121130/ironman/4015',
                    },
                    { label: '教學文件', url: '/docs/category/從ai落地談mlops2021ithome鐵人賽' },
                ],
                image:
                    'https://d1dwq032kyr03c.cloudfront.net/images/ironman_sticker/13/ai-and-data.png?sticker',
            },
            {
                title: '小題大作的 30 個 HackMD 技巧 (2022)',
                description:
                    '總結 HackMD 的各種進階使用技巧，從基礎筆記到自動化流程，提升知識管理的效率。',
                tags: ['HackMD', 'Productivity', 'Tutorial'],
                links: [
                    {
                        label: 'iThome 主要連載',
                        url: 'https://ithelp.ithome.com.tw/users/20121130/ironman/5793',
                    },
                    {
                        label: 'GitHub',
                        url: 'https://github.com/willismax/Intro_HackMD',
                    },
                    {
                        label: '教學文件',
                        url: '/docs/category/小題大作的30個hackmd技巧2022ithome鐵人賽',
                    },
                ],
                image: 'https://d1dwq032kyr03c.cloudfront.net/images/ironman_sticker/14/self.png?sticker',
            },
        ],
    },
    {
        category: '🤖 LINE Bot 專案',
        items: [
            {
                title: 'AI 教學助手 - 蘇格拉底引導教學法',
                description:
                    '結合 Gemini AI 與 LINE Bot，打造採用蘇格拉底式問答法的 AI 教學助手，引導學生主動思考與學習。',
                tags: ['LINE Bot', 'AI', 'Education', 'Vercel'],
                links: [
                    {
                        label: '專案介紹',
                        url: '/blog/Customize Your AI Teaching Assistant - A Socratic Approach',
                    },
                ],
            },
            {
                title: 'HackMD LINE Bot 助手',
                description:
                    '串接 HackMD API 與 LINE Bot，可透過聊天快速存取和管理 HackMD 筆記。',
                tags: ['LINE Bot', 'HackMD', 'Python'],
                links: [
                    {
                        label: '專案介紹',
                        url: '/blog/用HackMD API打造個人專屬LINE BOT助手',
                    },
                    {
                        label: 'GitHub',
                        url: 'https://github.com/willismax/hackmd-line-bot-on-fly',
                    },
                ],
            },
        ],
    },
    {
        category: '📚 技術教學',
        items: [
            {
                title: 'Python 教學系列',
                description:
                    '從基礎語法到進階應用的 Python 教學文件，包含資料處理、爬蟲、API串接等主題。',
                tags: ['Python', 'Tutorial'],
                links: [{ label: '查看文件', url: '/docs/category/python' }],
            },
            {
                title: 'n8n 自動化工作流程',
                description:
                    '使用 n8n 低程式碼平台搭配 Zeabur 部署，打造自動化 LINE Bot 與 RAG 應用。',
                tags: ['n8n', 'LINE Bot', 'Low-Code', 'Zeabur'],
                links: [
                    {
                        label: '教學文章',
                        url: '/blog/在 Zeabur 使用 n8n 開發 LINE Bot：新手與開發者的真實體驗',
                    },
                ],
            },
            {
                title: 'Python 環境管理完全指南',
                description:
                    '深入比較 venv、pipenv、uv 等 Python 虛擬環境管理工具，協助你選擇最適合的方案。',
                tags: ['Python', 'uv', 'venv', 'pipenv'],
                links: [
                    { label: 'uv 教學', url: '/blog/為什麼該用 uv 取代傳統的 Python venv？' },
                    {
                        label: 'pipenv vs venv',
                        url: '/blog/Python 虛擬環境管理 - pipenv 與 venv 比較',
                    },
                ],
            },
        ],
    },
    {
        category: '🔧 工具與技巧',
        items: [
            {
                title: '使用 Whisper 離線語音轉文字',
                description:
                    '利用 OpenAI Whisper 模型在本地端完成語音辨識，無需網路連線即可使用。',
                tags: ['AI', 'Whisper', 'Speech-to-Text'],
                links: [
                    { label: '教學文章', url: '/blog/使用 Whisper 離線完成聲音轉文字' },
                ],
            },
            {
                title: 'PlayWright 動態網站爬蟲',
                description:
                    '使用 PlayWright 自動化瀏覽器抓取動態渲染網站的資料，適合處理 SPA 和 CSR 網站。',
                tags: ['Python', 'PlayWright', 'Scraping'],
                links: [
                    { label: '教學文章', url: '/blog/用PlayWright抓取動態網站資料' },
                ],
            },
        ],
    },
];

function PortfolioCard({ title, description, tags, links, image }) {
    return (
        <div className="portfolio-card">
            {image && (
                <div
                    style={{
                        height: '160px',
                        background: 'linear-gradient(135deg, #0c4a6e, #6366f1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem',
                    }}
                >
                    <img
                        src={image}
                        alt={title}
                        style={{ maxHeight: '120px', maxWidth: '100%', objectFit: 'contain' }}
                        loading="lazy"
                    />
                </div>
            )}
            <div className="portfolio-card__body">
                <div className="portfolio-card__tags">
                    {tags.map((tag) => (
                        <span className="portfolio-card__tag" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="portfolio-card__title">{title}</h3>
                <p className="portfolio-card__description">{description}</p>
                <div className="portfolio-card__links">
                    {links.map((link, i) => {
                        const isExternal = link.url.startsWith('http');
                        if (isExternal) {
                            return (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-card__link"
                                >
                                    {link.label} ↗
                                </a>
                            );
                        }
                        return (
                            <Link key={i} to={link.url} className="portfolio-card__link">
                                {link.label} →
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function Portfolio() {
    return (
        <Layout title="作品集" description="Willis 的教學與專案作品集">
            <div className="container" style={{ padding: '3rem 0' }}>
                <div className="section-header">
                    <h2>🏆 作品集</h2>
                    <p>教學課程、技術專案與開源貢獻</p>
                </div>

                {portfolioItems.map((category, idx) => (
                    <div key={idx} style={{ marginBottom: '3rem' }}>
                        <h2
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                paddingBottom: '0.75rem',
                                borderBottom: '2px solid var(--surface-3)',
                            }}
                        >
                            {category.category}
                        </h2>
                        <div className="portfolio-grid">
                            {category.items.map((item, i) => (
                                <PortfolioCard key={i} {...item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
