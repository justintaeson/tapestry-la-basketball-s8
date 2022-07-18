import React from 'react';
import Home from './pages/home';
import NavBar from './navbar';
import Schedule from './pages/schedule'

export default class App extends React.Component {

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({});
    });
  }

  render() {
    if (window.location.hash === '') {
      return (
        <>
          <NavBar />
          <Home />
        </>
      )
    }
    if (window.location.hash === '#schedule'){
      return(
        <>
          <NavBar />
          <Schedule />
        </>
      )
    }
  }
}
