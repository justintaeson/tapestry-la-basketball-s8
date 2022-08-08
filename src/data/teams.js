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
  schedule.map(game => {
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
    if ((team === schedule[i].homeTeam || team === schedule[i].awayTeam) && schedule[i].homeScore !== 0) {
      gameCounter += 1;
    }
  }
  return gameCounter;
}

export const teams = [
  {
    team: 'Run JHC',
    points: 0
  },
  {
    team: 'Victorious Secret',
    points: 0
  },
  {
    team: 'ABG (Anointed by God)',
    points: 0
  },
  {
    team: 'Crossovers For Christ',
    points: 0
  },
  {
    team: "Robin's Hood",
    points: 0
  },
  {
    team: 'Better Call Gasol',
    points: 0
  },
  {
    team: 'J-Walkers',
    points: 0
  },
  {
    team: 'Goon Squad',
    points: 0
  },
  {
    team: 'Kick Your Boaz',
    points: 0
  },
  {
    team: 'Team Noona',
    points: 0
  }
];
