import React, { useState, useEffect, useRef } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import myPic from "../../assests/images/MyPic.jpg";

const roles = [
  "Senior Software Engineer",
  "AI & ML Engineer",
  "Full Stack Architect",
  "RAG Pipeline Builder",
  "AWS Solutions Architect",
];

const statsData = [
  { target: 7, suffix: "+", label: "Years Exp." },
  { target: 1, suffix: "M+", label: "Users Served" },
  { target: 58, suffix: "%", label: "Latency Cut" },
  { target: 3, suffix: "", label: "Teams Adopted RAG" },
];

export default function Greeting(props) {
  const theme = props.theme;

  /* ── Typing animation ── */
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

  /* ── Particle canvas ── */
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const PARTICLE_COUNT = 70;

    class Particle {
      constructor(w, h) {
        this.w = w;
        this.h = h;
        this.reset();
      }
      reset() {
        this.x = Math.random() * this.w;
        this.y = Math.random() * this.h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.r = Math.random() * 1.8 + 0.8;
        this.color = Math.random() > 0.5 ? "#00d4ff" : "#7b2fff";
        this.alpha = Math.random() * 0.5 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > this.w) this.vx *= -1;
        if (this.y < 0 || this.y > this.h) this.vy *= -1;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    let particles = Array.from(
      { length: PARTICLE_COUNT },
      () => new Particle(canvas.width, canvas.height)
    );

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw network connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.3;
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = "#00d4ff";
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  /* ── Counter animations ── */
  const [counters, setCounters] = useState(statsData.map(() => 0));
  const [started, setStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!started) return;
    const duration = 2200;
    const fps = 60;
    const steps = (duration / 1000) * fps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setCounters(statsData.map((s) => Math.round(s.target * ease)));
      if (step >= steps) clearInterval(timer);
    }, 1000 / fps);
    return () => clearInterval(timer);
  }, [started]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="greet-main" id="greeting">
      {/* Particle canvas background */}
      <canvas ref={canvasRef} className="greeting-canvas" />

      <Fade bottom duration={1200} distance="30px">
        <div className="greeting-main">
          {/* ── Text Side ── */}
          <div className="greeting-text-div">
            {/* Status badge */}
            <div className="greeting-badge">
              <span className="greeting-badge__dot" />
              <span className="greeting-badge__text">
                Open to Work — FAANG &amp; Top Tech
              </span>
            </div>

            {/* Name with glitch effect */}
            <h1
              className="greeting-text glitch-title"
              data-text={greeting.title}
            >
              {greeting.title}
            </h1>

            {/* Typing role */}
            <div className="greeting-role">
              <span className="greeting-role__prefix">{"< "}</span>
              {displayedRole}
              <span className="greeting-role__cursor" />
              <span className="greeting-role__suffix">{" />"}</span>
            </div>

            {/* Subtitle */}
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>

            {/* Animated stats */}
            <div className="greeting-stats" ref={statsRef}>
              {statsData.map((stat, i) => (
                <div className="greeting-stat" key={i}>
                  <span className="greeting-stat__number">
                    {counters[i]}
                    {stat.suffix}
                  </span>
                  <span className="greeting-stat__label">{stat.label}</span>
                </div>
              ))}
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

          {/* ── Image / Visual Side ── */}
          <div className="greeting-image-div">
            {/* Orbiting tech pills */}
            <div className="greeting-orbit-ring">
              <div className="greeting-orbit-pill orbit-1">
                <span className="orbit-dot" />
                RAG + LangChain
              </div>
              <div className="greeting-orbit-pill orbit-2">
                <span className="orbit-dot" />
                Neo4j Graph DB
              </div>
              <div className="greeting-orbit-pill orbit-3">
                <span className="orbit-dot" />
                Next.js 14 + Bun
              </div>
              <div className="greeting-orbit-pill orbit-4">
                <span className="orbit-dot" />
                AWS Certified
              </div>
            </div>
            <div className="greeting-avatar-frame">
              <div className="greeting-avatar-glow" />
              <div className="greeting-avatar-ring greeting-avatar-ring--outer" />
              <div className="greeting-avatar-ring greeting-avatar-ring--inner" />
              <img
                src={myPic}
                alt="Monesh Venkul Vommi"
                className="greeting-avatar-photo"
              />
              <div className="greeting-avatar-scan" />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
