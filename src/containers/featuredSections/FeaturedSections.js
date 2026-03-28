import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import "./FeaturedSections.css";

const CARDS = [
  {
    to: "/blog",
    icon: "✍️",
    label: "Engineering Blog",
    tag: "New Posts Weekly",
    tagColor: "#00d4ff",
    title: "Deep-Dives & Lessons Learned",
    desc:
      "Long-form technical posts — real code, real metrics, no fluff. Neo4j latency cuts, production RAG pipelines, FAANG prep strategies.",
    cta: "Read Articles →",
    accent: "#00d4ff",
  },
  {
    to: "/tools",
    icon: "⚙️",
    label: "Free AI Tools",
    tag: "No Sign-up",
    tagColor: "#7b2fff",
    title: "4 Dev Tools, Fully Client-Side",
    desc:
      "Resume bullet enhancer, tech stack recommender, SQL explainer, and system design flashcards — all in the browser, nothing leaves your device.",
    cta: "Try Tools →",
    accent: "#7b2fff",
  },
  {
    to: "/prep",
    icon: "🎯",
    label: "FAANG Interview Prep",
    tag: "Free Forever",
    tagColor: "#00ff88",
    title: "DSA · System Design · Behavioral",
    desc:
      "Patterns, templates, and STAR answers distilled from 7+ years of engineering and 300+ LeetCode problems. Updated for 2026 interviews.",
    cta: "Start Prepping →",
    accent: "#00ff88",
  },
  {
    to: "/dashboard",
    icon: "📊",
    label: "Live Dashboard",
    tag: "Always Current",
    tagColor: "#ffd700",
    title: "What I'm Building Right Now",
    desc:
      "Real-time window into my LeetCode streak, GitHub activity, learning progress, and the projects currently in flight.",
    cta: "See Dashboard →",
    accent: "#ffd700",
  },
];

export default function FeaturedSections({ theme }) {
  return (
    <section className="featured-main" id="featured">
      <Fade bottom duration={800} distance="20px">
        <div className="featured-header">
          <span className="featured-header__eyebrow">What's on this site</span>
          <h2 className="featured-header__title">
            Built for Engineers, Not Recruiters
          </h2>
          <p className="featured-header__desc">
            Beyond the resume — free tools, prep resources, and technical
            writing that give you a reason to come back.
          </p>
        </div>
      </Fade>

      <div className="featured-grid">
        {CARDS.map((card, i) => (
          <Fade
            key={card.to}
            bottom
            duration={700}
            delay={i * 100}
            distance="24px"
          >
            <Link
              to={card.to}
              className="featured-card"
              style={{ "--accent": card.accent }}
            >
              <div className="featured-card__top">
                <span className="featured-card__icon">{card.icon}</span>
                <div className="featured-card__meta">
                  <span className="featured-card__label">{card.label}</span>
                  <span
                    className="featured-card__tag"
                    style={{
                      color: card.tagColor,
                      borderColor: `${card.tagColor}44`,
                      background: `${card.tagColor}12`,
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
              <h3 className="featured-card__title">{card.title}</h3>
              <p className="featured-card__desc">{card.desc}</p>
              <span
                className="featured-card__cta"
                style={{ color: card.accent }}
              >
                {card.cta}
              </span>
              <div className="featured-card__glow" />
            </Link>
          </Fade>
        ))}
      </div>
    </section>
  );
}
