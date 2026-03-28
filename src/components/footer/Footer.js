import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <div className="footer-container">
          {/* Social links */}
          <div className="footer-social">
            <a
              href="https://github.com/moneshvenkul"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social__link"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/monesh-venkul-vommi-8a80b6174/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social__link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="mailto:mvvenkul@gmail.com"
              className="footer-social__link"
              aria-label="Email"
            >
              <i className="fas fa-envelope" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCRQ77SxTf4WRoJEO6YNPakA"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social__link"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube" />
            </a>
          </div>
          <p className="footer-text">
            Designed &amp; Built by{" "}
            <span className="footer-accent">{greeting.title}</span>
            {" · "}
            <a
              href={greeting.portfolio_repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
            {" · "}
            Dallas-Fort Worth, TX — Open to Remote
          </p>
        </div>
      </Fade>
    </div>
  );
}
