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

export const schedule = [
  // Week 1
  {
    homeTeam: 'Better Call Gasol',
    awayTeam: 'Victorious Secret',
    homeScore: 44,
    awayScore: 48,
    time: '3:15PM',
    week: 1
  },
  {
    homeTeam: "Robin's Hood",
    awayTeam: 'Goon Squad',
    homeScore: 34,
    awayScore: 38,
    time: '4:10PM',
    week: 1
  },
  {
    homeTeam: 'Run JHC',
    awayTeam: 'ABG (Anointed by God)',
    homeScore: 41,
    awayScore: 34,
    time: '5:05PM',
    week: 1
  },
  {
    homeTeam: 'Crossovers For Christ',
    awayTeam: 'Team Noona',
    homeScore: 44,
    awayScore: 26,
    time: '6:00PM',
    week: 1
  },

  // Week 2
  {
    homeTeam: "Robin's Hood",
    awayTeam: 'J-Walkers',
    homeScore: 56,
    awayScore: 42,
    time: '3:15PM',
    week: 2
  },
  {
    homeTeam: 'ABG (Anointed by God)',
    awayTeam: 'Crossovers For Christ',
    homeScore: 48,
    awayScore: 28,
    time: '4:10PM',
    week: 2
  },
  {
    homeTeam: 'Victorious Secret',
    awayTeam: 'Run JHC',
    homeScore: 41,
    awayScore: 53,
    time: '5:05PM',
    week: 2
  },
  {
    homeTeam: 'Team Noona',
    awayTeam: 'Kick Your Boaz',
    homeScore: 30,
    awayScore: 36,
    time: '6:00PM',
    week: 2
  },

  // Week 3
  {
    homeTeam: 'ABG (Anointed by God)',
    awayTeam: 'Goon Squad',
    homeScore: 35,
    awayScore: 21,
    time: '3:15PM',
    week: 3
  },
  {
    homeTeam: 'Kick Your Boaz',
    awayTeam: 'J-Walkers',
    homeScore: 23,
    awayScore: 45,
    time: '4:10PM',
    week: 3
  },
  {
    homeTeam: 'Run JHC',
    awayTeam: 'Better Call Gasol',
    homeScore: 50,
    awayScore: 38,
    time: '5:05PM',
    week: 3
  },
  {
    homeTeam: 'Victorious Secret',
    awayTeam: "Robin's Hood",
    homeScore: 60,
    awayScore: 54,
    time: '6:00PM',
    week: 3
  },

  // Week 4
  {
    homeTeam: 'Crossovers For Christ',
    awayTeam: 'Goon Squad',
    homeScore: 37,
    awayScore: 34,
    time: '3:15PM',
    week: 4
  },
  {
    homeTeam: 'Kick Your Boaz',
    awayTeam: 'Victorious Secret',
    homeScore: 32,
    awayScore: 43,
    time: '4:10PM',
    week: 4
  },
  {
    homeTeam: 'J-Walkers',
    awayTeam: 'ABG (Anointed by God)',
    homeScore: 30,
    awayScore: 43,
    time: '5:05PM',
    week: 4
  },
  {
    homeTeam: 'Team Noona',
    awayTeam: 'Better Call Gasol',
    homeScore: 48,
    awayScore: 53,
    time: '6:00PM',
    week: 4
  },

  // Week 5
  {
    homeTeam: 'Better Call Gasol',
    awayTeam: 'Kick Your Boaz',
    homeScore: 59,
    awayScore: 32,
    time: '3:15PM',
    week: 5
  },
  {
    homeTeam: 'Team Noona',
    awayTeam: "Robin's Hood",
    homeScore: 46,
    awayScore: 41,
    time: '4:10PM',
    week: 5
  },
  {
    homeTeam: 'Run JHC',
    awayTeam: 'Crossovers For Christ',
    homeScore: 55,
    awayScore: 46,
    time: '5:05PM',
    week: 5
  },
  {
    homeTeam: 'Goon Squad',
    awayTeam: 'J-Walkers',
    homeScore: 42,
    awayScore: 34,
    time: '6:00PM',
    week: 5
  },

  // Week 6
  {
    homeTeam: 'Kick Your Boaz',
    awayTeam: "Robin's Hood",
    homeScore: 35,
    awayScore: 43,
    time: '3:15PM',
    week: 6
  },
  {
    homeTeam: 'Run JHC',
    awayTeam: 'Team Noona',
    homeScore: 47,
    awayScore: 36,
    time: '4:10PM',
    week: 6
  },
  {
    homeTeam: 'Crossovers For Christ',
    awayTeam: 'J-Walkers',
    homeScore: 44,
    awayScore: 47,
    time: '5:05PM',
    week: 6
  },
  {
    homeTeam: 'Goon Squad',
    awayTeam: 'Better Call Gasol',
    homeScore: 51,
    awayScore: 48,
    time: '6:00PM',
    week: 6
  },

  // Week 7
  {
    homeTeam: 'J-Walkers',
    awayTeam: 'Run JHC',
    homeScore: 47,
    awayScore: 51,
    time: '3:15PM',
    week: 7
  },
  {
    homeTeam: 'Victorious Secret',
    awayTeam: 'Team Noona',
    homeScore: 46,
    awayScore: 53,
    time: '4:10PM',
    week: 7
  },
  {
    homeTeam: 'Kick Your Boaz',
    awayTeam: 'Crossovers For Christ',
    homeScore: 39,
    awayScore: 67,
    time: '5:05PM',
    week: 7
  },
  {
    homeTeam: 'Better Call Gasol',
    awayTeam: 'ABG (Anointed by God)',
    homeScore: 35,
    awayScore: 28,
    time: '6:00PM',
    week: 7
  },
  // Week 8
  {
    homeTeam: 'Goon Squad',
    awayTeam: 'Victorious Secret',
    homeScore: 46,
    awayScore: 33,
    time: '5:00PM',
    week: 8
  },
  {
    homeTeam: "Robin's Hood",
    awayTeam: 'ABG (Anointed by God)',
    homeScore: 48,
    awayScore: 47,
    time: '6:00PM',
    week: 8
  },
  // Week 9 PLAYOFFS
  {
    homeTeam: 'Run JHC',
    awayTeam: 'Better Call Gasol',
    homeScore: 41,
    awayScore: 32,
    time: '4:00PM (Semi-finals)',
    week: 9
  },
  {
    homeTeam: 'Goon Squad',
    awayTeam: 'ABG (Anointed by God)',
    homeScore: 26,
    awayScore: 33,
    time: '5:00PM (Semi-finals)',
    week: 9
  },
  {
    homeTeam: 'Run JHC',
    awayTeam: 'ABG (Anointed by God)',
    homeScore: 41,
    awayScore: 44,
    time: '6:30PM (Championship)',
    week: 9
  }
];
