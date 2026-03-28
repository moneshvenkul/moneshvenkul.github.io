import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import {
  dsaPatterns,
  systemDesignTemplates,
  behavioralQuestions,
} from "../../data/prepData";
import "./Prep.css";

// ── DSA Patterns Tab ───────────────────────────────────────────────────────────

function DifficultyBadge({ difficulty }) {
  const cls =
    difficulty === "Easy"
      ? "diff-badge diff-badge--easy"
      : difficulty === "Medium"
      ? "diff-badge diff-badge--medium"
      : "diff-badge diff-badge--hard";
  return <span className={cls}>{difficulty}</span>;
}

function PatternCard({ pattern }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`pattern-card pattern-card--${pattern.difficulty.toLowerCase()}`}
    >
      <div className="pattern-card__header">
        <DifficultyBadge difficulty={pattern.difficulty} />
        <span className="pattern-card__category">{pattern.category}</span>
      </div>

      <h3 className="pattern-card__name">{pattern.name}</h3>
      <p className="pattern-card__desc">{pattern.description}</p>

      <div className="pattern-card__insight">
        <span className="pattern-card__insight-label">Key Insight</span>
        <p className="pattern-card__insight-text">{pattern.keyInsight}</p>
      </div>

      <div className="complexity-badges">
        <span className="complexity-badge complexity-badge--time">
          Time: {pattern.timeComplexity}
        </span>
        <span className="complexity-badge complexity-badge--space">
          Space: {pattern.spaceComplexity}
        </span>
      </div>

      <ul className="pattern-problems">
        {pattern.examples.map((ex, i) => (
          <li key={i} className="pattern-problem-item">
            <span className="pattern-problem-bullet">▸</span>
            {ex}
          </li>
        ))}
      </ul>

      <button
        className="pattern-code-toggle"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        {open ? "Hide Code" : "Show Code"}
        <span
          className={`toggle-chevron ${open ? "toggle-chevron--open" : ""}`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="pattern-code">
          <pre>
            <code>{pattern.template}</code>
          </pre>
        </div>
      )}
    </article>
  );
}

