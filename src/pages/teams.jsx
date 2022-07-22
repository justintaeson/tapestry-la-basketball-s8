import React from "react";
import { players as PlayersData } from "../data/players";

export default class Teams extends React.Component {
  render() {
    const teams = PlayersData.map((player) => {
      if (PlayersData.indexOf(player) % 10 === 0) {
        return (
          <div className="teams-row justify-center">
            <div className="teams-box">
              <div className="row justify-center">{player.team}</div>
            </div>
          </div>
        );
      } else return null;
    });
    return teams;
  }
}
