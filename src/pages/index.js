import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import RecentPosts from '../components/RecentPosts';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const heroLoopWebm = useBaseUrl('/video/willismax-hero-loop.webm');
  const heroLoopMp4 = useBaseUrl('/video/willismax-hero-loop.mp4');
  const heroPoster = useBaseUrl('/video/willismax-hero-poster.jpg');

  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{ backgroundImage: `url(${heroPoster})` }}
    >
      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroPoster}
        aria-hidden="true"
        tabIndex="-1"
      >
        <source src={heroLoopWebm} type="video/webm" />
        <source src={heroLoopMp4} type="video/mp4" />
      </video>
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroContent}>
          <p className={styles.heroGreeting}>👋 嗨，我是威力斯</p>
          <h1 className="hero__title">Willismax</h1>
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

function BrandFilm() {
  const brandFilm = useBaseUrl('/video/willismax-brand-film.mp4');
  const poster = useBaseUrl('/video/willismax-hero-poster.jpg');

  return (
    <section className={styles.brandFilmSection} aria-labelledby="brand-film-title">
      <div className="container">
        <div className={styles.brandFilmHeading}>
          <p className={styles.brandFilmEyebrow}>WILLISMAX</p>
          <h2 id="brand-film-title">從看懂到會做，Willismax 的教學方式</h2>
          <p>內容聚焦 AI 應用、程式設計與多媒體系統教學。</p>
        </div>
        <div className={styles.brandFilmFrame}>
          <video
            className={styles.brandFilmVideo}
            controls
            playsInline
            preload="metadata"
            poster={poster}
            aria-label="Willismax 個人品牌形象影片"
          >
            <source src={brandFilm} type="video/mp4" />
            你的瀏覽器目前無法播放這支影片。
          </video>
        </div>
      </div>
    </section>
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
        <BrandFilm />
        <HomepageFeatures />
        <RecentPosts />
      </main>
    </Layout>
  );
}
