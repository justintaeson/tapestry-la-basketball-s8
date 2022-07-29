import React from 'react';
import Home from './pages/home';
import NavBar from './navbar';
import Schedule from './pages/schedule';
import Teams from './pages/teams';

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
    if (window.location.hash === '#schedule') {
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
    if (window.location.hash === '#teams') {
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
  }
}
