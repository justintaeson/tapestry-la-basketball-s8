import React from 'react';
import { players as playersData } from '../data/players';

export class GameStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      page: event.target.innerText
    });
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
            <td>--</td>
            <td>--</td>
          </tr>
          );
        }

        const formatStats = (player, makes, attempts) => {
          if (attempts[this.props.state.week - 1] === 0) {
            return '--';
          } else {
            return ((makes[this.props.state.week - 1] / attempts[this.props.state.week - 1] * 100).toFixed(2) + '%');
          }
        };

        return (
        <tr key={player.name}>
          <td>{player.name}</td>
          <td>{player.twoMakes[this.props.state.week - 1] + ' / ' + player.twoAttempts[this.props.state.week - 1]}</td>
          <td>{formatStats(player, player.twoMakes, player.twoAttempts)}</td>
          <td>{player.threeMakes[this.props.state.week - 1] + '/' + player.threeAttempts[this.props.state.week - 1]}</td>
          <td>{formatStats(player, player.threeMakes, player.threeAttempts)}</td>
          <td>{player.ftMakes[this.props.state.week - 1] + '/' + player.ftAttempts[this.props.state.week - 1]}</td>
          <td>{formatStats(player, player.ftMakes, player.ftAttempts)}</td>
          <td>{player.twoMakes[this.props.state.week - 1] + player.threeMakes[this.props.state.week - 1] + '/' + (player.twoAttempts[this.props.state.week - 1] + player.threeAttempts[this.props.state.week - 1])}</td>
          <td>{((player.twoMakes[this.props.state.week - 1] + player.threeMakes[this.props.state.week - 1]) / (player.twoAttempts[this.props.state.week - 1] + player.threeAttempts[this.props.state.week - 1]) * 100).toFixed(2) + '%'}</td>
          <td>{(player.twoMakes[this.props.state.week - 1] * 2) + (player.threeMakes[this.props.state.week - 1] * 3)}</td>
        </tr>);
      } else return null;
    });
    return (
        <>
          <div className="row">
            <div className="column-one-half justify-center">
              <p id="home-button" onClick={this.handleClick}>Home</p>
            </div>
            <div className="column-one-half home-away justify-center">
              <p id="away-button" onClick={this.handleClick}>Away</p>
            </div>
          </div>

          <table>
            <tbody>
              <tr>
                <th>Player</th>
                <th>2PT</th>
                <th>2PT FG% </th>
                <th>3PT</th>
                <th>3PT FG%</th>
                <th>FT</th>
                <th>FT%</th>
                <th>FG</th>
                <th>FG%</th>
                <th>Points</th>
              </tr>
              {gameStats}
            </tbody>
          </table>
        </>
    );
  }
}
