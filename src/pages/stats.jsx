import React from 'react';
import TeamStats from './team-stats';
import PlayerStats from './player-stats';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statType: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.innerText === 'Team') {
      this.setState({
        statType: event.target.innerText
      });
    } else if (event.target.innerText === 'Player') {
      this.setState({
        statType: event.target.innerText
      });
    }

  }

  render() {
    if (this.state.statType === 'Team') {
      return (
        <TeamStats />
      );
    }

    if (this.state.statType === 'Player') {

      return (
        <PlayerStats />
      );
    }

    return (
      <div className="stats-container">
        <div id="stat-type-team" className="row justify-center" onClick={this.handleClick}>
          <div className="stat-type">Team</div>
        </div>
        <div id="stat-type-player" className="row justify-center" onClick={this.handleClick}>
          <div className="stat-type">Player</div>
        </div>
      </div>
    );
  }
}
