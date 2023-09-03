import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';



const FeatureList = [
  {
    title: '我的技術文件',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        我的教學內容如可以釋出，會放在 <a rel="noopener noreferrer" href="https://willismax.github.io/my-site/docs/intro">文件Doc</a>
      </>
    ),
  },
  {
    title: '關於我 About',
    Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        持續學習與分享，共享資料幾乎都在 <a href="https://hackmd.io/@wiimax">HackMD</a> ，邀課與合作 willismax.com@gmail.com
      </>
    ),
  },
  {
    title: 'Contact Me',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        willismax.com@gmail.com
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
