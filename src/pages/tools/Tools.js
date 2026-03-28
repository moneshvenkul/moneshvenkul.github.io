import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import {
  systemDesignCards,
  resumeEnhancementRules,
  techStackOptions,
  techStackRecommendations,
  defaultTechStack,
} from "../../data/toolsData";
import "./Tools.css";

// ── Helper: Enhance a resume bullet ─────────────────────────
function enhanceBullet(text) {
  if (!text.trim()) return null;

  let enhanced = text.trim();
  const tips = [];

  // 1. Replace weak verbs (longest match first to avoid partial replacements)
  const weakVerbMap = resumeEnhancementRules.weakVerbs;
  const sortedKeys = Object.keys(weakVerbMap).sort(
    (a, b) => b.length - a.length
  );
  let verbReplaced = false;

  for (const weak of sortedKeys) {
    const regex = new RegExp(`^(${weak})\\b`, "i");
    if (regex.test(enhanced)) {
      const replacement = weakVerbMap[weak];
      const replacementWord =
        typeof replacement === "string"
          ? replacement
          : Array.isArray(replacement)
          ? replacement[0]
          : replacement;
      enhanced = enhanced.replace(regex, replacementWord);
      verbReplaced = true;
      tips.push("Added strong action verb");
      break;
    }
  }

  // 2. Capitalize first word
  enhanced = enhanced.charAt(0).toUpperCase() + enhanced.slice(1);

  // 3. Add a random metric template if no numbers are present
  const hasNumbers = /\d/.test(enhanced);
  if (!hasNumbers) {
    const templates = resumeEnhancementRules.metricTemplates;
    const pick = templates[Math.floor(Math.random() * templates.length)];
    // Remove trailing period if present before appending metric
    enhanced = enhanced.replace(/\.$/, "") + ", " + pick;
    tips.push("Added metric impact");
  }

  // 4. Ensure ends with a period
  if (!enhanced.endsWith(".")) {
    enhanced = enhanced + ".";
  }

  if (!verbReplaced) {
    tips.push("Capitalized for FAANG-ready format");
  }
  tips.push("FAANG-ready format");

  return { original: text.trim(), enhanced, tips };
}

// ── Helper: Explain a SQL query ──────────────────────────────
function explainSQL(sql) {
  if (!sql.trim()) return null;

  const normalized = sql.replace(/\s+/g, " ").trim();
  const upper = normalized.toUpperCase();
  const breakdown = [];
  let explanation = "";

  // SELECT columns
  const selectMatch = normalized.match(/SELECT\s+(.*?)\s+FROM/i);
  if (selectMatch) {
    const cols = selectMatch[1]
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);
    if (cols.length === 1 && cols[0] === "*") {
      breakdown.push("Selects ALL columns (SELECT *)");
      explanation += "This query retrieves all columns ";
    } else {
      breakdown.push(`Selects ${cols.length} column(s): ${cols.join(", ")}`);
      explanation += `This query retrieves the columns ${cols.join(", ")} `;
    }
  }

  // FROM table
  const fromMatch = normalized.match(/FROM\s+(\w+)/i);
  if (fromMatch) {
    breakdown.push(`From the table: ${fromMatch[1]}`);
    explanation += `from the "${fromMatch[1]}" table `;
  }

  // JOINs
  const joinRegex = /(LEFT\s+JOIN|RIGHT\s+JOIN|INNER\s+JOIN|FULL\s+OUTER\s+JOIN|JOIN)\s+(\w+)\s+ON\s+([^\n]+?)(?=\s+(?:LEFT|RIGHT|INNER|FULL|WHERE|GROUP|HAVING|ORDER|LIMIT)|$)/gi;
  let joinMatch;
  const joins = [];
  while ((joinMatch = joinRegex.exec(normalized)) !== null) {
    const joinType = joinMatch[1].replace(/\s+/g, " ").trim();
    const joinTable = joinMatch[2];
    const joinCond = joinMatch[3].trim();
    joins.push({ type: joinType, table: joinTable, condition: joinCond });
    breakdown.push(`${joinType} with "${joinTable}" on condition: ${joinCond}`);
  }
  if (joins.length > 0) {
    explanation += `joined with ${joins
      .map((j) => `"${j.table}" (${j.type})`)
      .join(", ")} `;
  }

  // WHERE
  const whereMatch = normalized.match(
    /WHERE\s+(.*?)(?=\s+GROUP BY|\s+HAVING|\s+ORDER BY|\s+LIMIT|$)/i
  );
  if (whereMatch) {
    const cond = whereMatch[1].trim();
    breakdown.push(`Filters rows where: ${cond}`);
    explanation += `filtered by the condition: "${cond}" `;
  }

  // GROUP BY
  const groupMatch = normalized.match(
    /GROUP BY\s+(.*?)(?=\s+HAVING|\s+ORDER BY|\s+LIMIT|$)/i
  );
  if (groupMatch) {
    breakdown.push(`Groups results by: ${groupMatch[1].trim()}`);
    explanation += `grouped by ${groupMatch[1].trim()} `;
  }

  // HAVING
  const havingMatch = normalized.match(
    /HAVING\s+(.*?)(?=\s+ORDER BY|\s+LIMIT|$)/i
  );
  if (havingMatch) {
    breakdown.push(`Post-group filter (HAVING): ${havingMatch[1].trim()}`);
    explanation += `with a HAVING filter of "${havingMatch[1].trim()}" `;
  }

  // ORDER BY
  const orderMatch = normalized.match(/ORDER BY\s+(.*?)(?=\s+LIMIT|$)/i);
  if (orderMatch) {
    const orderClause = orderMatch[1].trim();
    const direction =
      upper.includes("ORDER BY") && upper.includes(" DESC")
        ? "descending"
        : "ascending";
    breakdown.push(`Sorts results by: ${orderClause} (${direction})`);
    explanation += `sorted by ${orderClause} in ${direction} order `;
  }

  // LIMIT
  const limitMatch = normalized.match(/LIMIT\s+(\d+)/i);
  if (limitMatch) {
    breakdown.push(`Limits output to ${limitMatch[1]} row(s)`);
    explanation += `returning at most ${limitMatch[1]} row(s)`;
  }

  explanation = explanation.trim();
  if (!explanation.endsWith(".")) explanation += ".";

  return { explanation, breakdown };
}

