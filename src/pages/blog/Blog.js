import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { blogPosts, digestIssues } from "../../data/blogData";
import "./Blog.css";

// ── Tag color map ─────────────────────────────────────────────
const TAG_COLORS = {
  AI: "#7b2fff",
  "AI/ML": "#7b2fff",
  Backend: "#00d4ff",
  Frontend: "#00ff88",
  Cloud: "#ffd700",
  Career: "#ff7b2f",
  Tools: "#ff4d6d",
};

function tagColor(tag) {
  for (const [key, color] of Object.entries(TAG_COLORS)) {
    if (tag.toLowerCase().includes(key.toLowerCase())) return color;
  }
  return "#7a9cbf";
}

// ── Markdown-lite renderer (code blocks + headings + tables) ──
function renderMarkdown(text) {
  if (!text) return null;
  const lines = text.split("\n");
  const elements = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={key++} className="blog-code-block">
          {lang && <span className="blog-code-lang">{lang}</span>}
          <pre>
            <code>{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // Table (starts with |)
    if (line.startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0]
        .split("|")
        .filter((c) => c.trim())
        .map((c) => c.trim());
      const rows = tableLines.slice(2).map((row) =>
        row
          .split("|")
          .filter((c) => c.trim())
          .map((c) => c.trim())
      );
      elements.push(
        <div key={key++} className="blog-table-wrap">
          <table className="blog-table">
            <thead>
              <tr>
                {headers.map((h, idx) => (
                  <th key={idx}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="blog-post-h2">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="blog-post-h3">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Blank line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Regular paragraph — handle bold **text** and inline code `code`
    const parts = line.split(/(`[^`]+`|\*\*[^*]+\*\*)/).map((part, pi) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={pi} className="blog-inline-code">
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={pi}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    elements.push(
      <p key={key++} className="blog-post-para">
        {parts}
      </p>
    );
    i++;
  }

  return elements;
}

// ── Category tag pill ─────────────────────────────────────────
function CategoryTag({ label }) {
  const color = tagColor(label);
  return (
    <span
      className="category-tag"
      style={{
        color,
        borderColor: `${color}44`,
        background: `${color}12`,
      }}
    >
      {label}
    </span>
  );
}

// ── Full post modal ───────────────────────────────────────────
function PostModal({ post, onClose }) {
  return (
    <div
      className="blog-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="blog-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="blog-modal__meta">
          <CategoryTag label={post.category} />
          <span className="blog-modal__date">{post.date}</span>
          <span className="blog-modal__read">{post.readTime}</span>
        </div>

        <h1 className="blog-modal__title">{post.title}</h1>

        <div className="blog-modal__tags">
          {post.tags.map((t) => (
            <span key={t} className="blog-tag">
              {t}
            </span>
          ))}
        </div>

        <div className="blog-modal__body">{renderMarkdown(post.content)}</div>
      </div>
    </div>
  );
}

// ── Post card ─────────────────────────────────────────────────
function PostCard({ post, onRead }) {
  return (
    <article
      className={`post-card ${post.featured ? "post-card--featured" : ""}`}
    >
      {post.featured && (
        <span className="post-card__featured-badge">Featured</span>
      )}
      <div className="post-card__meta">
        <CategoryTag label={post.category} />
        <span className="post-card__date">{post.date}</span>
        <span className="post-card__read">{post.readTime}</span>
      </div>
      <h2 className="post-card__title">{post.title}</h2>
      <p className="post-card__excerpt">{post.excerpt}</p>
      <div className="post-card__tags">
        {post.tags.slice(0, 4).map((t) => (
          <span key={t} className="blog-tag">
            {t}
          </span>
        ))}
      </div>
      <button className="post-card__read-btn" onClick={() => onRead(post)}>
        Read Article →
      </button>
    </article>
  );
}

// ── Digest section ────────────────────────────────────────────
const DIGEST_TAG_COLORS = {
  AI: "#7b2fff",
  Backend: "#00d4ff",
  Frontend: "#00ff88",
  Cloud: "#ffd700",
  Career: "#ff7b2f",
  Tools: "#ff4d6d",
};

function DigestSection() {
  const [openIssue, setOpenIssue] = useState(null);

  return (
    <div className="digest-section">
      <div className="digest-header">
        <h2 className="digest-title gradient-text">Weekly Tech Digest</h2>
        <p className="digest-subtitle">
          Curated links from across engineering, AI, and system design —
          delivered as a rolling archive.
        </p>
      </div>

      <div className="digest-list">
        {digestIssues.map((issue) => (
          <article
            key={issue.id}
            className={`digest-issue ${
              openIssue === issue.id ? "digest-issue--open" : ""
            }`}
          >
            <button
              className="digest-issue__header"
              onClick={() =>
                setOpenIssue(openIssue === issue.id ? null : issue.id)
              }
              aria-expanded={openIssue === issue.id}
            >
              <div className="digest-issue__left">
                <span className="digest-issue__week">{issue.week}</span>
                <span className="digest-issue__title">{issue.title}</span>
              </div>
              <span
                className={`digest-issue__chevron ${
                  openIssue === issue.id ? "digest-issue__chevron--open" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {openIssue === issue.id && (
              <ul className="digest-links">
                {issue.links.map((link, i) => {
                  const tagColor = DIGEST_TAG_COLORS[link.tag] || "#7a9cbf";
                  return (
                    <li key={i} className="digest-link-item">
                      <span
                        className="digest-link-tag"
                        style={{
                          color: tagColor,
                          borderColor: `${tagColor}44`,
                          background: `${tagColor}10`,
                        }}
                      >
                        {link.tag}
                      </span>
                      <div className="digest-link-body">
                        <span className="digest-link-title">{link.title}</span>
                        <span className="digest-link-source">
                          {link.source}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

// ── Main Blog Component ───────────────────────────────────────
const CATEGORIES = ["All", "AI/ML", "Backend", "Frontend", "Cloud"];

export default function Blog({ theme }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePost, setActivePost] = useState(null);
  const [activeTab, setActiveTab] = useState("articles");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="blog-main">
      <Header theme={theme} />

      {/* ── Hero ── */}
      <section className="blog-hero">
        <span className="blog-hero__tag">
          <span className="blog-hero__tag-dot" />
          Engineering Blog
        </span>
        <h1 className="blog-hero__title gradient-text">
          Deep-Dives &amp; Lessons Learned
        </h1>
        <p className="blog-hero__desc">
          Long-form technical posts from 7+ years of building at scale — real
          code, real metrics, no fluff.
        </p>
        <div className="blog-hero__stats">
          <span>
            <strong>{blogPosts.length}</strong> articles
          </span>
          <span className="blog-hero__sep">·</span>
          <span>
            <strong>{digestIssues.length}</strong> digest issues
          </span>
          <span className="blog-hero__sep">·</span>
          <span>Updated weekly</span>
        </div>
      </section>

      {/* ── Tab switcher ── */}
      <div className="blog-tabs-wrapper">
        <div className="blog-tabs" role="tablist">
          {["articles", "digest"].map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`blog-tab ${
                activeTab === tab ? "blog-tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "articles" ? "Articles" : "Weekly Digest"}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-content">
        {activeTab === "articles" && (
          <>
            {/* Category filter */}
            <div className="blog-filters">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`blog-filter-chip ${
                    activeCategory === cat ? "blog-filter-chip--active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="posts-grid">
              {filtered.map((post) => (
                <PostCard key={post.id} post={post} onRead={setActivePost} />
              ))}
            </div>
          </>
        )}

        {activeTab === "digest" && <DigestSection />}
      </div>

      {activePost && (
        <PostModal post={activePost} onClose={() => setActivePost(null)} />
      )}

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
