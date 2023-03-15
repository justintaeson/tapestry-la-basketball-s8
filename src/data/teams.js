import { schedule } from './schedule';

export function getTotalPoints(team) {
  let points = 0;
  for (let i = 0; i < schedule.length; i++) {
    if (team === schedule[i].homeTeam) {
      if (schedule[i].homeScore === '--') {
        continue;
      }
      points += schedule[i].homeScore;
    } else if (team === schedule[i].awayTeam) {
      if (schedule[i].awayScore === '--') {
        continue;
      }
      points += schedule[i].awayScore;
    }
  }
  return points;
}

export function getWins(team) {
  let winCounter = 0;
  schedule.map((game) => {
    if (team === game.homeTeam && game.homeScore > game.awayScore) {
      winCounter++;
    } else if (team === game.awayTeam && game.awayScore > game.homeScore) {
      winCounter++;
    }
    return null;
  });
  return winCounter;
}

export function getGamesPlayed(team) {
  let gameCounter = 0;
  for (let i = 0; i < schedule.length; i++) {
    if (
      (team === schedule[i].homeTeam || team === schedule[i].awayTeam) &&
      schedule[i].homeScore !== 0
    ) {
      gameCounter += 1;
    }
  }
  return gameCounter;
}

export const SHEET_ID = '159KwisTPdkAZALoqXmWvKTmjvUudiNoRuFlwdSJ4iNw';
export const SHEET_TITLE = 'Teams';
export const SHEET_RANGE = 'A2:A11';

export const FULL_URL =
  'https://docs.google.com/spreadsheets/d/' +
  SHEET_ID +
  '/gviz/tq?sheet=' +
  SHEET_TITLE +
  '&range=' +
  SHEET_RANGE;

export const teams = [];

export const createTeams = () => {
  fetch(FULL_URL)
    .then((res) => res.text())
    .then((rep) => {
      const data = JSON.parse(rep.substr(47).slice(0, -2));

      data.table.rows.map((row) => {
        teams.push({
          team: row.c[0].v,
          points: 0
        });
        return true;
      });
    });
};

createTeams();
