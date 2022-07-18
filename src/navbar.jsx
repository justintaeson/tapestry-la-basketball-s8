import React from 'react'
import TapestryLALogo from './assets/tapestry-logo.png'

export default class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = ({
      clickedOn: null
    });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === 'home') {
      window.location.hash = '';
    }
    if (event.target.id === 'schedule') {
      window.location.hash = 'schedule';
    }
  }

  render() {
    return (
      <header id="header">
        <div id="header-row" class="row">
          <div class="column-one-half align-center">
            <img id="logo" src={TapestryLALogo} alt='TapestryLA-logo'/>
          </div>
          <div class="column-one-half align-center justify-end">
            <a href="!#" id="home" className="header-links" onClick={this.handleClick}>Home</a>
            <a href="!#" id="schedule" className="header-links" onClick={this.handleClick}>Schedule</a>
            <a href="!#" id="teams" className="header-links" onClick={this.handleClick}>Teams</a>
            <a href="!#" id="stats" className="header-links" onClick={this.handleClick}>Stats</a>
            <a href="https://www.tapestry.la/" id="tapestry-website" class="header-links" target="_blank" rel="noreferrer">Tapestry LA</a>
          </div>
        </div>
      </header>
    )
  }
}
