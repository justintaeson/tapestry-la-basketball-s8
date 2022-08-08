import React from 'react';
import { schedule, schedule as ScheduleData } from '../data/schedule.js';
import { GameStats } from './game-stats';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: null,
      gameClicked: false,
      awayTeam: null,
      homeTeam: null,
      page: '4'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.innerText[0] === 'W') {
      this.setState({
        week: null,
        gameClicked: false,
        awayTeam: null,
        homeTeam: null,
        page: event.target.innerText[5]
      });
    } else if (event.target.innerText === 'Stats') {
      window.location.hash =
        '#schedule/week' +
        event.target.parentNode.previousElementSibling.previousElementSibling.children[0]
          .innerText[5];
      this.setState({
        week: event.target.parentNode.previousElementSibling.previousElementSibling.children[0]
          .innerText[5],
        gameClicked: true,
        awayTeam: event.target.parentNode.previousElementSibling.children[1].children[0].innerText,
        homeTeam: event.target.parentNode.previousElementSibling.children[0].children[0].innerText,
        page: null
      });
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#schedule') {
        this.setState({
          week: null,
          gameClicked: false,
          awayTeam: null,
          homeTeam: null,
          page: '4'
        });
      }
    });
  }

  render() {
    const statFilter = () => {
      const filterNumbers = schedule.map(game => {
        if ((schedule.indexOf(game) + 1) % 4 === 0) {
          if (((schedule.indexOf(game) + 1) / 4).toString() === this.state.page) {
            return (
              <p className="stat-filter week-filter yellow" onClick={this.handleClick}>
                {'Week ' + this.state.page}
              </p>
            );
          } else {
            return (
              <p className="stat-filter week-filter" onClick={this.handleClick}>
                {'Week ' + (schedule.indexOf(game) + 1) / 4}
              </p>
            );
          }
        }
        return null;
      });
      return filterNumbers;
    };

    if (this.state.gameClicked === true || window.location.hash.slice(0, 10) === '#schedule/') {
      return <GameStats state={this.state} />;
    } else if (window.location.hash === '#schedule') {
      const schedule = ScheduleData.map(games => {
        if (!games.homeScore) {
          games.awayScore = '--';
          games.homeScore = '--';
        }
        const currentIndex = ScheduleData.indexOf(games);
        if (currentIndex >= this.state.page * 4 - 4 && currentIndex < this.state.page * 4) {
          return (
            <>
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
            </>
          );
        }
        return null;
      });
      return (
        <>
          <div className="row justify-center">{statFilter()}</div>
          {schedule}
        </>
      );
    }
  }
}
