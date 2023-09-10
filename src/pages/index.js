import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import logo from '../../static/img/logo.svg'

import Translate, {translate} from '@docusaurus/Translate';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          {siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            最近的發現 ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="威力斯學習筆記 <head />">
        <HomepageHeader />
      <main>
          <HomepageFeatures />
      </main>
    </Layout>
  );
}
// export default function Home() {
// 	const context = useDocusaurusContext();
// 	let { siteConfig } = context;

// 	siteConfig.title = translate({
// 		id: 'global.title',
// 		message: siteConfig.title,
// 		description: 'The website title',
// 	});
// 	siteConfig.tagline = translate({
// 		id: 'global.tagline',
// 		message: siteConfig.tagline,
// 		description: 'The website tagline',
// 	});
// 	siteConfig.customFields.description = translate({
// 		id: 'global.description',
// 		message: siteConfig.customFields.description,
// 		description: 'The website description',
// 	});
// 	const lines = [
// 		translate({
// 			id: 'homepage.description.descriptionLine_1',
// 			message: 'Developer, teacher, dreamer & tech lover.',
// 			description: 'The first line of description',
// 		}),
// 		translate({
// 			id: 'homepage.description.descriptionLine_2',
// 			message: 'I maintain a blog about things I learn or I want to share.',
// 			description: 'The second line of description',
// 		}),
// 		translate({
// 			id: 'homepage.description.descriptionLine_3',
// 			message: 'I love participating at dev events',
// 			description: 'The third line of description',
// 		}),
// 		translate({
// 			id: 'homepage.description.descriptionLine_4',
// 			message: 'and I am also an open-source enthusiast.',
// 			description: 'The fourth line of description',
// 		}),
// 	];

// 	return (
// 		<Layout
// 			title={siteConfig.title}
// 			description={siteConfig.customFields.description}
// 		>
// 			<main className={styles.heroContainer}>
// 				<HomePage {...siteConfig} descriptionLines={lines} />
// 			</main>
// 		</Layout>
// 	);
// }
