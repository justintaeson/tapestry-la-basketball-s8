import React from 'react';
import Home from './pages/home';
import NavBar from './navbar';
import Schedule from './pages/season-schedule';
import Teams from './pages/teams';
import Stats from './pages/stats';

export default class App extends React.Component {
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({});
    });
  }

  render() {
    if (window.location.hash === '') {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
      return (
        <>
          <NavBar />
          <Home />
        </>
      );
    }
    if (window.location.hash === '#schedule' || window.location.hash.slice(0, 10) === '#schedule/') {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
      return (
        <>
          <NavBar />
          <Schedule />
        </>
      );
    }
    if (window.location.hash === '#teams' || window.location.hash.slice(0, 7) === '#teams/') {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
      return (
        <>
          <NavBar />
          <Teams />
        </>
      );
    }
    if (window.location.hash === '#stats' || window.location.hash.slice(0, 7) === '#stats/') {
      return (
        <>
          <NavBar />
          <Stats />
        </>
      );
    }
  }
}
