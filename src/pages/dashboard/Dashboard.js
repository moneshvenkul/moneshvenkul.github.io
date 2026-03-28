import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import {
  currentlyBuilding,
  currentlyLearning,
  weeklyActivity,
  leetcodeStats,
  openSourceActivity,
} from "../../data/dashboardData";
import "./Dashboard.css";

// ── Animated counter hook ─────────────────────────────────────
function useCountUp(target, duration = 1200, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

// ── Animated stat card ────────────────────────────────────────
function StatCard({ value, label, accent, started }) {
  const num = useCountUp(value, 1000, started);
  return (
    <div className="stat-card" style={{ "--accent": accent }}>
      <span className="stat-card__value">{num.toLocaleString()}</span>
      <span className="stat-card__label">{label}</span>
    </div>
  );
}

// ── Activity bar chart ────────────────────────────────────────
function ActivityChart() {
  const max = Math.max(...weeklyActivity.map((d) => d.commits));
  return (
    <div className="activity-chart">
      {weeklyActivity.map((d) => (
        <div key={d.day} className="activity-bar-col">
          <span className="activity-bar-count">{d.commits}</span>
          <div className="activity-bar-track">
            <div
              className="activity-bar-fill"
              style={{ height: `${(d.commits / max) * 100}%` }}
            />
          </div>
          <span className="activity-bar-day">{d.day}</span>
        </div>
      ))}
    </div>
  );
}

// ── LeetCode ring ─────────────────────────────────────────────
function LeetCodeRing({ stats }) {
  const total = stats.easy + stats.medium + stats.hard;
  const radius = 44;
  const circ = 2 * Math.PI * radius;
  const easyPct = stats.easy / total;
  const medPct = stats.medium / total;
  const hardPct = stats.hard / total;

  // arc offsets
  const medOffset = easyPct * circ;
  const hardOffset = (easyPct + medPct) * circ;

  const arc = (pct) => ({
    strokeDasharray: `${pct * circ} ${circ}`,
  });

  return (
    <div className="lc-ring-wrap">
      <svg
        width="110"
        height="110"
        viewBox="0 0 110 110"
        className="lc-ring-svg"
      >
        {/* bg track */}
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="10"
        />
        {/* easy */}
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="#00ff88"
          strokeWidth="10"
          strokeDasharray={`${easyPct * circ} ${circ}`}
          strokeDashoffset={0}
          strokeLinecap="round"
          transform="rotate(-90 55 55)"
          style={{ transition: "stroke-dasharray 1s ease" }}
        />
        {/* medium */}
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="#ffa500"
          strokeWidth="10"
          {...arc(medPct)}
          strokeDashoffset={-medOffset}
          strokeLinecap="round"
          transform="rotate(-90 55 55)"
          style={{ transition: "stroke-dasharray 1s ease 0.3s" }}
        />
        {/* hard */}
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="#ff4d6d"
          strokeWidth="10"
          {...arc(hardPct)}
          strokeDashoffset={-hardOffset}
          strokeLinecap="round"
          transform="rotate(-90 55 55)"
          style={{ transition: "stroke-dasharray 1s ease 0.6s" }}
        />
        <text
          x="55"
          y="50"
          textAnchor="middle"
          fill="#e8f4fd"
          fontSize="16"
          fontWeight="800"
          fontFamily="Inter,sans-serif"
        >
          {stats.solved}
        </text>
        <text
          x="55"
          y="64"
          textAnchor="middle"
          fill="#7a9cbf"
          fontSize="8.5"
          fontFamily="Inter,sans-serif"
        >
          solved
        </text>
      </svg>
      <div className="lc-legend">
        <span className="lc-legend-item lc-legend-item--easy">
          Easy {stats.easy}
        </span>
        <span className="lc-legend-item lc-legend-item--med">
          Med {stats.medium}
        </span>
        <span className="lc-legend-item lc-legend-item--hard">
          Hard {stats.hard}
        </span>
      </div>
    </div>
  );
}

// ── Progress bar ──────────────────────────────────────────────
function ProgressBar({ pct, color }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWidth(pct);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);
  return (
    <div className="progress-track" ref={ref}>
      <div
        className="progress-fill"
        style={{
          width: `${width}%`,
          background: color || "var(--accent-cyan)",
        }}
      />
    </div>
  );
}

