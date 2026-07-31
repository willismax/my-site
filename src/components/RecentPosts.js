import React from 'react';
import Link from '@docusaurus/Link';

// Static recent posts data - update this when adding new blog posts
const recentPosts = [
    {
        title: '為什麼該用 uv 取代傳統的 Python venv？',
        date: '2025-05-26',
        description: '深入比較 uv 與傳統 venv 的差異，教你如何快速上手這個革命性的 Python 工具。',
        link: '/blog/uv-vs-venv',
        tags: ['Python', 'uv', 'venv'],
    },
    {
        title: '在 Zeabur 使用 n8n 開發 LINE Bot',
        date: '2025-03-30',
        description: '新手與開發者的真實體驗，使用 n8n 低程式碼平台打造 LINE Bot。',
        link: '/blog/n8n-line-bot-zeabur',
        tags: ['LINE Bot', 'n8n', 'Zeabur'],
    },
    {
        title: '使用 Whisper 離線完成聲音轉文字',
        date: '2023-12-17',
        description: '利用 OpenAI Whisper 模型在本地端完成語音辨識，無需網路即可使用。',
        link: '/blog/whisper-speech-to-text',
        tags: ['AI', 'Whisper', 'Speech'],
    },
    {
        title: '客製化你的 AI 教學助手 - 蘇格拉底引導教學法',
        date: '2023-10-10',
        description: '利用 AI 打造個人化教學助手，採用蘇格拉底式問答引導學習。',
        link: '/blog/ai-teaching-assistant-socratic',
        tags: ['AI', 'Education', 'LINE Bot'],
    },
];

export default function RecentPosts() {
    return (
        <section style={{ padding: '4rem 0', background: 'var(--surface-0)' }}>
            <div className="container">
                <div className="section-header">
                    <h2>最新文章</h2>
                    <p>技術分享與學習心得</p>
                </div>
                <div className="row">
                    {recentPosts.map((post, idx) => (
                        <div className="col col--6" key={idx}>
                            <Link to={post.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div
                                    className="card"
                                    style={{ marginBottom: '1.5rem', cursor: 'pointer' }}
                                >
                                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                                        {post.tags.map((tag) => (
                                            <span className="portfolio-card__tag" key={tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                        {post.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                        {post.description}
                                    </p>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        {post.date}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <Link className="button button--primary button--lg" to="/blog">
                        查看所有文章 →
                    </Link>
                </div>
            </div>
        </section>
    );
}
