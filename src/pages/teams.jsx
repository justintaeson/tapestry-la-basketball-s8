import React from "react";
import { players as PlayersData } from "../data/players";

export default class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      team: event.target.childNodes[0].data,
    });
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({
        team: window.location.hash,
      });
    });
  }

  render() {
    const teams = PlayersData.map((player) => {
      if (PlayersData.indexOf(player) % 10 === 0) {
        return (
          <div
            key={player.team}
            className="teams-row justify-center"
            onClick={this.handleClick}
          >
            <div className="teams-box">
              <div className="row justify-center">{player.team}</div>
            </div>
          </div>
        );
      } else return null;
    });

    const playersData = PlayersData.map((player) => {
      if (player.team === this.state.team) {
        return (
          <tr key={player.name}>
            <td>{player.name}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{player.threeMakes}</td>
            <td>{player.threeAttempts}</td>
            <td>{player.ftMakes}</td>
            <td>{player.ftAttempts}</td>
            <td>{}</td>
          </tr>
        );
      }
    });

    if (this.state.team === null) {
      return teams;
    } else {
      return (
        <table>
          <tbody>
            <tr>
              <th>Player</th>
              <th>FG-M</th>
              <th>FG-A </th>
              <th>3PT-M</th>
              <th>3PT-A</th>
              <th>FT-M</th>
              <th>FT-A</th>
              <th>PPG</th>
            </tr>
            {playersData}
          </tbody>
        </table>
      );
    }
  }
}
