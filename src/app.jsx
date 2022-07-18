import React from 'react';
import Home from './pages/home';
import NavBar from './navbar';

export default class App extends React.Component {
  render() {
    return(
      <>
        <NavBar />
        <Home />
      </>
    )
  }
}
