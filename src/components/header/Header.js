import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={800} distance="20px">
        <SeoHeader />
        <div className="header-wrapper">
          <header className="header">
            {/* Logo */}
            <NavLink to={link} tag={Link} className="logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">{greeting.logo_name}</span>
              <span className="logo-bracket">/&gt;</span>
            </NavLink>

            {/* Hamburger */}
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label
              className="menu-icon"
              htmlFor="menu-btn"
              aria-label="Toggle menu"
            >
              <span className="navicon"></span>
            </label>

            {/* Nav Links */}
            <ul className="menu">
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeClassName="active-nav-link"
                  style={{ color: theme.text }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeClassName="active-nav-link"
                  style={{ color: theme.text }}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeClassName="active-nav-link"
                  style={{ color: theme.text }}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeClassName="active-nav-link"
                  style={{ color: theme.text }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/opensource"
                  tag={Link}
                  activeClassName="active-nav-link"
                  style={{ color: theme.text }}
                >
                  Open Source
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeClassName="active-nav-link"
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}

export default Header;
