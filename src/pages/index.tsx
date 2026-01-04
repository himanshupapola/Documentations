import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const tracks = [
  {
    title: "React Track",
    description: "Components, hooks, routing, and performance notes.",
    to: "/react/01-What-is-Cloud-Computing/Cloud-Computing-Intro",
    variant: "primary",
  },
  {
    title: "AWS SAA-C03",
    description: "Architecture patterns and deep dives for the associate exam.",
    to: "/aws-saa/01-What-is-Cloud-Computing/Cloud-Computing-Intro",
    variant: "secondary",
  },
  {
    title: "AWS CLF-02",
    description: "Cloud Practitioner fundamentals with exam-ready summaries.",
    to: "/aws/01-What-is-Cloud-Computing/Cloud-Computing-Intro",
    variant: "outline",
  },
];

const features = [
  {
    title: "Beginner Friendly",
    description: "Plain-language explanations with step-by-step structure.",
  },
  {
    title: "Fast Navigation",
    description: "Auto-generated sidebars and search get you to answers quickly.",
  },
  {
    title: "Modular Topics",
    description: "Each concept is split into focused, reusable docs.",
  },
  {
    title: "Practical Examples",
    description: "Real-world snippets and config callouts you can copy/paste.",
  },
  {
    title: "Dark Mode Ready",
    description: "Darker theme for late-night study sessions.",
  },
  {
    title: "Production Focus",
    description: "Built for real projects and exam prep, not fluff.",
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="hero hero--primary" style={{ padding: "4rem 0" }}>
        <div className="container text--center">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div style={{ marginTop: "28px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            {tracks.map((track) => (
              <Link
                key={track.title}
                className={`button button--${track.variant} button--lg`}
                to={track.to}
              >
                {track.title}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="container margin-vert--xl">
          <div className="text--center margin-bottom--lg">
            <h2>Pick your path</h2>
            <p style={{ maxWidth: "720px", margin: "0 auto", opacity: 0.8 }}>
              Jump straight into React, AWS SAA-C03, or AWS CLF-02 docs. Everything is organized for quick scanning and dark-mode friendly reading.
            </p>
          </div>

          <div className="row">
            {tracks.map((track) => (
              <div className="col col--4 margin-bottom--lg" key={track.title}>
                <div className="card" style={{ height: "100%", padding: "1.75rem", borderRadius: "12px" }}>
                  <h3>{track.title}</h3>
                  <p style={{ opacity: 0.85 }}>{track.description}</p>
                  <Link className={`button button--${track.variant}`} to={track.to}>
                    Open {track.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="hero hero--secondary" style={{ padding: "3.5rem 0" }}>
          <div className="container text--center">
            <h2>Built for night mode</h2>
            <p style={{ maxWidth: "620px", margin: "0 auto 20px" }}>
              Turn on dark mode for a deeper palette tuned for long sessions. All tracks stay readable and consistent.
            </p>

            <div className="row">
              {features.map((item) => (
                <div className="col col--4 margin-bottom--lg" key={item.title}>
                  <div className="card" style={{ height: "100%", padding: "1.5rem", borderRadius: "12px" }}>
                    <h3>{item.title}</h3>
                    <p style={{ opacity: 0.85 }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