// ── Status chip ───────────────────────────────────────────────
function StatusChip({ status }) {
  const cls =
    status === "In Progress"
      ? "status-chip status-chip--progress"
      : status === "Shipping Soon"
      ? "status-chip status-chip--soon"
      : "status-chip status-chip--planning";
  return <span className={cls}>{status}</span>;
}

// ── Main Dashboard ────────────────────────────────────────────
export default function Dashboard({ theme }) {
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsStarted(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="dash-main">
      <Header theme={theme} />

      {/* ── Hero ── */}
      <section className="dash-hero">
        <span className="dash-hero__tag">
          <span className="dash-hero__tag-dot" />
          Live Dashboard
        </span>
        <h1 className="dash-hero__title gradient-text">What I'm Building</h1>
        <p className="dash-hero__subtitle">
          A real-time window into my learning, shipping, and grinding
        </p>
      </section>

      <div className="dash-grid">
        {/* ── Open Source Stats ── */}
        <section className="dash-card dash-card--full" ref={statsRef}>
          <h2 className="dash-card__title">
            <span
              className="dash-card__title-dot"
              style={{ background: "#00d4ff" }}
            />
            Open Source Activity
          </h2>
          <div className="oss-stats-row">
            <StatCard
              value={openSourceActivity.totalContributions}
              label="Contributions"
              accent="#00d4ff"
              started={statsStarted}
            />
            <StatCard
              value={openSourceActivity.currentStreak}
              label="Day Streak"
              accent="#7b2fff"
              started={statsStarted}
            />
            <StatCard
              value={openSourceActivity.longestStreak}
              label="Longest Streak"
              accent="#00ff88"
              started={statsStarted}
            />
            <StatCard
              value={openSourceActivity.repos}
              label="Repos"
              accent="#ffd700"
              started={statsStarted}
            />
            <StatCard
              value={openSourceActivity.stars}
              label="Stars"
              accent="#ff4d6d"
              started={statsStarted}
            />
            <StatCard
              value={openSourceActivity.forks}
              label="Forks"
              accent="#ffa500"
              started={statsStarted}
            />
          </div>
        </section>

        {/* ── Weekly Commits ── */}
        <section className="dash-card">
          <h2 className="dash-card__title">
            <span
              className="dash-card__title-dot"
              style={{ background: "#7b2fff" }}
            />
            Weekly Commit Activity
          </h2>
          <ActivityChart />
        </section>

        {/* ── LeetCode ── */}
        <section className="dash-card">
          <h2 className="dash-card__title">
            <span
              className="dash-card__title-dot"
              style={{ background: "#ffa500" }}
            />
            LeetCode Progress
          </h2>
          <LeetCodeRing stats={leetcodeStats} />
          <div className="lc-extra-stats">
            <div className="lc-extra-stat">
              <span className="lc-extra-stat__val">{leetcodeStats.streak}</span>
              <span className="lc-extra-stat__lbl">Day Streak</span>
            </div>
            <div className="lc-extra-stat">
              <span className="lc-extra-stat__val">{leetcodeStats.rating}</span>
              <span className="lc-extra-stat__lbl">Contest Rating</span>
            </div>
          </div>
        </section>

        {/* ── Currently Building ── */}
        <section className="dash-card dash-card--wide">
          <h2 className="dash-card__title">
            <span className="dash-card__title-dot building-dot" />
            Currently Building
          </h2>
          <div className="building-list">
            {currentlyBuilding.map((project, i) => (
              <article key={i} className="building-item">
                <div className="building-item__top">
                  <span className="building-item__name">{project.name}</span>
                  <StatusChip status={project.status} />
                </div>
                <p className="building-item__desc">{project.description}</p>
                <div className="building-item__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Currently Learning ── */}
        <section className="dash-card dash-card--wide">
          <h2 className="dash-card__title">
            <span
              className="dash-card__title-dot"
              style={{ background: "#00ff88" }}
            />
            Currently Learning
          </h2>
          <div className="learning-list">
            {currentlyLearning.map((item, i) => (
              <div key={i} className="learning-item">
                <div className="learning-item__header">
                  <span className="learning-item__icon">{item.icon}</span>
                  <div className="learning-item__info">
                    <span className="learning-item__topic">{item.topic}</span>
                    <span className="learning-item__resource">
                      {item.resource}
                    </span>
                  </div>
                  <span className="learning-item__pct">{item.progress}%</span>
                </div>
                <ProgressBar
                  pct={item.progress}
                  color={i % 2 === 0 ? "#00d4ff" : "#7b2fff"}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
