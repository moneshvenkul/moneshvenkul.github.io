import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />

        {/* ── Hero Section ── */}
        <div className="experience-hero">
          <Fade bottom duration={1200} distance="30px">
            <div className="experience-hero__inner">
              <span className="experience-hero__tag">
                <span className="experience-hero__tag-dot" />
                Career Timeline
              </span>
              <h1 className="experience-hero__title gradient-text">
                {experience.title}
              </h1>
              <p className="experience-hero__subtitle gradient-text-alt">
                {experience.subtitle}
              </p>
              <p
                className="experience-hero__desc"
                style={{ color: theme.secondaryText }}
              >
                {experience.description}
              </p>

              {/* Key metrics strip */}
              <div className="experience-metrics">
                <div className="experience-metric">
                  <span
                    className="experience-metric__icon"
                    role="img"
                    aria-label="bank"
                  >
                    🏦
                  </span>
                  <span className="experience-metric__text">
                    Fintech @ Fidelity &amp; HCL
                  </span>
                </div>
                <span className="experience-metric-sep">·</span>
                <div className="experience-metric">
                  <span
                    className="experience-metric__icon"
                    role="img"
                    aria-label="lightning"
                  >
                    ⚡
                  </span>
                  <span className="experience-metric__text">
                    1M+ Users @ Ascendion
                  </span>
                </div>
                <span className="experience-metric-sep">·</span>
                <div className="experience-metric">
                  <span
                    className="experience-metric__icon"
                    role="img"
                    aria-label="robot"
                  >
                    🤖
                  </span>
                  <span className="experience-metric__text">
                    RAG Pipeline @ Fidelity
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* ── Experience Accordion ── */}
        <ExperienceAccordion sections={experience.sections} theme={theme} />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
