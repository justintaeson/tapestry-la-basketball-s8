import React from 'react';
import { players as PlayersData, getSum, gamesPlayed, formatStats } from '../data/players';
import { teams as TeamsData } from '../data/teams';

export default class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.childNodes[0].data) {
      this.setState({
        team: event.target.childNodes[0].data
      });
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
      });
    });
  }

  render() {
    const teams = TeamsData.map(team => {
      return (
          <div key={team.team} className="teams-row justify-center" onClick={this.handleClick}>
            <div className="teams-box">
              <div className="row justify-center">{team.team}</div>
            </div>
          </div>
      );
    });

    const playersData = PlayersData.map(player => {
      if (player.team === this.state.team) {
        return (
          <tr key={player.name}>
            <td>{player.name}</td>
            <td>{gamesPlayed(player.twoMakes)}</td>
            <td>{getSum(player.twoMakes).toFixed(1) + '/' + getSum(player.twoAttempts).toFixed(1)}</td>
            <td>{formatStats(getSum(player.twoMakes) / getSum(player.twoAttempts) * 100)}</td>
            <td>{getSum(player.threeMakes).toFixed(1) + '/' + getSum(player.threeAttempts).toFixed(1)}</td>
            <td>{formatStats(getSum(player.threeMakes) / getSum(player.threeAttempts) * 100)}</td>
            <td>{getSum(player.ftMakes).toFixed(1) + '/' + getSum(player.ftAttempts).toFixed(1)}</td>
            <td>{formatStats(getSum(player.ftMakes) / getSum(player.ftAttempts) * 100)}</td>
            <td>{(getSum(player.twoMakes) + getSum(player.threeMakes)).toFixed(1) + '/' + (getSum(player.twoAttempts) + getSum(player.threeAttempts)).toFixed(1)}</td>
            <td>{formatStats(((getSum(player.twoMakes) + getSum(player.threeMakes)) / (getSum(player.twoAttempts) + getSum(player.threeAttempts))) * 100)}</td>
            <td>{formatStats(getSum(player.points) / gamesPlayed(player.twoMakes)).slice(0, 4)}</td>
          </tr>
        );
      } else {
        return null;
      }
    });

    if (this.state.team === null) {
      return (
      <div className='team-container'>
        {teams}
      </div>
      );
    } else {
      return (
        <>
          <div className="row">
            <h1 className="stats-header">{this.state.team}</h1>
          </div>
          <table className="teams-table">
            <tbody>
              <tr>
                <th className="stat-heading">Player</th>
                <th className="stat-heading">GP</th>
                <th className="stat-heading">2PT</th>
                <th className="stat-heading">2PT% </th>
                <th className="stat-heading">3PT</th>
                <th className="stat-heading">3PT%</th>
                <th className="stat-heading">FT</th>
                <th className="stat-heading">FT%</th>
                <th className="stat-heading">FG</th>
                <th className="stat-heading">FG%</th>
                <th className="stat-heading">PPG</th>
              </tr>
              {playersData}
            </tbody>
          </table>
        </>
      );
    }
  }
}
