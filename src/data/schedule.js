import { players } from './players';

export function getPointDifferential(team) {
  const teamObject = {
    pointsFor: 0,
    pointsAgainst: 0
  };
  schedule.map((game) => {
    if (game.homeScore === 0) {
      return null;
    }

    if (team === game.homeTeam) {
      teamObject.pointsFor += game.homeScore;
      teamObject.pointsAgainst += game.awayScore;
    }

    if (team === game.awayTeam) {
      teamObject.pointsFor += game.awayScore;
      teamObject.pointsAgainst += game.homeScore;
    }

    return null;
  });
  return teamObject;
}

export function getOpposingStats(team) {
  const teamObject = {
    opponents: [],
    twoMakes: 0,
    twoAttempts: 0,
    ftMakes: 0,
    ftAttempts: 0,
    threeMakes: 0,
    threeAttempts: 0
  };

  schedule.map((game) => {
    if (game.homeScore === 0) {
      return null;
    }

    if (team === game.homeTeam) {
      teamObject.opponents.push(game.awayTeam);
    }

    if (team === game.awayTeam) {
      teamObject.opponents.push(game.homeTeam);
    }

    return null;
  });

  teamObject.opponents.map((opponent) => {
    players.map((player) => {
      if (player.team === opponent) {
        teamObject.twoMakes += player.twoMakes[teamObject.opponents.indexOf(opponent)];
        teamObject.twoAttempts += player.twoAttempts[teamObject.opponents.indexOf(opponent)];
        teamObject.ftMakes += player.ftMakes[teamObject.opponents.indexOf(opponent)];
        teamObject.ftAttempts += player.ftAttempts[teamObject.opponents.indexOf(opponent)];
        teamObject.threeMakes += player.threeMakes[teamObject.opponents.indexOf(opponent)];
        teamObject.threeAttempts += player.threeAttempts[teamObject.opponents.indexOf(opponent)];
      }
      return null;
    });
    return null;
  });
  return teamObject;
}

export const SHEET_ID = '159KwisTPdkAZALoqXmWvKTmjvUudiNoRuFlwdSJ4iNw';
export const SHEET_TITLE = 'Game Schedule';
export const SHEET_RANGE = 'A1:F34';

export const FULL_URL =
  'https://docs.google.com/spreadsheets/d/' +
  SHEET_ID +
  '/gviz/tq?sheet=' +
  SHEET_TITLE +
  '&range=' +
  SHEET_RANGE;

export const schedule = [];

export const createSchedule = () => {
  fetch(FULL_URL)
    .then((res) => res.text())
    .then((rep) => {
      const data = JSON.parse(rep.substr(47).slice(0, -2));
      console.log(data);

      data.table.rows.map((row) => {
        schedule.push({
          homeTeam: row.c[2].v,
          awayTeam: row.c[5].v,
          homeScore: row.c[3].v,
          awayScore: row.c[4].v,
          time: row.c[1].v,
          week: row.c[0].v
        });
        return true;
      });
    });
};

createSchedule();
