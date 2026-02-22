import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '📚 教學與技術文件',
    icon: '📖',
    description: (
      <>
        Python、AI/ML、LINE Bot 等技術教學文件，
        從基礎到進階系統化整理，適合自學與教學使用。
      </>
    ),
    link: '/docs/intro',
    linkText: '查看教學文件 →',
  },
  {
    title: '✏️ 技術部落格',
    icon: '💡',
    description: (
      <>
        分享最新技術趨勢、開發經驗與解決方案，
        持續踩坑與填坑的真實記錄。
      </>
    ),
    link: '/blog',
    linkText: '閱讀文章 →',
  },
  {
    title: '🏆 作品集',
    icon: '🚀',
    description: (
      <>
        ITHome 鐵人賽、LINE Bot 開發、AI 應用等專案作品，
        展示實際的教學成果與技術實踐。
      </>
    ),
    link: '/portfolio',
    linkText: '查看作品集 →',
  },
  {
    title: '🔗 HackMD 課程',
    icon: '📝',
    description: (
      <>
        在 HackMD 上的課程筆記與教學資源，
        支援即時協作與權限控制的互動教材。
      </>
    ),
    link: 'https://hackmd.io/@wiimax',
    linkText: '前往 HackMD →',
    external: true,
  },
  {
    title: '🎥 影音教學',
    icon: '📺',
    description: (
      <>
        技術教學影片與課程錄影，
        搭配文件提供更豐富的學習體驗。
      </>
    ),
    link: '/portfolio',
    linkText: '觀看影片 →',
  },
  {
    title: '📬 交流合作',
    icon: '🤝',
    description: (
      <>
        歡迎邀課、技術合作與交流討論。<br />
        <strong>willismax.com@gmail.com</strong>
      </>
    ),
    link: '/about',
    linkText: '關於我 →',
  },
];

function Feature({ title, icon, description, link, linkText, external }) {
  const Wrapper = external ? 'a' : Link;
  const wrapperProps = external
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : { to: link };

  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDesc}>{description}</p>
        <Wrapper className={styles.featureLink} {...wrapperProps}>
          {linkText}
        </Wrapper>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>探索更多</h2>
          <p>技術教學、專案分享與學習資源</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
