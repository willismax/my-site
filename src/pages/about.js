import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'AI / ML', icon: '🤖' },
    { name: 'LINE Bot', icon: '💬' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git / GitHub', icon: '📦' },
    { name: 'Data Analysis', icon: '📊' },
    { name: 'Web Scraping', icon: '🕸️' },
    { name: 'MLOps', icon: '⚙️' },
    { name: 'JavaScript', icon: '🌐' },
    { name: 'Cloud Deploy', icon: '☁️' },
    { name: 'n8n', icon: '🔗' },
    { name: 'HackMD', icon: '📝' },
];

const experiences = [
    {
        title: 'Training institution administrator & Tech lecturer',
        description: '職訓機構管理暨科技講師，專注於 Python、AI、LINE Bot 等技術教學。',
        icon: '🧑‍🏫',
    },
    {
        title: 'ITHome 鐵人賽參賽者',
        description: '三度完賽 ITHome 鐵人賽，系列包含「用 LINE 串起多媒體系統」、「從 AI 落地談 MLOps」以及「小題大作的 30 個 HackMD 技巧」。',
        icon: '🏆',
    },
    {
        title: '開源貢獻者',
        description: '持續在 GitHub 貢獻開源專案，分享程式碼與教學資源。',
        icon: '💻',
    },
];

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/willismax', icon: '📦' },
    { name: 'HackMD', url: 'https://hackmd.io/@wiimax', icon: '📝' },
    { name: 'ITHome', url: 'https://ithelp.ithome.com.tw/users/20121130/', icon: '📰' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/willis-chen/', icon: '💼' },
    { name: 'Email', url: 'mailto:willismax.com@gmail.com', icon: '📧' },
];

export default function About() {
    return (
        <Layout title="關於我" description="Willis - Training institution administrator & Tech lecturer">
            <div className="container" style={{ padding: '3rem 0', maxWidth: '900px' }}>
                {/* Hero Section */}
                <div className="about-hero">
                    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>👨‍💻</div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>
                        Willis Chen
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Training institution administrator & Tech Lecturer
                    </p>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                        🌱 Keep learning by sharing, hoping to learn unlimited possibilities in a limited time.
                    </p>

                    {/* Skill Badges */}
                    <div className="skill-badges" style={{ marginTop: '2rem' }}>
                        {skills.map((skill) => (
                            <span className="skill-badge" key={skill.name}>
                                {skill.icon} {skill.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                        💼 經歷與角色
                    </h2>
                    <div className="row">
                        {experiences.map((exp, idx) => (
                            <div className="col col--4" key={idx}>
                                <div className="card" style={{ height: '100%', marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{exp.icon}</div>
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                        {exp.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ITHome Badges */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                        🏅 鐵人賽徽章
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="https://ithelp.ithome.com.tw/users/20121130/ironman/3131" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://d1dwq032kyr03c.cloudfront.net/images/ironman_sticker/12/self.png?sticker"
                                alt="ITHome 2020 鐵人賽"
                                style={{ height: '150px' }}
                                loading="lazy"
                            />
                        </a>
                        <a href="https://ithelp.ithome.com.tw/users/20121130/ironman/4015" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://d1dwq032kyr03c.cloudfront.net/images/ironman_sticker/13/ai-and-data.png?sticker"
                                alt="ITHome 2021 鐵人賽"
                                style={{ height: '150px' }}
                                loading="lazy"
                            />
                        </a>
                        <a href="https://ithelp.ithome.com.tw/users/20121130/ironman/5793" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://d1dwq032kyr03c.cloudfront.net/images/ironman_sticker/14/ithelp-14th-sticker.png?sticker"
                                alt="ITHome 2022 鐵人賽"
                                style={{ height: '150px' }}
                                loading="lazy"
                            />
                        </a>
                    </div>
                </div>

                {/* GitHub Stats */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                        📊 GitHub 統計
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <img
                            src="https://github-readme-stats-six.vercel.app/api?username=willismax&show_icons=true&theme=radical"
                            alt="GitHub Stats"
                            loading="lazy"
                            style={{ maxWidth: '100%' }}
                        />
                        <img
                            src="https://github-readme-stats-six.vercel.app/api/top-langs/?username=willismax&layout=compact&theme=radical"
                            alt="Top Languages"
                            loading="lazy"
                            style={{ maxWidth: '100%' }}
                        />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                        <img
                            src="https://raw.githubusercontent.com/willismax/willismax/output/github-contribution-grid-snake.svg"
                            alt="GitHub Contribution Snake"
                            loading="lazy"
                            style={{ maxWidth: '100%' }}
                        />
                    </div>
                </div>

                {/* Social Links */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                        🔗 聯絡方式
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="skill-badge"
                                style={{ textDecoration: 'none', color: 'inherit', fontSize: '1rem', padding: '0.6rem 1.2rem' }}
                            >
                                {link.icon} {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
