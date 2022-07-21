import React from "react";
import TapestryLALogo from "./assets/tapestry-logo.png";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedOn: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === "home") {
      window.location.hash = "";
      console.log(window.location.hash);
    }
    if (event.target.id === "schedule") {
      window.location.hash = "schedule";
      console.log(window.location.hash);
    }
  }

  render() {
    return (
      <header id="header">
        <div id="header-row" className="row">
          <div className="column-one-half align-center">
            <img id="logo" src={TapestryLALogo} alt="TapestryLA-logo" />
          </div>
          <div className="column-one-half align-center justify-end">
            <a
              href="/#"
              id="home"
              className="header-links flex-nowrap"
              onClick={this.handleClick}
            >
              Home
            </a>
            <a
              href="/#schedule"
              id="schedule"
              className="header-links flex-nowrap"
              onClick={this.handleClick}
            >
              Schedule
            </a>
            <a
              href="/#teams"
              id="teams"
              className="header-links flex-nowrap"
              onClick={this.handleClick}
            >
              Teams
            </a>
            <a
              href="/#stats"
              id="stats"
              className="header-links flex-nowrap"
              onClick={this.handleClick}
            >
              Stats
            </a>
            <a
              href="https://www.tapestry.la/"
              id="tapestry-website"
              className="header-links flex-nowrap"
              target="_blank"
              rel="noreferrer"
            >
              Tapestry LA
            </a>
          </div>
        </div>
      </header>
    );
  }
}
