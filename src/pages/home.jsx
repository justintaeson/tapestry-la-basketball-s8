import React from 'react';
import BasketballStockFootage from '../assets/basketball-stock-footage.mp4';

export default class Home extends React.Component {
  render() {
    return (
      <main id="main">
        <div id="video-row" className="row justify-center">
          <video id="about-video" autoPlay loop muted>
            <source src={BasketballStockFootage} type="video/mp4" />
          </video>
          <h1 id="tapestry-la" className="home-text">
            Tapestry LA
          </h1>
          <h1 id="basketball-league" className="home-text">
            Basketball League
          </h1>
          <h1 id="season-8" className="home-text">
            Season 8
          </h1>
          <h3 id="update-text" className='home-text'>**Last Updated: 8/8/22</h3>
        </div>
      </main>
    );
  }
}
