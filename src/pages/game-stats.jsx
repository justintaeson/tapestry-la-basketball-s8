import React from 'react';
import { players as playersData } from '../data/players';

export class GameStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home',
      homeClass: 'yellow',
      awayClass: '',
      team: this.props.state.homeTeam
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.innerText === 'Home') {
      this.setState({
        page: event.target.innerText,
        homeClass: 'yellow',
        awayClass: '',
        team: this.props.state.homeTeam
      });
    } else if (event.target.innerText === 'Away') {
      this.setState({
        page: event.target.innerText,
        homeClass: '',
        awayClass: 'yellow',
        team: this.props.state.awayTeam
      });
    }
  }

  render() {
    const totalObject = {
      twoMakes: 0,
      twoAttempts: 0,
      threeMakes: 0,
      threeAttempts: 0,
      ftMakes: 0,
      ftAttempts: 0
    };

    function checkStat(stat) {
      if (isNaN(stat)) {
        return '--';
      } else if (stat === null) {
        return 0;
      } else {
        return stat;
      }
    }
    const gameStats = playersData.map((player) => {
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
        if (this.props.state.playoffs === 'C') {
          totalObject.twoMakes += player.twoMakes[this.props.state.week];
          totalObject.twoAttempts += player.twoAttempts[this.props.state.week];
          totalObject.threeMakes += player.threeMakes[this.props.state.week];
          totalObject.threeAttempts += player.threeAttempts[this.props.state.week];
          totalObject.ftMakes += player.ftMakes[this.props.state.week];
          totalObject.ftAttempts += player.ftAttempts[this.props.state.week];
        } else if (player.twoAttempts[this.props.state.week - 1] !== null) {
          totalObject.twoMakes += player.twoMakes[this.props.state.week - 1];
          totalObject.twoAttempts += player.twoAttempts[this.props.state.week - 1];
          totalObject.threeMakes += player.threeMakes[this.props.state.week - 1];
          totalObject.threeAttempts += player.threeAttempts[this.props.state.week - 1];
          totalObject.ftMakes += player.ftMakes[this.props.state.week - 1];
          totalObject.ftAttempts += player.ftAttempts[this.props.state.week - 1];
        }

        if (
          player.twoMakes[this.props.state.week - 1] === undefined ||
          player.twoMakes[this.props.state.week - 1] === null
        ) {
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

        const formatStats = (makes, attempts) => {
          if (attempts === 0) {
            return '0.00%';
          } else if (makes / attempts || makes !== null) {
            return ((makes / attempts) * 100).toFixed(2) + '%';
          }
        };

        if (player.twoAttempts[this.props.state.week - 1] === null) {
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

        return (
          <tr key={player.name}>
            <td>{player.name}</td>
            <td>
              {checkStat(player.threeMakes[this.props.state.week - 1]) +
                '/' +
                checkStat(player.threeAttempts[this.props.state.week - 1])}
            </td>
            <td>
              {formatStats(
                player.threeMakes[this.props.state.week - 1],
                player.threeAttempts[this.props.state.week - 1]
              )}
            </td>
            <td>
              {checkStat(player.ftMakes[this.props.state.week - 1]) +
                '/' +
                checkStat(player.ftAttempts[this.props.state.week - 1])}
            </td>
            <td>
              {formatStats(
                player.ftMakes[this.props.state.week - 1],
                player.ftAttempts[this.props.state.week - 1]
              )}
            </td>
            <td>
              {player.twoMakes[this.props.state.week - 1] +
                player.threeMakes[this.props.state.week - 1] +
                '/' +
                (player.twoAttempts[this.props.state.week - 1] +
                  player.threeAttempts[this.props.state.week - 1])}
            </td>
            <td>
              {formatStats(
                player.twoMakes[this.props.state.week - 1] +
                  player.threeMakes[this.props.state.week - 1],
                player.twoAttempts[this.props.state.week - 1] +
                  player.threeAttempts[this.props.state.week - 1]
              )}
            </td>
            <td>
              {player.twoMakes[this.props.state.week - 1] * 2 +
                player.threeMakes[this.props.state.week - 1] * 3 +
                player.ftMakes[this.props.state.week - 1]}
            </td>
          </tr>
        );
      } else return null;
    });

    const totalStats = () => {
      if (totalObject.twoMakes) {
        return (
          <>
            <td>TEAM</td>
            <td>{totalObject.threeMakes + '/' + totalObject.threeAttempts}</td>
            <td>{((totalObject.threeMakes / totalObject.threeAttempts) * 100).toFixed(2) + '%'}</td>
            <td>{totalObject.ftMakes + '/' + totalObject.ftAttempts}</td>
            <td>{((totalObject.ftMakes / totalObject.ftAttempts) * 100).toFixed(2) + '%'}</td>
            <td>
              {totalObject.twoMakes +
                totalObject.threeMakes +
                '/' +
                (totalObject.twoAttempts + totalObject.threeAttempts)}
            </td>
            <td>
              {(
                ((totalObject.twoMakes + totalObject.threeMakes) /
                  (totalObject.twoAttempts + totalObject.threeAttempts)) *
                100
              ).toFixed(2) + '%'}
            </td>
            <td>{totalObject.twoMakes * 2 + totalObject.threeMakes * 3 + totalObject.ftMakes}</td>
          </>
        );
      } else {
        return (
          <>
            <td>TEAM</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </>
        );
      }
    };

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

        <div className="row justify-center team-name">{this.state.team}</div>

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
            <tr className="totals-row">{totalStats()}</tr>
          </tbody>
        </table>
      </>
    );
  }
}
