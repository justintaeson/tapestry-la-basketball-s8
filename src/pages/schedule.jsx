import React from 'react';
import { schedule as ScheduleData } from '../data/schedule.js';
import { GameStats } from './game-stats';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: null,
      gameClicked: false,
      awayTeam: null,
      homeTeam: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      week: event.target.parentNode.previousElementSibling.previousElementSibling.children[0]
        .innerText[5],
      gameClicked: true,
      awayTeam: event.target.parentNode.previousElementSibling.children[0].children[0].innerText,
      homeTeam: event.target.parentNode.previousElementSibling.children[1].children[0].innerText
    });
  }

  render() {
    if (this.state.gameClicked === true) {
      return <GameStats state={this.state} />;
    } else {
      const schedule = ScheduleData.map(games => {
        if (!games.homeScore) {
          games.awayScore = '--';
          games.homeScore = '--';
        }
        return (
          <div key={games.week + games.time} className="schedule-row">
            <div className="box flex-wrap" onClick={this.handleClick}>
              <div className="row flex-wrap game-row">
                <p className="game-info justify-center">Week {games.week}</p>
                <p className="game-info justify-center">{games.time}</p>
              </div>
              <div className="row">
                <div className="column-one-half flex-column align-center">
                  <p className="home-content">{games.homeTeam}</p>
                  <p className="home-score">{games.homeScore}</p>
                </div>
                <div className="column-one-half flex-column align-center">
                  <p className="away-content">{games.awayTeam}</p>
                  <p className="away-score">{games.awayScore}</p>
                </div>
              </div>
              <div className="row flex-wrap game-row">
                <p className="game-stats justify-center" onClick={this.handleClick}>
                  Stats
                </p>
              </div>
            </div>
          </div>
        );
      });
      return schedule;
    }
  }
}
