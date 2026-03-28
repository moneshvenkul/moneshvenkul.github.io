import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Opensource.css";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="opensource-main">
        <Header theme={theme} />

        {/* Hero Section */}
        <div className="opensource-hero">
          <Fade bottom duration={1500} distance="30px">
            <div className="opensource-hero__inner">
              <h1 className="opensource-hero__title gradient-text">
                Open Source
              </h1>
              <p
                className="opensource-hero__subtitle"
                style={{ color: theme.secondaryText }}
              >
                Pull requests, issue contributions, and open-source activity
                across public repositories. Building in the open — one commit at
                a time.
              </p>
            </div>
          </Fade>
        </div>

        <OpensourceCharts theme={theme} />
        <PullRequests theme={theme} />
        <Issues theme={theme} />
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Opensource;
