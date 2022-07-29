import React from 'react';
import { players as PlayersData, getAverage } from '../data/players';

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
    const teams = PlayersData.map(player => {
      if (PlayersData.indexOf(player) % 10 === 0) {
        return (
          <div key={player.team} className="teams-row justify-center" onClick={this.handleClick}>
            <div className="teams-box">
              <div className="row justify-center">{player.team}</div>
            </div>
          </div>
        );
      } else return null;
    });

    const playersData = PlayersData.map(player => {
      if (player.team === this.state.team) {
        return (
          <tr key={player.name}>
            <td>{player.name}</td>
            <td>
              {getAverage(player.twoMakes).toFixed(1) +
                ' / ' +
                getAverage(player.twoAttempts).toFixed(1)}
            </td>
            <td>
              {((getAverage(player.twoMakes) / getAverage(player.twoAttempts)) * 100).toFixed(2) +
                '%'}
            </td>
            <td>
              {getAverage(player.threeMakes).toFixed(1) +
                ' / ' +
                getAverage(player.threeAttempts).toFixed(1)}
            </td>
            <td>
              {((getAverage(player.threeMakes) / getAverage(player.threeAttempts)) * 100).toFixed(
                2
              ) + '%'}
            </td>
            <td>
              {getAverage(player.ftMakes).toFixed(1) +
                ' / ' +
                getAverage(player.ftAttempts).toFixed(1)}
            </td>
            <td>
              {((getAverage(player.ftMakes) / getAverage(player.ftAttempts)) * 100).toFixed(2) +
                '%'}
            </td>
            <td>
              {(getAverage(player.twoMakes) + getAverage(player.threeMakes)).toFixed(1) +
                ' / ' +
                (getAverage(player.twoAttempts) + getAverage(player.threeAttempts)).toFixed(1)}
            </td>
            <td>
              {(
                ((getAverage(player.twoMakes) + getAverage(player.threeMakes)) /
                  (getAverage(player.twoAttempts) + getAverage(player.threeAttempts))) *
                100
              ).toFixed(2) + '%'}
            </td>
            <td>
              {(getAverage(player.twoMakes) * 2 + getAverage(player.threeMakes) * 3).toFixed(1)}
            </td>
          </tr>
        );
      } else {
        return null;
      }
    });

    if (this.state.team === null) {
      return teams;
    } else {
      return (
        <table className='teams-table'>
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
              <th>PPG</th>
            </tr>
            {playersData}
          </tbody>
        </table>
      );
    }
  }
}
