import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';



const FeatureList = [
  {
    title: '教學與技術文件',
    Svg: require('../../static/img/py.svg').default,
    description: (
      <>
        技術文件及教學文件放在 <a rel="noopener noreferrer" href="https://willismax.github.io/my-site/docs/intro">這裡</a>
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
    title: '聯絡資訊',
    Svg: require('../../static/img/DS3.svg').default,
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
