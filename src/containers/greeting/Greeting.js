import React, { useState, useEffect } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

const roles = [
  "Senior Software Engineer",
  "AI & ML Engineer",
  "Full Stack Architect",
  "RAG Pipeline Builder",
  "AWS Solutions Architect",
];

export default function Greeting(props) {
  const theme = props.theme;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 65);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    setDisplayedRole(current.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <Fade bottom duration={1500} distance="30px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* ── Text Side ── */}
          <div className="greeting-text-div">
            {/* Open to work badge */}
            <div className="greeting-badge">
              <span className="greeting-badge__dot" />
              <span className="greeting-badge__text">
                Open to Work — FAANG &amp; Top Tech
              </span>
            </div>

            {/* Name */}
            <h1 className="greeting-text">{greeting.title}</h1>

            {/* Typing role */}
            <div className="greeting-role">
              {displayedRole}
              <span className="greeting-role__cursor" />
            </div>

            {/* Subtitle */}
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>

            {/* Stats */}
            <div className="greeting-stats">
              <div className="greeting-stat">
                <span className="greeting-stat__number">7+</span>
                <span className="greeting-stat__label">Years Exp.</span>
              </div>
              <div className="greeting-stat">
                <span className="greeting-stat__number">1M+</span>
                <span className="greeting-stat__label">Users Served</span>
              </div>
              <div className="greeting-stat">
                <span className="greeting-stat__number">58%</span>
                <span className="greeting-stat__label">Latency Cut</span>
              </div>
              <div className="greeting-stat">
                <span className="greeting-stat__number">3</span>
                <span className="greeting-stat__label">Teams Adopted RAG</span>
              </div>
            </div>

            {/* Social links */}
            <SocialMedia theme={theme} />

            {/* CTA Buttons */}
            <div className="button-greeting-div">
              <Button
                text="View Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
                className="portfolio-repo-btn"
              />
              <Button
                text="Contact Me"
                href="/contact"
                theme={theme}
                className="portfolio-repo-btn"
              />
            </div>
          </div>

          {/* ── Image Side ── */}
          <div className="greeting-image-div">
            <span className="greeting-skill-pill">RAG + LangChain</span>
            <span className="greeting-skill-pill">Neo4j Graph DB</span>
            <span className="greeting-skill-pill">Next.js 14 + Bun</span>
            <span className="greeting-skill-pill">AWS Certified</span>
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
