import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

const CATEGORY_ACCENTS = ["#00d4ff", "#7b2fff", "#00ff88", "#ff6b35"];

class SkillSection extends Component {
  render() {
    return (
      <div className="skills-grid">
        {skills.data.map((skill, i) => {
          const accent = CATEGORY_ACCENTS[i % CATEGORY_ACCENTS.length];
          return (
            <Fade key={i} bottom duration={800} distance="30px" delay={i * 120}>
              <div
                className="skill-category-card"
                style={{ "--card-accent": accent }}
              >
                {/* Top accent bar */}
                <div className="skill-card-accent-bar" />

                {/* Header */}
                <div className="skill-card-header">
                  <span className="skill-card-number">0{i + 1}</span>
                  <h3 className="skill-card-title" style={{ color: accent }}>
                    {skill.title}
                  </h3>
                </div>

                {/* Tech icons */}
                <div className="skill-card-icons">
                  <SoftwareSkill logos={skill.softwareSkills} />
                </div>

                {/* Bullets */}
                <div className="skill-card-bullets">
                  {skill.skills.map((sentence, j) => (
                    <div key={j} className="skill-bullet">
                      <span
                        className="skill-bullet__dot"
                        style={{ background: accent }}
                      />
                      <p className="skill-bullet__text">
                        {sentence.replace(/^⚡\s*/, "")}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="skill-card-glow" />
              </div>
            </Fade>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
