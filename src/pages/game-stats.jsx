import React from 'react';
import { players as playersData } from '../data/players';

export class GameStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home',
      homeClass: 'yellow',
      awayClass: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.innerText === 'Home') {
      this.setState({
        page: event.target.innerText,
        homeClass: 'yellow',
        awayClass: ''
      });
    } else if (event.target.innerText === 'Away') {
      this.setState({
        page: event.target.innerText,
        homeClass: '',
        awayClass: 'yellow'
      });
    }
  }

  render() {
    const gameStats = playersData.map(player => {

      const homeTeam = this.props.state.homeTeam;
      const awayTeam = this.props.state.awayTeam;

      const teamDecider = () => {
        if (this.state.page === 'Home') {
          return homeTeam;
        } else if (this.state.page === 'Away') {
          return awayTeam;
        }
      };

      if (teamDecider() === player.team) {
        if (player.twoMakes[this.props.state.week - 1] === null) {
          return (
          <tr key={player.name}>
            <td>{player.name}</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
          );
        }

        const formatStats = (player, makes, attempts) => {
          if (attempts[this.props.state.week - 1] === 0) {
            return '0.00%';
          } else {
            return ((makes[this.props.state.week - 1] / attempts[this.props.state.week - 1] * 100).toFixed(2) + '%');
          }
        };

        return (
        <tr key={player.name}>
          <td>{player.name}</td>
          <td>{player.threeMakes[this.props.state.week - 1] + '/' + player.threeAttempts[this.props.state.week - 1]}</td>
          <td>{formatStats(player, player.threeMakes, player.threeAttempts)}</td>
          <td>{player.ftMakes[this.props.state.week - 1] + '/' + player.ftAttempts[this.props.state.week - 1]}</td>
          <td>{formatStats(player, player.ftMakes, player.ftAttempts)}</td>
          <td>{player.twoMakes[this.props.state.week - 1] + player.threeMakes[this.props.state.week - 1] + '/' + (player.twoAttempts[this.props.state.week - 1] + player.threeAttempts[this.props.state.week - 1])}</td>
          <td>{((player.twoMakes[this.props.state.week - 1] + player.threeMakes[this.props.state.week - 1]) / (player.twoAttempts[this.props.state.week - 1] + player.threeAttempts[this.props.state.week - 1]) * 100).toFixed(2) + '%'}</td>
          <td>{(player.twoMakes[this.props.state.week - 1] * 2) + (player.threeMakes[this.props.state.week - 1] * 3) + (player.ftMakes[this.props.state.week - 1])}</td>
        </tr>);
      } else return null;
    });
    return (
      <>
        <div className="row">
          <div id="home-button-container" className="column-one-half">
            <p id="home-button" className={this.state.homeClass} onClick={this.handleClick}>
              Home
            </p>
          </div>
          <div id="away-button-container" className="column-one-half">
            <p id="away-button" className={this.state.awayClass} onClick={this.handleClick}>
              Away
            </p>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <th className="stat-heading">PLAYER</th>
              <th className="stat-heading">3PT</th>
              <th className="stat-heading">3PT%</th>
              <th className="stat-heading">FT</th>
              <th className="stat-heading">FT%</th>
              <th className="stat-heading">FG</th>
              <th className="stat-heading">FG%</th>
              <th className="stat-heading">PTS</th>
            </tr>
            {gameStats}
          </tbody>
        </table>
      </>
    );
  }
}
