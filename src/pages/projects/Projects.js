import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />

        {/* ── Hero Section ── */}
        <div className="projects-hero">
          <Fade bottom duration={1200} distance="30px">
            <div className="projects-hero__inner">
              <span className="projects-hero__tag">
                <span className="projects-hero__tag-dot" />
                {ProjectsData.data.length} Projects
              </span>
              <h1 className="projects-hero__title gradient-text">
                {projectsHeader.title}
              </h1>
              <p
                className="projects-hero__subtitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader.description}
              </p>

              {/* Stats bar */}
              <div className="projects-stats-bar">
                <div className="projects-stat">
                  <span className="projects-stat__num">6</span>
                  <span className="projects-stat__label">Projects</span>
                </div>
                <div className="projects-stat-divider" />
                <div className="projects-stat">
                  <span className="projects-stat__num">3</span>
                  <span className="projects-stat__label">Production</span>
                </div>
                <div className="projects-stat-divider" />
                <div className="projects-stat">
                  <span className="projects-stat__num">1</span>
                  <span className="projects-stat__label">Research Paper</span>
                </div>
                <div className="projects-stat-divider" />
                <div className="projects-stat">
                  <span className="projects-stat__num">5+</span>
                  <span className="projects-stat__label">Languages</span>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* ── Project Grid ── */}
        <div className="projects-grid-section">
          <div className="repo-cards-div-main">
            {ProjectsData.data.map((repo) => (
              <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
            ))}
          </div>
        </div>

        {/* ── More projects CTA ── */}
        <div className="projects-more-cta">
          <Fade bottom duration={1000} distance="20px">
            <p
              className="projects-more-text"
              style={{ color: theme.secondaryText }}
            >
              See all public repositories and contributions on GitHub
            </p>
            <Button
              text={"View All on GitHub"}
              className="project-button"
              href={greeting.githubProfile}
              newTab={true}
              theme={theme}
            />
          </Fade>
        </div>

        {/* ── Publications ── */}
        {publications.data.length > 0 && (
          <div className="publications-section">
            <Fade bottom duration={1200} distance="30px">
              <div className="publications-hero">
                <span className="projects-hero__tag">
                  <span
                    className="projects-hero__tag-dot"
                    style={{ background: "#b47aff" }}
                  />
                  Research
                </span>
                <h2 className="publications-heading-text gradient-text">
                  {publicationsHeader.title}
                </h2>
                <p
                  className="projects-hero__subtitle"
                  style={{ color: theme.secondaryText }}
                >
                  {publicationsHeader.description}
                </p>
              </div>
            </Fade>
            <div className="repo-cards-div-main publications-cards">
              {publications.data.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} theme={theme} />
              ))}
            </div>
          </div>
        )}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
