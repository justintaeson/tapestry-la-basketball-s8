import React from 'react';
import { getGamesPlayed, getTotalPoints, getWins, teams } from '../data/teams';
import { getTeamStats } from '../data/players';

export default class TeamStats extends React.Component {
  render() {
    function formatStats(stat) {
      if (isNaN(stat)) {
        return '0.00%';
      } else {
        return stat.toFixed(2) + '%';
      }
    }

    const tableContent = teams.map(team => {
      return (
        <tr key={team.team}>
          <td>{team.team}</td>
          <td>{getGamesPlayed(team.team)}</td>
          <td className='team-wins'>{getWins(team.team) + '-' + (getGamesPlayed(team.team) - getWins(team.team))}</td>
          <td>{getTotalPoints(team.team)}</td>
          <td>{(getTeamStats(team.team).twoMakes + getTeamStats(team.team).threeMakes) + '/' + (getTeamStats(team.team).twoAttempts + getTeamStats(team.team).threeAttempts)}</td>
          <td>{formatStats((getTeamStats(team.team).twoMakes + getTeamStats(team.team).threeMakes) / (getTeamStats(team.team).twoAttempts + getTeamStats(team.team).threeAttempts) * 100)}</td>
          <td>{getTeamStats(team.team).threeMakes + '/' + getTeamStats(team.team).threeAttempts}</td>
          <td>{formatStats(getTeamStats(team.team).threeMakes / getTeamStats(team.team).threeAttempts * 100)}</td>
          <td>{getTeamStats(team.team).ftMakes + '/' + getTeamStats(team.team).ftAttempts}</td>
          <td>{formatStats(getTeamStats(team.team).ftMakes / getTeamStats(team.team).ftAttempts * 100)}</td>
        </tr>
      );
    });

    return (
      <>
        <div className="row">
          <h1 className="stats-header">Team Stats</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <th className="stat-heading">TEAM</th>
              <th className="stat-heading">GP</th>
              <th className="stat-heading">W-L</th>
              <th className="stat-heading">PTS</th>
              <th className="stat-heading">FG</th>
              <th className="stat-heading">FG%</th>
              <th className="stat-heading">3P</th>
              <th className="stat-heading">3P%</th>
              <th className="stat-heading">FT</th>
              <th className="stat-heading">FT%</th>
            </tr>
            {tableContent}
          </tbody>
        </table>
      </>
    );
  }
}
