import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Accurate Recreation",
    imageUrl: "img/favicon.png",
    description: (
      <>
        All the boards are designed to accuratly recreate the boards you would
        find at stations. Including scrolling information displays and paging
        stop displays
      </>
    ),
  },
  {
    title: "Live Departure Times",
    imageUrl: "img/live.png",
    description: (
      <>
        All the boards constantly update with the latest data including delays
        to services or platform alterations. Sometimes the platform will be
        shown even before it would appear in the actual station
      </>
    ),
  },
  {
    title: "Open Source",
    imageUrl: "img/opensource.png",
    description: (
      <>
        Led Departure Board is an opensource project. This means everyone has
        access to the source code and can contribute towards the webapp. You can
        click the github link in the top right to view the project
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started/introduction")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
