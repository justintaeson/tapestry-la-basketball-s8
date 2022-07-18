import React from 'react';
import BasketballStockFootage from '../assets/basketball-stock-footage.mp4';

export default class Home extends React.Component {
  render() {
    return (
      <main id="main">
        <div id="video-row" class="row justify-center">
          <video id="about-video" autoplay loop muted>
            <source src={BasketballStockFootage}type="video/mp4" />
          </video>
          <h1 id="tapestry-la" class="home-text">Tapestry LA</h1>
          <h2 id="basketball-league" class="home-text">Basketball League</h2>
          <h3 id="season-8" class="home-text">Season 8</h3>
        </div>
      </main>
    );
  }
}
