export const schedule = [

  // Week 1
  1: {
    game1: {
      homeTeam: 'Better Call Gasol',
      awayTeam: 'Victorious Secret',
      homeScore: findScore(this.homeTeam, players, 1),
      awayScore: findScore(this.awayTeam, players, 1),
      time: '3:15PM',
    },
    game2: {
      homeTeam: 'Robin\'s Hood',
      awayTeam: 'Goon Squad',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '4:10PM',
    },
    game3: {
      homeTeam: 'Run JHC',
      awayTeam: 'ABG (Anointed By God)',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '5:05PM',
    },
    game4: {
      homeTeam: 'Crossovers For Christ',
      awayTeam: 'Team Noona',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '6:00PM',
    }
  },

  // Week 2
  2: {
    game1: {
      homeTeam: 'Robin\'s Hood',
      awayTeam: 'J-Walkers',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '3:15PM',
    },
    game2: {
      homeTeam: 'ABG (Anointed By God)',
      awayTeam: 'Crossovers For Christ',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '4:10PM',
    },
    game3: {
      homeTeam: 'Victorious Secret',
      awayTeam: 'Run JHC',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '5:05PM',
    },
    game4: {
      homeTeam: 'Team Noona',
      awayTeam: 'Kick Your Boaz',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '6:00PM',
    }
  },

  // Week 3
  3: {
    game1: {
      homeTeam: 'ABG (Anointed By God)',
      awayTeam: 'Goon Squad',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '3:15PM',
    },
    game2: {
      homeTeam: 'Kick Your Boaz',
      awayTeam: 'J-Walkers',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '4:10PM',
    },
    game3: {
      homeTeam: 'Run JHC',
      awayTeam: 'Better Call Gasol',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '5:05PM',
    },
    game4: {
      homeTeam: 'Victorious Secret',
      awayTeam: 'Robin\'s Hood',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '6:00PM',
    }
  },

  // Week 4
  4: {
    game1: {
      homeTeam: 'Crossovers For Christ',
      awayTeam: 'Goon Squad',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '3:15PM',
    },
    game2: {
      homeTeam: 'Kick Your Boaz',
      awayTeam: 'Victorious Secret',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '4:10PM',
    },
    game3: {
      homeTeam: 'J-Walkers',
      awayTeam: 'ABG (Anointed By God)',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '5:05PM',
    },
    game4: {
      homeTeam: 'Team Noona',
      awayTeam: 'Better Call Gasol',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '6:00PM',
    }
  },

  // Week 5
  5: {
    game1: {
      homeTeam: 'Better Call Gasol',
      awayTeam: 'Kick Your Boaz',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '3:15PM',
    },
    game2: {
      homeTeam: 'Team Noona',
      awayTeam: 'Robin\'s Hood',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '4:10PM',
    },
    game3: {
      homeTeam: 'Run JHC',
      awayTeam: 'Crossovers For Christ',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '5:05PM',
    },
    game4: {
      homeTeam: 'Goon Squad',
      awayTeam: 'J-Walkers',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '6:00PM',
    }
  },

  // Week 6
  6: {
    game1: {
      homeTeam: 'Kick Your Boaz',
      awayTeam: 'Robin\'s Hood',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '3:15PM',
    },
    game2: {
      homeTeam: 'Run JHC',
      awayTeam: 'Team Noona',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '4:10PM',
    },
    game3: {
      homeTeam: 'Crossovers For Christ',
      awayTeam: 'J-Walkers',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '5:05PM',
    },
    game4: {
      homeTeam: 'Goon Squad',
      awayTeam: 'Better Call Gasol',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '6:00PM',
    }
  },

  // Week 7
  7: {
    game1: {
      homeTeam: 'J-Walkers',
      awayTeam: 'Run JHC',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '3:15PM',
    },
    game2: {
      homeTeam: 'Victorious Secret',
      awayTeam: 'Team Noona',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '4:10PM',
    },
    game3: {
      homeTeam: 'Kick Your Boaz',
      awayTeam: 'Crossovers For Christ',
      homeScore: findScore(),
      awayScore: findScore(),
      time: '5:05PM',
    },
    game4: {
      homeTeam: 'Better Call Gasol',
      awayTeam: 'ABG (Anointed By God)',
      homeScore: findScore(this.homeTeam, players, 7),
      awayScore: findScore(this.awayScore, players, 7),
      time: '6:00PM',
    }
  }
]

function findScore(team, players, week){
  let score = 0;
  for (let i = 0; i < players.length; i++){
    if (players[i].team === team){
      score += players.points[week-1]
    }
  }
  return score;
}
