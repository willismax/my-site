import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import RecentPosts from '../components/RecentPosts';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <p className={styles.heroGreeting}>👋 嗨，我是威力斯</p>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className={styles.heroDesc}>
            Training institution administrator & Tech lecturer<br />
            持續學習與分享 Python、AI、LINE Bot 等技術應用
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/blog">
              📝 閱讀文章
            </Link>
            <Link
              className="button button--primary button--lg"
              to="/portfolio"
            >
              🏆 查看作品集
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - 技術教學與分享`}
      description="威力斯學習筆記 - Python, AI, LINE Bot, MLOps 教學與技術分享"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <RecentPosts />
      </main>
    </Layout>
  );
}