function DSATab() {
  const [diffFilter, setDiffFilter] = useState("All");
  const [catFilter, setCatFilter] = useState("All");

  const diffOptions = ["All", "Easy", "Medium", "Hard"];
  const catOptions = ["All", "Array", "Tree", "Graph", "DP", "String"];

  const filtered = dsaPatterns.filter((p) => {
    const diffOk = diffFilter === "All" || p.difficulty === diffFilter;
    const catOk = catFilter === "All" || p.category === catFilter;
    return diffOk && catOk;
  });

  return (
    <div className="dsa-tab">
      <div className="prep-filters">
        <span className="prep-filters__label">Difficulty:</span>
        {diffOptions.map((d) => (
          <button
            key={d}
            className={`filter-chip filter-chip--diff ${
              diffFilter === d ? `filter-chip--active-${d.toLowerCase()}` : ""
            }`}
            onClick={() => setDiffFilter(d)}
          >
            {d}
          </button>
        ))}
        <span className="prep-filters__sep" />
        <span className="prep-filters__label">Category:</span>
        {catOptions.map((c) => (
          <button
            key={c}
            className={`filter-chip filter-chip--cat ${
              catFilter === c ? "filter-chip--active-cat" : ""
            }`}
            onClick={() => setCatFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="prep-results-count">
        Showing <span>{filtered.length}</span> pattern
        {filtered.length !== 1 ? "s" : ""}
      </p>

      <div className="patterns-grid">
        {filtered.length > 0 ? (
          filtered.map((p) => <PatternCard key={p.id} pattern={p} />)
        ) : (
          <p className="prep-empty">No patterns match the selected filters.</p>
        )}
      </div>
    </div>
  );
}

// ── System Design Tab ──────────────────────────────────────────────────────────

function SDCard({ template }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`sd-template-card ${open ? "sd-template-card--open" : ""}`}
    >
      <button
        className="sd-template-header"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <div className="sd-template-header__left">
          <h3 className="sd-template-title">{template.title}</h3>
          <DifficultyBadge difficulty={template.difficulty} />
        </div>
        <span
          className={`sd-expand-icon ${open ? "sd-expand-icon--open" : ""}`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="sd-template-body">
          {/* Components */}
          <div className="sd-section">
            <h4 className="sd-section-title">Components</h4>
            <div className="sd-chips">
              {template.components.map((c, i) => (
                <span key={i} className="sd-chip">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Approach */}
          <div className="sd-section">
            <h4 className="sd-section-title">Approach Steps</h4>
            <ol className="sd-steps">
              {template.approach.map((step, i) => (
                <li key={i} className="sd-step">
                  <span className="sd-step-num">{i + 1}</span>
                  <span className="sd-step-text">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Considerations */}
          <div className="sd-section">
            <h4 className="sd-section-title">Considerations</h4>
            <ul className="sd-considerations">
              {template.considerations.map((c, i) => (
                <li key={i} className="sd-consideration-item">
                  <span
                    className="sd-consideration-warn"
                    role="img"
                    aria-label="warning"
                  >
                    ⚠️
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Key Numbers */}
          <div className="sd-section">
            <h4 className="sd-section-title">Key Numbers</h4>
            <div className="sd-key-numbers">
              {template.keyNumbers.map((kn, i) => (
                <div key={i} className="sd-stat-box">
                  <span className="sd-stat-value">{kn.value}</span>
                  <span className="sd-stat-label">{kn.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function SystemDesignTab() {
  return (
    <div className="sd-tab">
      <p className="sd-tab-intro">
        Click any template to expand the full breakdown — components,
        step-by-step approach, trade-off considerations, and key numbers.
      </p>
      <div className="sd-list">
        {systemDesignTemplates.map((t) => (
          <SDCard key={t.id} template={t} />
        ))}
      </div>
    </div>
  );
}

// ── Behavioral Tab ─────────────────────────────────────────────────────────────

const STAR_COLORS = {
  situation: "#00d4ff",
  task: "#7b2fff",
  action: "#00ff88",
  result: "#ffd700",
};

const STAR_LABELS = {
  situation: "S — Situation",
  task: "T — Task",
  action: "A — Action",
  result: "R — Result",
};

function BehavioralCard({ q }) {
  const [open, setOpen] = useState(false);

  const categoryColor =
    q.category === "Leadership"
      ? "#00d4ff"
      : q.category === "Conflict"
      ? "#ff7b2f"
      : q.category === "Failure"
      ? "#ff4d6d"
      : q.category === "Innovation"
      ? "#7b2fff"
      : q.category === "Prioritization"
      ? "#ffd700"
      : q.category === "Collaboration"
      ? "#00ff88"
      : q.category === "Ownership"
      ? "#00bcd4"
      : q.category === "Data-Driven"
      ? "#b47aff"
      : q.category === "Adaptability"
      ? "#ff9800"
      : "#00d4ff";

  return (
    <article
      className={`behavioral-card ${open ? "behavioral-card--open" : ""}`}
    >
      <button
        className="behavioral-card__header"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <div className="behavioral-card__top">
          <span
            className="behavioral-category-badge"
            style={{
              color: categoryColor,
              borderColor: `${categoryColor}44`,
              backgroundColor: `${categoryColor}12`,
            }}
          >
            {q.category}
          </span>
          <span
            className={`behavioral-expand-icon ${
              open ? "behavioral-expand-icon--open" : ""
            }`}
          >
            ▼
          </span>
        </div>
        <p className="behavioral-question">{q.question}</p>
      </button>

      {open && (
        <div className="behavioral-star">
          {["situation", "task", "action", "result"].map((key) => (
            <div
              key={key}
              className="star-section"
              style={{ "--star-color": STAR_COLORS[key] }}
            >
              <span
                className="star-section__label"
                style={{ color: STAR_COLORS[key] }}
              >
                {STAR_LABELS[key]}
              </span>
              <p className="star-section__content">{q.star[key]}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function BehavioralTab() {
  return (
    <div className="behavioral-tab">
      <div className="framework-reminder">
        <span className="framework-reminder__icon" role="img" aria-label="tip">
          💡
        </span>
        <div className="framework-reminder__body">
          <strong className="framework-reminder__title">STAR Framework</strong>
          <p className="framework-reminder__text">
            <span style={{ color: "#00d4ff" }}>Situation</span> — Set the scene.{" "}
            <span style={{ color: "#7b2fff" }}>Task</span> — Your specific
            responsibility. <span style={{ color: "#00ff88" }}>Action</span> —
            Exactly what YOU did (not "we").{" "}
            <span style={{ color: "#ffd700" }}>Result</span> — Quantified
            outcome and lasting impact. Keep each answer to 2–3 minutes spoken.
          </p>
        </div>
      </div>

      <div className="behavioral-list">
        {behavioralQuestions.map((q) => (
          <BehavioralCard key={q.id} q={q} />
        ))}
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

const TABS = ["DSA Patterns", "System Design", "Behavioral"];

export default function Prep({ theme }) {
  const [activeTab, setActiveTab] = useState("DSA Patterns");

  return (
    <div className="prep-main">
      <Header theme={theme} />

      {/* ── Hero ── */}
      <section className="prep-hero">
        <span className="prep-hero__tag">
          <span className="prep-hero__tag-dot" />
          Free Resources
        </span>
        <h1 className="prep-hero__title gradient-text">FAANG Interview Prep</h1>
        <p className="prep-hero__subtitle gradient-text-alt">
          Study materials curated from real interview experience
        </p>
        <p
          className="prep-hero__desc"
          style={{
            color: theme ? theme.secondaryText : "var(--text-secondary)",
          }}
        >
          A living collection of the patterns, templates, and frameworks that
          matter most at senior-level interviews. No fluff — just the essentials
          distilled from 7+ years of engineering and 300+ LeetCode problems.
        </p>

        {/* Quick stats */}
        <div className="prep-quickstats">
          <div className="prep-quickstat">
            <span className="prep-quickstat__num">{dsaPatterns.length}</span>
            <span className="prep-quickstat__label">DSA Patterns</span>
          </div>
          <span className="prep-quickstat-sep">·</span>
          <div className="prep-quickstat">
            <span className="prep-quickstat__num">
              {systemDesignTemplates.length}
            </span>
            <span className="prep-quickstat__label">
              System Design Templates
            </span>
          </div>
          <span className="prep-quickstat-sep">·</span>
          <div className="prep-quickstat">
            <span className="prep-quickstat__num">
              {behavioralQuestions.length}
            </span>
            <span className="prep-quickstat__label">Behavioral Q&amp;As</span>
          </div>
        </div>
      </section>

      {/* ── Tab switcher ── */}
      <div className="prep-tabs-wrapper">
        <div className="prep-tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`prep-tab ${
                activeTab === tab ? "prep-tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab content ── */}
      <section className="prep-content">
        {activeTab === "DSA Patterns" && <DSATab />}
        {activeTab === "System Design" && <SystemDesignTab />}
        {activeTab === "Behavioral" && <BehavioralTab />}
      </section>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