// ── TOOL 1: Resume Enhancer ──────────────────────────────────
function ResumeEnhancer() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  function handleEnhance() {
    const res = enhanceBullet(input);
    setResult(res);
    setCopied(false);
  }

  function handleCopy() {
    if (result) {
      navigator.clipboard.writeText(result.enhanced).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  return (
    <div className="tool-section">
      <label className="tool-label" htmlFor="resume-input">
        Paste a weak resume bullet
      </label>
      <textarea
        id="resume-input"
        className="tool-textarea"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. Worked on database optimization for the backend team"
      />
      <button
        className="tool-btn"
        onClick={handleEnhance}
        disabled={!input.trim()}
      >
        ✦ Enhance Bullet
      </button>

      {result && (
        <div className="tool-output-wrapper">
          <div className="tool-output-label">Original</div>
          <div className="tool-output tool-output--muted">
            {result.original}
          </div>
          <div className="tool-output-label">Enhanced</div>
          <div className="tool-output tool-output--bright">
            {result.enhanced}
            <button className="tool-copy-btn" onClick={handleCopy}>
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>
          <div className="tool-tips">
            {result.tips.map((tip, i) => (
              <span key={i} className="tool-tip-chip">
                {tip}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── TOOL 2: Tech Stack Recommender ───────────────────────────
function StackRecommender() {
  const [form, setForm] = useState({
    projectType: "",
    scale: "",
    budget: "",
    timeline: "",
    team: "",
  });
  const [recommendation, setRecommendation] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleRecommend() {
    const { projectType, scale } = form;
    const key = `${projectType}-${scale}`;
    const rec = techStackRecommendations[key] || defaultTechStack;
    setRecommendation(rec);
  }

  const allFilled = Object.values(form).every((v) => v !== "");

  // Normalize: the data may have string values (old format) or object values (new format)
  function getTechValue(field) {
    if (!recommendation) return null;
    const val = recommendation[field];
    if (!val) return null;
    if (typeof val === "object" && val.name) return val;
    if (typeof val === "string") return { name: val, icon: "🔧", reason: "" };
    return null;
  }

  const techFields = [
    { key: "frontend", label: "Frontend", emoji: "🖥️" },
    { key: "backend", label: "Backend", emoji: "⚙️" },
    { key: "database", label: "Database", emoji: "🗄️" },
    { key: "cloud", label: "Cloud", emoji: "☁️" },
    { key: "testing", label: "Testing", emoji: "🧪" },
  ];

  return (
    <div className="tool-section">
      <div className="stack-form">
        {[
          {
            name: "projectType",
            label: "Project Type",
            opts: techStackOptions.projectType,
          },
          { name: "scale", label: "Scale", opts: techStackOptions.scale },
          { name: "budget", label: "Budget", opts: techStackOptions.budget },
          {
            name: "timeline",
            label: "Timeline",
            opts: techStackOptions.timeline,
          },
          { name: "team", label: "Team Size", opts: techStackOptions.team },
        ].map(({ name, label, opts }) => (
          <div key={name} className="stack-field">
            <label className="tool-label" htmlFor={`stack-${name}`}>
              {label}
            </label>
            <select
              id={`stack-${name}`}
              name={name}
              className="tool-select"
              value={form[name]}
              onChange={handleChange}
            >
              <option value="">Select {label}</option>
              {opts.map((opt) => {
                const value = typeof opt === "object" ? opt.value : opt;
                const labelText = typeof opt === "object" ? opt.label : opt;
                return (
                  <option key={value} value={value}>
                    {labelText}
                  </option>
                );
              })}
            </select>
          </div>
        ))}
      </div>

      <button
        className="tool-btn"
        onClick={handleRecommend}
        disabled={!allFilled}
      >
        ✦ Get Recommendation
      </button>

      {recommendation && (
        <div className="stack-result">
          <div className="stack-result__grid">
            {techFields.map(({ key, label, emoji }) => {
              const tech = getTechValue(key);
              if (!tech) return null;
              return (
                <div key={key} className="stack-tech-item">
                  <span className="stack-tech-icon">{tech.icon || emoji}</span>
                  <div className="stack-tech-info">
                    <span className="stack-tech-label">{label}</span>
                    <span className="stack-tech-name">{tech.name}</span>
                    {tech.reason && (
                      <span className="stack-tech-reason">{tech.reason}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {recommendation.why && (
            <div className="stack-why">
              <span className="stack-why__label">Why this stack?</span>
              <p>{recommendation.why}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── TOOL 3: SQL Explainer ─────────────────────────────────────
function SQLExplainer() {
  const [sql, setSQL] = useState("");
  const [result, setResult] = useState(null);

  function handleExplain() {
    const res = explainSQL(sql);
    setResult(res);
  }

  const sampleSQL = `SELECT u.name, u.email, o.total, p.title
FROM users u
INNER JOIN orders o ON o.user_id = u.id
LEFT JOIN products p ON p.id = o.product_id
WHERE o.total > 100
GROUP BY u.id
HAVING COUNT(o.id) > 2
ORDER BY o.total DESC
LIMIT 20`;

  return (
    <div className="tool-section">
      <label className="tool-label" htmlFor="sql-input">
        Paste your SQL query
      </label>
      <textarea
        id="sql-input"
        className="tool-textarea tool-textarea--mono"
        rows={8}
        value={sql}
        onChange={(e) => setSQL(e.target.value)}
        placeholder={sampleSQL}
      />
      <div className="tool-btn-row">
        <button
          className="tool-btn"
          onClick={handleExplain}
          disabled={!sql.trim()}
        >
          ✦ Explain Query
        </button>
        <button
          className="tool-btn tool-btn--secondary"
          onClick={() => setSQL(sampleSQL)}
        >
          Load Sample
        </button>
      </div>

      {result && (
        <div className="tool-output-wrapper">
          <div className="tool-output-label">Plain English Explanation</div>
          <div className="tool-output tool-output--bright sql-explanation">
            {result.explanation}
          </div>
          <div className="tool-output-label">Query Breakdown</div>
          <div className="tool-output">
            <ul className="sql-breakdown">
              {result.breakdown.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// ── TOOL 4: System Design Flashcards ─────────────────────────
function SystemDesignCards() {
  const [expandedCard, setExpandedCard] = useState(null);

  function openCard(card) {
    setExpandedCard(card);
    document.body.style.overflow = "hidden";
  }

  function closeCard() {
    setExpandedCard(null);
    document.body.style.overflow = "";
  }

  return (
    <div className="tool-section tool-section--wide">
      <p className="tool-hint">
        Click any card to explore the full breakdown — what it is, when to use
        it, trade-offs, and real-world examples.
      </p>
      <div className="sd-grid">
        {systemDesignCards.map((card) => (
          <button
            key={card.id}
            className="sd-card"
            style={{ "--card-color": card.color }}
            onClick={() => openCard(card)}
            aria-label={`Open ${card.topic} flashcard`}
          >
            <span className="sd-card__icon">{card.icon}</span>
            <span className="sd-card__topic">{card.topic}</span>
            <span className="sd-card__arrow">→</span>
          </button>
        ))}
      </div>

      {expandedCard && (
        <div
          className="sd-modal-overlay"
          onClick={closeCard}
          role="dialog"
          aria-modal="true"
          aria-label={expandedCard.topic}
        >
          <div
            className="sd-modal"
            style={{ "--card-color": expandedCard.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="sd-modal__close"
              onClick={closeCard}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="sd-modal__header">
              <span className="sd-modal__icon">{expandedCard.icon}</span>
              <h2 className="sd-modal__title">{expandedCard.topic}</h2>
            </div>

            <div className="sd-modal__body">
              <div className="sd-section">
                <h3 className="sd-section__heading">What it is</h3>
                <p className="sd-section__text">{expandedCard.what}</p>
              </div>

              <div className="sd-section">
                <h3 className="sd-section__heading">When to use it</h3>
                <p className="sd-section__text">{expandedCard.when}</p>
              </div>

              <div className="sd-section">
                <h3 className="sd-section__heading">Types / Variants</h3>
                {Array.isArray(expandedCard.types) ? (
                  <ul className="sd-list">
                    {expandedCard.types.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="sd-section__text">{expandedCard.types}</p>
                )}
              </div>

              <div className="sd-section">
                <h3 className="sd-section__heading">Trade-offs</h3>
                {Array.isArray(expandedCard.tradeoffs) ? (
                  <ul className="sd-list">
                    {expandedCard.tradeoffs.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="sd-section__text">{expandedCard.tradeoffs}</p>
                )}
              </div>

              <div className="sd-section">
                <h3 className="sd-section__heading">Real Examples</h3>
                {Array.isArray(expandedCard.examples) ? (
                  <div className="sd-examples">
                    {expandedCard.examples.map((ex, i) => (
                      <span key={i} className="sd-example-chip">
                        {ex}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="sd-section__text">{expandedCard.examples}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page Component ───────────────────────────────────────
const TABS = [
  { id: "resume", label: "Resume Enhancer", shortLabel: "Resume" },
  { id: "stack", label: "Stack Recommender", shortLabel: "Stack" },
  { id: "sql", label: "SQL Explainer", shortLabel: "SQL" },
  { id: "sysdesign", label: "System Design Cards", shortLabel: "Sys Design" },
];

export default function Tools({ theme }) {
  const [activeTab, setActiveTab] = useState("resume");

  return (
    <div className="tools-main">
      <Header theme={theme} />

      {/* Hero */}
      <section className="tools-hero">
        <span className="tools-hero__tag">
          <span className="tools-hero__tag-dot" />4 Free Tools
        </span>
        <h1 className="tools-hero__title gradient-text">
          AI-Powered Dev Tools
        </h1>
        <p className="tools-hero__subtitle">
          Built by an engineer, for engineers
        </p>
        <p className="tools-hero__desc">
          Sharpen your resume bullets, find the right tech stack, decode complex
          SQL, and nail system design interviews — all client-side, no data
          leaves your browser.
        </p>
      </section>

      {/* Tab switcher */}
      <div className="tools-tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`tools-tab${
              activeTab === tab.id ? " tools-tab--active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tools-tab__full">{tab.label}</span>
            <span className="tools-tab__short">{tab.shortLabel}</span>
          </button>
        ))}
      </div>

      {/* Tool content */}
      <div className="tools-content">
        {activeTab === "resume" && <ResumeEnhancer />}
        {activeTab === "stack" && <StackRecommender />}
        {activeTab === "sql" && <SQLExplainer />}
        {activeTab === "sysdesign" && <SystemDesignCards />}
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
