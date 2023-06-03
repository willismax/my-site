import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '我的GitHub',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        來 <a href="https://github.com/willismax">Github</a> 看看賞星星，有不少基於 Python 的應用。 
      </>
    ),
  },
  {
    title: '關於我',
    Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        持續學習與分享，分享資料幾乎都在 <a href="https://hackmd.io/@wiimax">HackMD</a> ，邀課與合作 willismax.com@gmail.com
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        這神奇的網站是以 React 為基礎的 Meta 開源專案 "Docusaurus" 架構，文件用 React 或 MarkDown 撰寫皆可
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
