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
      console.log(window.location.hash)
    }
    if (event.target.id === 'schedule') {
      window.location.hash = 'schedule';
      console.log(window.location.hash)
    }
  }

  render() {
    return (
      <header id="header">
        <div id="header-row" className="row">
          <div className="column-one-half align-center">
            <img id="logo" src={TapestryLALogo} alt='TapestryLA-logo'/>
          </div>
          <div className="column-one-half align-center justify-end">
            <a id="home" className="header-links" onClick={this.handleClick}>Home</a>
            <a id="schedule" className="header-links" onClick={this.handleClick}>Schedule</a>
            <a id="teams" className="header-links" onClick={this.handleClick}>Teams</a>
            <a id="stats" className="header-links" onClick={this.handleClick}>Stats</a>
            <a href="https://www.tapestry.la/" id="tapestry-website" className="header-links" target="_blank" rel="noreferrer">Tapestry LA</a>
          </div>
        </div>
      </header>
    )
  }
}
