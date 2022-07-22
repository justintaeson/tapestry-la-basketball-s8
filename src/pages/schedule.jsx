import React from "react";
import { schedule as ScheduleData } from "../data/schedule.js";

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: null,
    };
  }

  render() {
    const schedule = ScheduleData.map((games) => {
      if (!games.homeScore) {
        games.awayScore = "--";
        games.homeScore = "--";
      }
      return (
        <div key={games.week + games.time} className="schedule-row">
          <div className="box flex-wrap">
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
              <p className="game-info justify-center">Week {games.week}</p>
              <p className="game-info justify-center">{games.time}</p>
            </div>
          </div>
        </div>
      );
    });

    return schedule;
  }
}
