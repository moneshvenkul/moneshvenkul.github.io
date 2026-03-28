import React, { useState } from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";

export default function GithubRepoCard({ repo, theme }) {
  const [hovered, setHovered] = useState(false);

  function openRepo(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  /* Extract first sentence as headline, rest as body */
  const desc = repo.description || "";
  const dotIdx = desc.indexOf(".");
  const headline = dotIdx > 0 ? desc.substring(0, dotIdx + 1) : desc;
  const body = dotIdx > 0 ? desc.substring(dotIdx + 1).trim() : "";

  /* Try to detect a metric (contains % or number followed by x/+/K/M) */
  const metricMatch = desc.match(/(\d+[%xKM+][\w\s]*)/i);
  const metric = metricMatch ? metricMatch[0].trim().replace(/\.$/, "") : null;

  const formattedDate = new Date(repo.createdAt).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  /* Determine badge label */
  const isProduction =
    desc.toLowerCase().includes("production") ||
    desc.toLowerCase().includes("enterprise") ||
    desc.toLowerCase().includes("fidelity");
  const isResearch =
    desc.toLowerCase().includes("research") ||
    desc.toLowerCase().includes("scopus") ||
    desc.toLowerCase().includes("published");
  const badgeLabel = isProduction
    ? "Production"
    : isResearch
    ? "Research"
    : "Personal";
  const badgeClass = isProduction
    ? "badge-prod"
    : isResearch
    ? "badge-research"
    : "badge-personal";

  return (
    <div
      className={`repo-holographic-card ${hovered ? "is-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => openRepo(repo.url)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && openRepo(repo.url)}
      aria-label={`View ${repo.name} on GitHub`}
    >
      {/* Animated conic border */}
      <div className="repo-card-border" />

      {/* Scanline overlay */}
      <div className="repo-scanline" />

      {/* Card content */}
      <div className="repo-card-inner">
        {/* Top row */}
        <div className="repo-card-top">
          <div className="repo-card-title-row">
            <svg
              className="repo-icon"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
            </svg>
            <h3 className="repo-name">{repo.name}</h3>
          </div>
          <div className="repo-card-meta">
            <span className={`repo-badge ${badgeClass}`}>{badgeLabel}</span>
            <span className="repo-date">{formattedDate}</span>
          </div>
        </div>

        {/* Description */}
        <p className="repo-headline">{headline}</p>
        {body && <p className="repo-body">{body}</p>}

        {/* Metric highlight */}
        {metric && (
          <div className="repo-metric">
            <span className="repo-metric__icon" role="img" aria-label="metric">
              ⚡
            </span>
            <span className="repo-metric__text">{metric}</span>
          </div>
        )}

        {/* Footer */}
        <div className="repo-card-footer">
          <ProjectLanguages logos={repo.languages} />
          <div className="repo-link-arrow">
            <span className="repo-link-text">View on GitHub</span>
            <svg
              className="repo-arrow"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="14"
              height="14"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
