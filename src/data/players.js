export function getAverage(stat) {
  const initialValue = 0;
  const sum = stat.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const gamesPlayed = () => {
    let gameCounter = 0;
    for (let i = 0; i < stat.length; i++) {
      if (stat[i] !== null) {
        gameCounter += 1;
      }
    }
    return gameCounter;
  };

  const average = sum / gamesPlayed();
  if (isNaN(average)) {
    return 0;
  }
  return average;

}

function compare(a, b) {
  if (getAverage(a.points) > getAverage(b.points)) {
    return -1;
  }
  if (getAverage(a.points) < getAverage(b.points)) {
    return 1;
  }
  return 0;
}

export function createOrderedArray() {
  players.sort(compare);
  return players;
}

export function getSum(stat) {
  const initialValue = 0;
  const sum = stat.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  if (!isNaN(sum)) {
    return sum;
  } else {
    return 0;
  }
}

export function gamesPlayed(array) {
  let gameCounter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== null) {
      gameCounter += 1;
    }
  }
  return gameCounter;
}

export function formatStats(stat) {
  if (isNaN(stat)) {
    stat = 0;
  }
  return stat.toFixed(2) + '%';
}

export function getTeamStats(team) {
  const teamObject = {
    team: team,
    twoMakes: 0,
    twoAttempts: 0,
    ftMakes: 0,
    ftAttempts: 0,
    threeMakes: 0,
    threeAttempts: 0
  };
  players.map(playerObject => {
    if (team === playerObject.team) {
      playerObject.twoMakes.map(gameStat => {
        teamObject.twoMakes += gameStat;
        return null;
      });
      playerObject.twoAttempts.map(gameStat => {
        teamObject.twoAttempts += gameStat;
        return null;
      });
      playerObject.threeMakes.map(gameStat => {
        teamObject.threeMakes += gameStat;
        return null;
      });
      playerObject.threeAttempts.map(gameStat => {
        teamObject.threeAttempts += gameStat;
        return null;
      });
      playerObject.ftMakes.map(gameStat => {
        teamObject.ftMakes += gameStat;
        return null;
      });
      playerObject.ftAttempts.map(gameStat => {
        teamObject.ftAttempts += gameStat;
        return null;
      });
    }
    return null;
  });
  return teamObject;
}

export const players = [
  {
    name: 'Sharon Lee',
    team: 'Victorious Secret',
    points: [2, 2, null, 2, null, null, 0, 4],
    twoMakes: [1, 1, null, 1, null, null, 0, 1],
    twoAttempts: [3, 1, null, 4, null, null, 2, 4],
    ftMakes: [0, 0, null, 0, null, null, 0, 2],
    ftAttempts: [0, 0, null, 0, null, null, 0, 2],
    threeMakes: [0, 0, null, 0, null, null, 0, 0],
    threeAttempts: [1, 0, null, 1, null, null, 0, 0],
    image: null
  },
  {
    name: 'Brian Shin',
    team: 'Victorious Secret',
    points: [4, 1, 8, null, null, null, 4, 9],
    twoMakes: [0, 0, 2, null, null, null, 2, 3],
    twoAttempts: [1, 0, 4, null, null, null, 4, 3],
    ftMakes: [4, 1, 1, null, null, null, 0, 0],
    ftAttempts: [4, 2, 2, null, null, null, 0, 0],
    threeMakes: [0, 0, 1, null, null, null, 0, 1],
    threeAttempts: [1, 1, 2, null, null, null, 0, 3],
    image: null
  },
  {
    name: 'Charles Choe',
    team: 'Victorious Secret',
    points: [4, null, 9, 0, null, null, null, 1],
    twoMakes: [2, null, 3, 0, null, null, null, 0],
    twoAttempts: [8, null, 5, 6, null, null, null, 5],
    ftMakes: [0, null, 0, 0, null, null, null, 1],
    ftAttempts: [0, null, 0, 0, null, null, null, 2],
    threeMakes: [0, null, 1, 0, null, null, null, 0],
    threeAttempts: [0, null, 1, 0, null, null, null, 1],
    image: null
  },
  {
    name: 'Daniel Kim',
    team: 'Victorious Secret',
    points: [null, null, 14, 3, null, null, 6, 0],
    twoMakes: [null, null, 0, 0, null, null, 0, 0],
    twoAttempts: [null, null, 0, 0, null, null, 2, 1],
    ftMakes: [null, null, 2, 0, null, null, 0, 0],
    ftAttempts: [null, null, 3, 0, null, null, 0, 0],
    threeMakes: [null, null, 4, 1, null, null, 2, 0],
    threeAttempts: [null, null, 4, 2, null, null, 4, 4],
    image: null
  },
  {
    name: 'Dylan Wong',
    team: 'Victorious Secret',
    points: [8, 9, null, 9, null, null, 6, 2],
    twoMakes: [1, 3, null, 0, null, null, 1, 1],
    twoAttempts: [5, 5, null, 0, null, null, 3, 4],
    ftMakes: [3, 3, null, 3, null, null, 1, 0],
    ftAttempts: [4, 6, null, 5, null, null, 2, 1],
    threeMakes: [1, 0, null, 2, null, null, 1, 0],
    threeAttempts: [6, 1, null, 5, null, null, 4, 2],
    image: null
  },
  {
    name: 'Jin Park',
    team: 'Victorious Secret',
    points: [9, 8, 3, 12, null, null, 5, 10],
    twoMakes: [3, 2, 1, 2, null, null, 1, 0],
    twoAttempts: [3, 2, 1, 3, null, null, 4, 1],
    ftMakes: [0, 4, 1, 2, null, null, 0, 1],
    ftAttempts: [1, 4, 2, 4, null, null, 0, 2],
    threeMakes: [1, 0, 0, 2, null, null, 1, 3],
    threeAttempts: [6, 2, 4, 3, null, null, 4, 5],
    image: null
  },
  {
    name: 'Joseph Lee',
    team: 'Victorious Secret',
    points: [12, 2, 2, 4, null, null, 5, 7],
    twoMakes: [3, 1, 1, 1, null, null, 1, 1],
    twoAttempts: [9, 3, 3, 6, null, null, 6, 4],
    ftMakes: [0, 0, 0, 2, null, null, 3, 2],
    ftAttempts: [1, 0, 0, 3, null, null, 4, 7],
    threeMakes: [2, 0, 0, 0, null, null, 0, 1],
    threeAttempts: [7, 2, 0, 0, null, null, 1, 4],
    image: null
  },
  {
    name: 'Justin Son',
    team: 'Victorious Secret',
    points: [9, 19, 21, 10, null, null, 15, 0],
    twoMakes: [3, 6, 3, 1, null, null, 3, 0],
    twoAttempts: [4, 12, 7, 5, null, null, 8, 1],
    ftMakes: [0, 1, 3, 2, null, null, 3, 0],
    ftAttempts: [0, 2, 4, 3, null, null, 3, 0],
    threeMakes: [1, 2, 4, 2, null, null, 2, 0],
    threeAttempts: [5, 8, 7, 3, null, null, 6, 0],
    image: null
  },

  {
    name: 'Ju Pyung Chung',
    team: 'Victorious Secret',
    points: [null, 0, 3, 3, null, null, 5, null],
    twoMakes: [null, 0, 0, 0, null, null, 1, null],
    twoAttempts: [null, 1, 0, 0, null, null, 1, null],
    ftMakes: [null, 0, 0, 0, null, null, 0, null],
    ftAttempts: [null, 0, 0, 0, null, null, 0, null],
    threeMakes: [null, 0, 1, 1, null, null, 1, null],
    threeAttempts: [null, 3, 4, 2, null, null, 5, null],
    image: null
  },
  {
    name: 'Kevin Lee',
    team: 'Victorious Secret',
    points: [0, null, 0, null, null, null, 0, null],
    twoMakes: [0, null, 0, null, null, null, 0, null],
    twoAttempts: [1, null, 0, null, null, null, 2, null],
    ftMakes: [0, null, 0, null, null, null, 0, null],
    ftAttempts: [0, null, 0, null, null, null, 0, null],
    threeMakes: [0, null, 0, null, null, null, 0, null],
    threeAttempts: [1, null, 0, null, null, null, 0, null],
    image: null
  },
  {
    name: 'Daniel Kurniawan',
    team: 'ABG (Anointed by God)',
    points: [16, 10, 3, 20, null, null, 5, 14],
    twoMakes: [2, 0, 0, 1, null, null, 2, 0],
    twoAttempts: [3, 0, 0, 1, null, null, 4, 3],
    ftMakes: [3, 4, 0, 0, null, null, 1, 5],
    ftAttempts: [4, 5, 0, 0, null, null, 2, 6],
    threeMakes: [3, 2, 1, 6, null, null, 0, 3],
    threeAttempts: [11, 5, 5, 17, null, null, 5, 9],
    image: null
  },
  {
    name: 'Andrew Pak',
    team: 'ABG (Anointed by God)',
    points: [3, null, null, 2, null, null, 0, null],
    twoMakes: [1, null, null, 1, null, null, 0, null],
    twoAttempts: [2, null, null, 4, null, null, 0, null],
    ftMakes: [1, null, null, 0, null, null, 0, null],
    ftAttempts: [1, null, null, 1, null, null, 0, null],
    threeMakes: [0, null, null, 0, null, null, 0, null],
    threeAttempts: [0, null, null, 0, null, null, 1, null],
    image: null
  },
  {
    name: 'Anthony Kim',
    team: 'ABG (Anointed by God)',
    points: [0, 2, 0, 3, null, null, 0, 4],
    twoMakes: [0, 1, 0, 0, null, null, 0, 2],
    twoAttempts: [0, 5, 1, 1, null, null, 0, 3],
    ftMakes: [0, 0, 0, 0, null, null, 0, 0],
    ftAttempts: [0, 0, 0, 0, null, null, 0, 0],
    threeMakes: [0, 0, 0, 1, null, null, 0, 0],
    threeAttempts: [1, 2, 3, 4, null, null, 4, 1],
    image: null
  },
  {
    name: 'Chase Boswell',
    team: 'ABG (Anointed by God)',
    points: [0, 1, null, 5, null, null, 3, 2],
    twoMakes: [0, 0, null, 1, null, null, 0, 1],
    twoAttempts: [0, 2, null, 2, null, null, 0, 4],
    ftMakes: [0, 1, null, 0, null, null, 0, 0],
    ftAttempts: [0, 2, null, 0, null, null, 0, 0],
    threeMakes: [0, 0, null, 1, null, null, 1, 0],
    threeAttempts: [1, 2, null, 2, null, null, 1, 1],
    image: null
  },
  {
    name: 'Jacob Lee',
    team: 'ABG (Anointed by God)',
    points: [0, 0, 2, 3, null, null, 0, 2],
    twoMakes: [0, 0, 1, 0, null, null, 0, 1],
    twoAttempts: [2, 1, 4, 1, null, null, 0, 3],
    ftMakes: [0, 0, 0, 0, null, null, 0, 0],
    ftAttempts: [0, 0, 0, 0, null, null, 0, 1],
    threeMakes: [0, 0, 0, 1, null, null, 0, 0],
    threeAttempts: [1, 3, 1, 2, null, null, 1, 1],
    image: null
  },
  {
    name: 'Jonathan Lee',
    team: 'ABG (Anointed by God)',
    points: [4, 6, 5, null, null, null, 0, 2],
    twoMakes: [2, 3, 1, null, null, null, 0, 1],
    twoAttempts: [6, 8, 6, null, null, null, 3, 4],
    ftMakes: [0, 0, 0, null, null, null, 0, 0],
    ftAttempts: [0, 0, 0, null, null, null, 2, 0],
    threeMakes: [0, 0, 1, null, null, null, 0, 0],
    threeAttempts: [0, 5, 5, null, null, null, 3, 3],
    image: null
  },
  {
    name: 'Joon Jang',
    team: 'ABG (Anointed by God)',
    points: [2, 3, 10, 2, null, null, 10, 16],
    twoMakes: [0, 0, 2, 1, null, null, 1, 1],
    twoAttempts: [2, 2, 3, 1, null, null, 1, 3],
    ftMakes: [2, 0, 0, 0, null, null, 2, 2],
    ftAttempts: [6, 0, 0, 0, null, null, 3, 4],
    threeMakes: [0, 1, 2, 0, null, null, 2, 4],
    threeAttempts: [0, 2, 5, 3, null, null, 5, 6],
    image: null
  },
  {
    name: 'Sang Park',
    team: 'ABG (Anointed by God)',
    points: [4, 16, 7, null, null, null, 4, null],
    twoMakes: [1, 6, 3, null, null, null, 1, null],
    twoAttempts: [3, 10, 3, null, null, null, 5, null],
    ftMakes: [2, 1, 1, null, null, null, 2, null],
    ftAttempts: [2, 2, 2, null, null, null, 2, null],
    threeMakes: [0, 1, 0, null, null, null, 0, null],
    threeAttempts: [1, 1, 0, null, null, null, 0, null],
    image: null
  },
  {
    name: 'Stephanie Kim',
    team: 'ABG (Anointed by God)',
    points: [null, 2, 2, 0, null, null, 0, 0],
    twoMakes: [null, 1, 1, 0, null, null, 0, 0],
    twoAttempts: [null, 1, 2, 0, null, null, 2, 1],
    ftMakes: [null, 0, 0, 0, null, null, 0, 0],
    ftAttempts: [null, 0, 0, 0, null, null, 0, 0],
    threeMakes: [null, 0, 0, 0, null, null, 0, 0],
    threeAttempts: [null, 0, 0, 0, null, null, 0, 0],
    image: null
  },
  {
    name: 'TJ Kim',
    team: 'ABG (Anointed by God)',
    points: [5, 8, 6, 8, null, null, 6, 7],
    twoMakes: [1, 4, 2, 4, null, null, 3, 2],
    twoAttempts: [4, 8, 5, 7, null, null, 6, 5],
    ftMakes: [0, 0, 2, 0, null, null, 0, 0],
    ftAttempts: [0, 1, 6, 0, null, null, 1, 0],
    threeMakes: [1, 0, 0, 0, null, null, 0, 1],
    threeAttempts: [2, 1, 0, 1, null, null, 1, 2],
    image: null
  },
  {
    name: 'Duggy Jeong',
    team: 'Better Call Gasol',
    points: [7, null, 0, 16, 0, 7, 2, null],
    twoMakes: [2, null, 0, 4, 0, 2, 1, null],
    twoAttempts: [3, null, 0, 7, 0, 4, 4, null],
    ftMakes: [0, null, 0, 2, 0, 0, 0, null],
    ftAttempts: [0, null, 0, 2, 0, 0, 0, null],
    threeMakes: [1, null, 0, 1, 0, 1, 0, null],
    threeAttempts: [2, null, 1, 1, 0, 3, 2, null],
    image: null
  },
  {
    name: 'Al Kao',
    team: 'Better Call Gasol',
    points: [3, null, 0, null, null, 0, 3, null],
    twoMakes: [0, null, 0, null, null, 0, 0, null],
    twoAttempts: [8, null, 0, null, null, 1, 0, null],
    ftMakes: [0, null, 0, null, null, 0, 0, null],
    ftAttempts: [0, null, 0, null, null, 0, 0, null],
    threeMakes: [1, null, 0, null, null, 0, 1, null],
    threeAttempts: [2, null, 0, null, null, 0, 1, null],
    image: null
  },
  {
    name: 'Doulos Kun',
    team: 'Better Call Gasol',
    points: [null, null, 6, 13, 4, 8, 6, null],
    twoMakes: [null, null, 3, 2, 1, 2, 1, null],
    twoAttempts: [null, null, 7, 5, 2, 6, 4, null],
    ftMakes: [null, null, 0, 9, 2, 1, 1, null],
    ftAttempts: [null, null, 0, 10, 2, 2, 6, null],
    threeMakes: [null, null, 0, 1, 0, 1, 1, null],
    threeAttempts: [null, null, 0, 2, 0, 4, 1, null],
    image: null
  },
  {
    name: 'Ethan Hu',
    team: 'Better Call Gasol',
    points: [11, null, 19, null, 10, 18, 4, null],
    twoMakes: [4, null, 3, null, 3, 4, 0, null],
    twoAttempts: [4, null, 11, null, 6, 9, 1, null],
    ftMakes: [0, null, 1, null, 1, 4, 4, null],
    ftAttempts: [0, null, 4, null, 1, 6, 6, null],
    threeMakes: [1, null, 4, null, 1, 2, 0, null],
    threeAttempts: [3, null, 4, null, 2, 3, 0, null],
    image: null
  },
  {
    name: 'Grace Lee',
    team: 'Better Call Gasol',
    points: [5, null, 0, 8, 0, null, 8, null],
    twoMakes: [1, null, 0, 1, 0, null, 1, null],
    twoAttempts: [2, null, 1, 2, 0, null, 1, null],
    ftMakes: [0, null, 0, 0, 0, null, 0, null],
    ftAttempts: [0, null, 0, 0, 0, null, 0, null],
    threeMakes: [1, null, 0, 2, 0, null, 2, null],
    threeAttempts: [2, null, 0, 6, 0, null, 4, null],
    image: null
  },
  {
    name: 'Jason Leung',
    team: 'Better Call Gasol',
    points: [4, null, 5, null, 16, null, null, null],
    twoMakes: [2, null, 1, null, 3, null, null, null],
    twoAttempts: [4, null, 2, null, 4, null, null, null],
    ftMakes: [0, null, 0, null, 1, null, null, null],
    ftAttempts: [0, null, 0, null, 3, null, null, null],
    threeMakes: [0, null, 1, null, 3, null, null, null],
    threeAttempts: [5, null, 3, null, 8, null, null, null],
    image: null
  },
  {
    name: 'Jonathan Lee',
    team: 'Better Call Gasol',
    points: [10, null, null, null, null, null, 2, null],
    twoMakes: [1, null, null, null, null, null, 0, null],
    twoAttempts: [5, null, null, null, null, null, 3, null],
    ftMakes: [2, null, null, null, null, null, 2, null],
    ftAttempts: [4, null, null, null, null, null, 4, null],
    threeMakes: [2, null, null, null, null, null, 0, null],
    threeAttempts: [3, null, null, null, null, null, 5, null],
    image: null
  },
  {
    name: 'Maximus Chung',
    team: 'Better Call Gasol',
    points: [null, null, 8, 10, 24, 9, 4, null],
    twoMakes: [null, null, 1, 2, 4, 1, 0, null],
    twoAttempts: [null, null, 6, 7, 5, 4, 1, null],
    ftMakes: [null, null, 0, 0, 4, 4, 4, null],
    ftAttempts: [null, null, 0, 0, 7, 5, 4, null],
    threeMakes: [null, null, 2, 2, 4, 1, 0, null],
    threeAttempts: [null, null, 7, 8, 12, 10, 3, null],
    image: null
  },
  {
    name: 'Nick Ryu',
    team: 'Better Call Gasol',
    points: [2, null, 0, 4, 5, 4, 6, null],
    twoMakes: [1, null, 0, 2, 2, 2, 2, null],
    twoAttempts: [5, null, 4, 4, 2, 3, 5, null],
    ftMakes: [0, null, 0, 0, 1, 0, 2, null],
    ftAttempts: [0, null, 0, 0, 2, 0, 2, null],
    threeMakes: [0, null, 0, 0, 0, 0, 0, null],
    threeAttempts: [0, null, 0, 0, 0, 0, 0, null],
    image: null
  },
  {
    name: 'Peter Yu',
    team: 'Better Call Gasol',
    points: [2, null, 0, 2, 0, 2, null, null],
    twoMakes: [0, null, 0, 0, 0, 1, null, null],
    twoAttempts: [1, null, 0, 2, 1, 1, null, null],
    ftMakes: [2, null, 0, 2, 0, 0, null, null],
    ftAttempts: [2, null, 0, 4, 0, 0, null, null],
    threeMakes: [0, null, 0, 0, 0, 0, null, null],
    threeAttempts: [0, null, 0, 0, 0, 0, null, null],
    image: null
  },
  {
    name: 'Eugene Lim',
    team: 'Run JHC',
    points: [0, 0, 0, null, 0, 1, 2, null],
    twoMakes: [0, 0, 0, null, 0, 0, 1, null],
    twoAttempts: [0, 0, 0, null, 0, 1, 2, null],
    ftMakes: [0, 0, 0, null, 0, 1, 0, null],
    ftAttempts: [2, 0, 0, null, 0, 4, 0, null],
    threeMakes: [0, 0, 0, null, 0, 0, 0, null],
    threeAttempts: [0, 0, 1, null, 1, 2, 0, null],
    image: null
  },
  {
    name: 'David Moon',
    team: 'Run JHC',
    points: [4, 6, 6, null, null, 10, null, null],
    twoMakes: [2, 3, 3, null, null, 5, null, null],
    twoAttempts: [3, 7, 6, null, null, 8, null, null],
    ftMakes: [0, 0, 0, null, null, 0, null, null],
    ftAttempts: [0, 1, 2, null, null, 0, null, null],
    threeMakes: [0, 0, 0, null, null, 0, null, null],
    threeAttempts: [0, 0, 0, null, null, 0, null, null],
    image: null
  },
  {
    name: 'Eric Byun',
    team: 'Run JHC',
    points: [1, 6, 3, null, 2, null, 5, null],
    twoMakes: [0, 0, 0, null, 1, null, 1, null],
    twoAttempts: [1, 0, 0, null, 4, null, 1, null],
    ftMakes: [1, 0, 0, null, 0, null, 0, null],
    ftAttempts: [2, 0, 0, null, 0, null, 0, null],
    threeMakes: [0, 2, 1, null, 0, null, 1, null],
    threeAttempts: [4, 3, 6, null, 6, null, 1, null],
    image: null
  },
  {
    name: 'Jacob Joe',
    team: 'Run JHC',
    points: [0, 0, 2, null, 3, 0, 0, null],
    twoMakes: [0, 0, 1, null, 1, 0, 0, null],
    twoAttempts: [0, 0, 1, null, 1, 0, 1, null],
    ftMakes: [0, 0, 0, null, 1, 0, 0, null],
    ftAttempts: [0, 0, 0, null, 1, 0, 0, null],
    threeMakes: [0, 0, 0, null, 0, 0, 0, null],
    threeAttempts: [0, 1, 0, null, 0, 1, 0, null],
    image: null
  },
  {
    name: 'James Lee',
    team: 'Run JHC',
    points: [null, 1, null, null, 12, 7, 6, null],
    twoMakes: [null, 0, null, null, 3, 3, 3, null],
    twoAttempts: [null, 1, null, null, 7, 4, 6, null],
    ftMakes: [null, 1, null, null, 3, 1, 0, null],
    ftAttempts: [null, 5, null, null, 4, 2, 0, null],
    threeMakes: [null, 0, null, null, 1, 0, 0, null],
    threeAttempts: [null, 2, null, null, 4, 2, 4, null],
    image: null
  },
  {
    name: 'Jay Lee',
    team: 'Run JHC',
    points: [3, 0, 2, null, 7, 5, 8, null],
    twoMakes: [1, null, 1, null, 2, 1, 1, null],
    twoAttempts: [2, null, 1, null, 5, 3, 2, null],
    ftMakes: [1, null, 0, null, 3, 0, 0, null],
    ftAttempts: [1, null, 0, null, 4, 0, 0, null],
    threeMakes: [0, null, 0, null, 0, 1, 2, null],
    threeAttempts: [1, null, 0, null, 1, 1, 3, null],
    image: null
  },
  {
    name: 'John Huddleston',
    team: 'Run JHC',
    points: [6, 3, 5, null, 10, 3, 11, null],
    twoMakes: [0, 1, 1, null, 1, 0, 1, null],
    twoAttempts: [0, 2, 2, null, 2, 3, 3, null],
    ftMakes: [0, 1, 0, null, 2, 0, 3, null],
    ftAttempts: [0, 1, 0, null, 2, 0, 4, null],
    threeMakes: [2, 0, 1, null, 2, 1, 2, null],
    threeAttempts: [4, 7, 2, null, 6, 6, 2, null],
    image: null
  },
  {
    name: 'Joshua Chung',
    team: 'Run JHC',
    points: [19, 21, 20, null, null, 21, 12, null],
    twoMakes: [5, 5, 5, null, null, 6, 2, null],
    twoAttempts: [11, 9, 11, null, null, 12, 5, null],
    ftMakes: [9, 2, 1, null, null, 6, 2, null],
    ftAttempts: [10, 2, 1, null, null, 6, 2, null],
    threeMakes: [0, 3, 3, null, null, 1, 2, null],
    threeAttempts: [4, 5, 5, null, null, 3, 8, null],
    image: null
  },
  {
    name: 'Olivia DeRienzo',
    team: 'Run JHC',
    points: [2, 3, 0, null, 2, null, null],
    twoMakes: [1, 0, 0, null, 1, null, null, null],
    twoAttempts: [3, 0, 1, null, 3, null, null, null],
    ftMakes: [0, 0, 0, null, 0, null, null, null],
    ftAttempts: [0, 0, 0, null, 0, null, null, null],
    threeMakes: [0, 1, 0, null, 0, null, null, null],
    threeAttempts: [0, 1, 1, null, 1, null, null, null],
    image: null
  },
  {
    name: 'Timothy Yu',
    team: 'Run JHC',
    points: [6, 13, 12, null, 19, 0, 7, null],
    twoMakes: [1, 5, 3, null, 8, 0, 2, null],
    twoAttempts: [2, 8, 5, null, 10, 0, 4, null],
    ftMakes: [4, 0, 3, null, 3, 0, 3, null],
    ftAttempts: [6, 0, 4, null, 5, 0, 4, null],
    threeMakes: [0, 1, 1, null, 0, 0, 0, null],
    threeAttempts: [0, 5, 3, null, 5, 0, 1, null],
    image: null
  },
  {
    name: 'James Lee',
    team: 'J-Walkers',
    points: [null, null, 0, 9, 0, 9, 15, null],
    twoMakes: [null, null, 0, 2, 0, 2, 3, null],
    twoAttempts: [null, null, 2, 4, 3, 5, 7, null],
    ftMakes: [null, null, 0, 2, 0, 2, 0, null],
    ftAttempts: [null, null, 0, 2, 2, 6, 1, null],
    threeMakes: [null, null, 0, 1, 0, 1, 3, null],
    threeAttempts: [null, null, 4, 5, 2, 4, 8, null],
    image: null
  },
  {
    name: 'Allan Eckart',
    team: 'J-Walkers',
    points: [null, 5, null, null, 7, 9, 1, null],
    twoMakes: [null, 1, null, null, 1, 1, 0, null],
    twoAttempts: [null, 4, null, null, 5, 3, 1, null],
    ftMakes: [null, 0, null, null, 2, 4, 1, null],
    ftAttempts: [null, 0, null, null, 2, 6, 2, null],
    threeMakes: [null, 1, null, null, 1, 1, 0, null],
    threeAttempts: [null, 5, null, null, 4, 4, 0, null],
    image: null
  },
  {
    name: 'Gene Kum',
    team: 'J-Walkers',
    points: [null, null, 2, 0, 0, 0, 2, null],
    twoMakes: [null, null, 1, 0, 0, 0, 1, null],
    twoAttempts: [null, null, 3, 4, 1, 2, 1, null],
    ftMakes: [null, null, 0, 0, 0, 0, 0, null],
    ftAttempts: [null, null, 0, 0, 0, 0, 0, null],
    threeMakes: [null, null, 0, 0, 0, 0, 0, null],
    threeAttempts: [null, null, 4, 2, 1, 0, 2, null],
    image: null
  },
  {
    name: 'Ian Byun',
    team: 'J-Walkers',
    points: [null, 6, 9, 0, null, 5, 3, null],
    twoMakes: [null, 0, 3, 0, null, 0, 0, null],
    twoAttempts: [null, 2, 4, 2, null, 0, 0, null],
    ftMakes: [null, 0, 0, 0, null, 2, 0, null],
    ftAttempts: [null, 0, 2, 1, null, 2, 0, null],
    threeMakes: [null, 2, 1, 0, null, 1, 1, null],
    threeAttempts: [null, 9, 4, 4, null, 6, 5, null],
    image: null
  },
  {
    name: 'Joe Lee',
    team: 'J-Walkers',
    points: [null, null, 13, 5, 2, 12, 5, null],
    twoMakes: [null, null, 2, 1, 1, 3, 1, null],
    twoAttempts: [null, null, 4, 1, 3, 7, 4, null],
    ftMakes: [null, null, 0, 0, 0, 0, 0, null],
    ftAttempts: [null, null, 0, 0, 0, 0, 1, null],
    threeMakes: [null, null, 3, 1, 0, 2, 1, null],
    threeAttempts: [null, null, 5, 5, 5, 5, 6, null],
    image: null
  },
  {
    name: 'Lauren Kong',
    team: 'J-Walkers',
    points: [null, 0, 0, null, null, 0, 0, null],
    twoMakes: [null, 0, 0, null, null, 0, 0, null],
    twoAttempts: [null, 1, 1, null, null, 0, 1, null],
    ftMakes: [null, 0, 0, null, null, 0, 0, null],
    ftAttempts: [null, 0, 0, null, null, 0, 0, null],
    threeMakes: [null, 0, 0, null, null, 0, 0, null],
    threeAttempts: [null, 0, 1, null, null, 0, 0, null],
    image: null
  },
  {
    name: 'Mike Su',
    team: 'J-Walkers',
    points: [null, 5, 0, null, 5, null, 3, null],
    twoMakes: [null, 1, null, null, 1, null, 1, null],
    twoAttempts: [null, 6, null, null, 1, null, 4, null],
    ftMakes: [null, 3, null, null, 3, null, 1, null],
    ftAttempts: [null, 4, null, null, 4, null, 2, null],
    threeMakes: [null, 0, null, null, 0, null, 0, null],
    threeAttempts: [null, 4, null, null, 3, null, 2, null],
    image: null
  },
  {
    name: 'Paul Kim',
    team: 'J-Walkers',
    points: [null, 9, 14, 2, 6, 0, null, null],
    twoMakes: [null, 3, 1, 1, 1, 0, null, null],
    twoAttempts: [null, 10, 2, 4, 7, 1, null, null],
    ftMakes: [null, 0, 0, 0, 4, 0, null, null],
    ftAttempts: [null, 0, 0, 0, 5, 0, null, null],
    threeMakes: [null, 1, 4, 0, 0, 0, null, null],
    threeAttempts: [null, 5, 7, 6, 3, 0, null, null],
    image: null
  },
  {
    name: 'Raymond Kim',
    team: 'J-Walkers',
    points: [null, 2, 1, 4, null, 0, 4, null],
    twoMakes: [null, 1, 0, 2, null, 0, 2, null],
    twoAttempts: [null, 3, 2, 3, null, 1, 2, null],
    ftMakes: [null, 0, 1, 0, null, 0, 0, null],
    ftAttempts: [null, 0, 2, 0, null, 0, 0, null],
    threeMakes: [null, 0, 0, 0, null, 0, 0, null],
    threeAttempts: [null, 2, 0, 1, null, 0, 3, null],
    image: null
  },
  {
    name: 'Timothy Jao',
    team: 'J-Walkers',
    points: [null, 15, 6, 10, 14, 12, 14, null],
    twoMakes: [null, 6, 3, 3, 7, 6, 7, null],
    twoAttempts: [null, 12, 3, 7, 11, 10, 10, null],
    ftMakes: [null, 3, 0, 1, 0, 0, 0, null],
    ftAttempts: [null, 6, 2, 5, 3, 8, 0, null],
    threeMakes: [null, 0, 0, 1, 0, 0, 0, null],
    threeAttempts: [null, 1, 1, 2, 2, 0, 0, null],
    image: null
  },
  {
    name: 'Jin Bae',
    team: 'Goon Squad',
    points: [11, null, 11, 8, 14, 18, null, 16],
    twoMakes: [5, null, 5, 3, 4, 7, null, 6],
    twoAttempts: [14, null, 10, 7, 7, 11, null, 11],
    ftMakes: [1, null, 1, 2, 6, 5, null, 4],
    ftAttempts: [6, null, 5, 2, 7, 8, null, 7],
    threeMakes: [0, null, 0, 0, 0, 0, null, 0],
    threeAttempts: [0, null, 0, 1, 0, 0, null, 0],
    image: null
  },
  {
    name: 'Angeline Quach',
    team: 'Goon Squad',
    points: [2, null, 0, 0, 2, 0, null, 0],
    twoMakes: [1, null, 0, 0, 1, 0, null, 0],
    twoAttempts: [1, null, 0, 2, 2, 0, null, 0],
    ftMakes: [0, null, 0, 0, 0, 0, null, 0],
    ftAttempts: [0, null, 0, 0, 0, 0, null, 0],
    threeMakes: [0, null, 0, 0, 0, 0, null, 0],
    threeAttempts: [0, null, 0, 0, 0, 0, null, 0],
    image: null
  },
  {
    name: 'Benjamin Lee',
    team: 'Goon Squad',
    points: [null, null, null, null, 2, 0, null, 0],
    twoMakes: [null, null, null, null, 1, 0, null, 0],
    twoAttempts: [null, null, null, null, 2, 1, null, 2],
    ftMakes: [null, null, null, null, 0, 0, null, 0],
    ftAttempts: [null, null, null, null, 0, 0, null, 0],
    threeMakes: [null, null, null, null, 0, 0, null, 0],
    threeAttempts: [null, null, null, null, 0, 0, null, 0],
    image: null
  },
  {
    name: 'David Lee',
    team: 'Goon Squad',
    points: [2, null, 0, 2, null, null, null, 5],
    twoMakes: [1, null, 0, 0, null, null, null, 2],
    twoAttempts: [2, null, 4, 1, null, null, null, 3],
    ftMakes: [0, null, 0, 2, null, null, null, 1],
    ftAttempts: [0, null, 0, 2, null, null, null, 1],
    threeMakes: [0, null, 0, 0, null, null, null, 0],
    threeAttempts: [0, null, 0, 0, null, null, null, 0],
    image: null
  },
  {
    name: 'Insoo Kim',
    team: 'Goon Squad',
    points: [0, null, 0, null, 6, 6, null, 4],
    twoMakes: [0, null, 0, null, 0, 0, null, 1],
    twoAttempts: [1, null, 2, null, 1, 1, null, 1],
    ftMakes: [0, null, 0, null, 0, 0, null, 2],
    ftAttempts: [0, null, 0, null, 0, 0, null, 2],
    threeMakes: [0, null, 0, null, 2, 2, null, 0],
    threeAttempts: [0, null, 0, null, 6, 4, null, 2],
    image: null
  },
  {
    name: 'Ivan Huang',
    team: 'Goon Squad',
    points: [5, null, 2, 2, 2, 10, null, 8],
    twoMakes: [2, null, 1, 1, 1, 4, null, 3],
    twoAttempts: [4, null, 1, 4, 4, 6, null, 9],
    ftMakes: [1, null, 0, 0, 0, 2, null, 2],
    ftAttempts: [2, null, 2, 0, 0, 3, null, 2],
    threeMakes: [0, null, 0, 0, 0, 0, null, 0],
    threeAttempts: [0, null, 0, 0, 0, 1, null, 3],
    image: null
  },
  {
    name: 'Jeffrey Zhu',
    team: 'Goon Squad',
    points: [7, null, 1, 4, 4, 0, null, 13],
    twoMakes: [0, null, 0, 2, 2, 0, null, 2],
    twoAttempts: [1, null, 4, 7, 4, 1, null, 4],
    ftMakes: [1, null, 1, 0, 0, 0, null, 0],
    ftAttempts: [6, null, 4, 0, 0, 0, null, 2],
    threeMakes: [2, null, 0, 0, 0, 0, null, 3],
    threeAttempts: [4, null, 3, 4, 3, 2, null, 4],
    image: null
  },
  {
    name: 'Joon Kim',
    team: 'Goon Squad',
    points: [4, null, 4, 6, 7, 11, null, null],
    twoMakes: [2, null, 1, 2, 2, 4, null, null],
    twoAttempts: [4, null, 6, 5, 6, 5, null, null],
    ftMakes: [0, null, 2, 2, 0, 3, null, null],
    ftAttempts: [0, null, 5, 3, 1, 3, null, null],
    threeMakes: [0, null, 0, 0, 1, 0, null, null],
    threeAttempts: [1, null, 0, 1, 2, 2, null, null],
    image: null
  },
  {
    name: 'Sil Han Jin',
    team: 'Goon Squad',
    points: [7, null, 0, 6, 5, 3, null, null],
    twoMakes: [3, null, 0, 2, 2, 0, null, null],
    twoAttempts: [7, null, 2, 5, 3, 3, null, null],
    ftMakes: [1, null, 0, 2, 1, 0, null, null],
    ftAttempts: [5, null, 0, 5, 5, 2, null, null],
    threeMakes: [0, null, 0, 0, 0, 1, null, null],
    threeAttempts: [3, null, 0, 0, 0, 1, null, null],
    image: null
  },
  {
    name: 'Sung Cho',
    team: 'Goon Squad',
    points: [0, null, 3, 6, null, 2, null, 0],
    twoMakes: [0, null, 0, 2, null, 0, null, 0],
    twoAttempts: [1, null, 2, 4, null, 2, null, 4],
    ftMakes: [0, null, 0, 2, null, 2, null, 0],
    ftAttempts: [0, null, 0, 2, null, 2, null, 0],
    threeMakes: [0, null, 1, 0, null, 0, null, 0],
    threeAttempts: [2, null, 2, 2, null, 3, null, 1],
    image: null
  },
  {
    name: 'Luke Bae',
    team: 'Crossovers For Christ',
    points: [9, 15, null, 8, 16, 10, 11, null],
    twoMakes: [3, 3, null, 2, 1, 1, 1, null],
    twoAttempts: [4, 4, null, 5, 2, 3, 2, null],
    ftMakes: [3, 0, null, 1, 2, 2, 0, null],
    ftAttempts: [3, 1, null, 2, 4, 5, 0, null],
    threeMakes: [0, 3, null, 1, 4, 2, 3, null],
    threeAttempts: [3, 4, null, 3, 4, 7, 5, null],
    image: null
  },
  {
    name: 'Aaron Kim',
    team: 'Crossovers For Christ',
    points: [4, 0, null, 0, 2, 6, 2, null],
    twoMakes: [2, 0, null, 0, 1, 3, 1, null],
    twoAttempts: [3, 3, null, 2, 6, 6, 5, null],
    ftMakes: [0, 0, null, 0, 0, 0, 0, null],
    ftAttempts: [0, 0, null, 0, 0, 1, 0, null],
    threeMakes: [0, 0, null, 0, 0, 0, 0, null],
    threeAttempts: [0, 0, null, 0, 2, 3, 0, null],
    image: null
  },
  {
    name: 'Jonathan Kim',
    team: 'Crossovers For Christ',
    points: [3, 2, null, null, 3, null, 6, null],
    twoMakes: [0, 1, null, null, 0, null, 0, null],
    twoAttempts: [0, 2, null, null, 0, null, 2, null],
    ftMakes: [0, 0, null, null, 0, null, 0, null],
    ftAttempts: [0, 0, null, null, 0, null, 0, null],
    threeMakes: [1, 0, null, null, 1, null, 2, null],
    threeAttempts: [1, 4, null, null, 6, null, 3, null],
    image: null
  },
  {
    name: 'Kevin Ra',
    team: 'Crossovers For Christ',
    points: [6, 2, null, 0, 7, 7, 10, null],
    twoMakes: [3, 1, null, 0, 3, 2, 5, null],
    twoAttempts: [6, 7, null, 4, 5, 8, 9, null],
    ftMakes: [0, 0, null, 0, 1, 0, 0, null],
    ftAttempts: [1, 0, null, 0, 1, 0, 0, null],
    threeMakes: [0, 0, null, 0, 0, 1, 0, null],
    threeAttempts: [1, 2, null, 0, 2, 5, 2, null],
    image: null
  },
  {
    name: 'Kimberly Huang',
    team: 'Crossovers For Christ',
    points: [5, 0, null, 1, 6, 9, 10, null],
    twoMakes: [2, 0, null, 0, 2, 3, 4, null],
    twoAttempts: [4, 2, null, 4, 6, 6, 6, null],
    ftMakes: [1, 0, null, 1, 2, 3, 2, null],
    ftAttempts: [2, 0, null, 2, 2, 4, 2, null],
    threeMakes: [0, 0, null, 0, 0, 0, 0, null],
    threeAttempts: [0, 0, null, 0, 0, 1, 0, null],
    image: null
  },
  {
    name: 'Michael Lin',
    team: 'Crossovers For Christ',
    points: [6, null, null, 11, null, null, 10, null],
    twoMakes: [0, null, null, 2, null, null, 5, null],
    twoAttempts: [1, null, null, 2, null, null, 8, null],
    ftMakes: [0, null, null, 4, null, null, 0, null],
    ftAttempts: [2, null, null, 9, null, null, 1, null],
    threeMakes: [2, null, null, 1, null, null, 0, null],
    threeAttempts: [2, null, null, 2, null, null, 2, null],
    image: null
  },
  {
    name: 'Nate Lee',
    team: 'Crossovers For Christ',
    points: [7, 7, null, 8, 12, 7, 11, null],
    twoMakes: [0, 2, null, 2, 6, 2, 4, null],
    twoAttempts: [0, 7, null, 5, 6, 3, 9, null],
    ftMakes: [4, 0, null, 1, 0, 0, 0, null],
    ftAttempts: [6, 0, null, 2, 1, 1, 0, null],
    threeMakes: [1, 1, null, 1, 0, 1, 1, null],
    threeAttempts: [2, 4, null, 1, 3, 3, 1, null],
    image: null
  },
  {
    name: 'Paul You',
    team: 'Crossovers For Christ',
    points: [2, 2, null, 2, null, 2, null, null],
    twoMakes: [1, 1, null, 1, null, 1, null, null],
    twoAttempts: [1, 1, null, 1, null, 2, null, null],
    ftMakes: [0, 0, null, 0, null, 0, null, null],
    ftAttempts: [0, 0, null, 0, null, 0, null, null],
    threeMakes: [0, 0, null, 0, null, 0, null, null],
    threeAttempts: [0, 0, null, 0, null, 0, null, null],
    image: null
  },
  {
    name: 'Simon Hwang',
    team: 'Crossovers For Christ',
    points: [2, 0, null, 7, 0, null, 5, null],
    twoMakes: [1, 0, null, 2, 0, null, 1, null],
    twoAttempts: [1, 0, null, 2, 0, null, 1, null],
    ftMakes: [0, 0, null, 0, 0, null, 0, null],
    ftAttempts: [0, 0, null, 0, 0, null, 0, null],
    threeMakes: [0, 0, null, 1, 0, null, 1, null],
    threeAttempts: [1, 4, null, 3, 2, null, 1, null],
    image: null
  },
  {
    name: 'William Sohn',
    team: 'Crossovers For Christ',
    points: [0, null, null, 0, 0, 3, 2, null],
    twoMakes: [0, null, null, 0, 0, 0, 1, null],
    twoAttempts: [1, null, null, 1, 1, 0, 3, null],
    ftMakes: [0, null, null, 0, 0, 0, 0, null],
    ftAttempts: [0, null, null, 0, 0, 0, 0, null],
    threeMakes: [0, null, null, 0, 0, 1, 0, null],
    threeAttempts: [0, null, null, 0, 0, 2, 0, null],
    image: null
  },
  {
    name: 'Max Lee',
    team: 'Team Noona',
    points: [2, 2, null, 11, 16, 7, 12, null],
    twoMakes: [1, 1, null, 1, 3, 2, 3, null],
    twoAttempts: [2, 4, null, 4, 3, 5, 4, null],
    ftMakes: [0, 0, null, 0, 1, 0, 0, null],
    ftAttempts: [0, 0, null, 0, 2, 0, 0, null],
    threeMakes: [0, 0, null, 3, 3, 1, 2, null],
    threeAttempts: [4, 5, null, 10, 4, 7, 7, null],
    image: null
  },
  {
    name: 'Andrew Chia',
    team: 'Team Noona',
    points: [0, 0, null, 0, null, 0, 3, null],
    twoMakes: [0, 0, null, 0, null, 0, 0, null],
    twoAttempts: [0, 0, null, 1, null, 0, 1, null],
    ftMakes: [0, 0, null, 0, null, 0, 0, null],
    ftAttempts: [0, 0, null, 0, null, 0, 0, null],
    threeMakes: [0, 0, null, 0, null, 0, 1, null],
    threeAttempts: [2, 2, null, 0, null, 1, 1, null],
    image: null
  },
  {
    name: 'Chris Lee',
    team: 'Team Noona',
    points: [0, null, null, 0, 0, 0, 0, null],
    twoMakes: [0, 0, null, 0, 0, 0, 0, null],
    twoAttempts: [0, 0, null, 0, 0, 0, 0, null],
    ftMakes: [0, 0, null, 0, 0, 0, 0, null],
    ftAttempts: [0, 0, null, 0, 0, 0, 0, null],
    threeMakes: [0, 0, null, 0, 0, 0, 0, null],
    threeAttempts: [1, 0, null, 1, 0, 1, 0, null],
    image: null
  },
  {
    name: 'Jay Won',
    team: 'Team Noona',
    points: [2, 4, null, 6, 4, 4, 5, null],
    twoMakes: [1, 2, null, 3, 1, 2, 2, null],
    twoAttempts: [3, 2, null, 5, 2, 2, 4, null],
    ftMakes: [0, 0, null, 0, 2, 0, 1, null],
    ftAttempts: [2, 3, null, 1, 2, 0, 3, null],
    threeMakes: [0, 0, null, 0, 0, 0, 0, null],
    threeAttempts: [3, 2, null, 1, 2, 0, 0, null],
    image: null
  },
  {
    name: 'Justin Chung',
    team: 'Team Noona',
    points: [8, 2, null, 9, 13, 10, 5, null],
    twoMakes: [1, 0, null, 2, 0, 5, 1, null],
    twoAttempts: [2, 2, null, 7, 5, 7, 4, null],
    ftMakes: [3, 2, null, 2, 1, 0, 0, null],
    ftAttempts: [3, 2, null, 2, 2, 0, 0, null],
    threeMakes: [1, 0, null, 1, 4, 0, 1, null],
    threeAttempts: [8, 3, null, 9, 6, 8, 4, null],
    image: null
  },
  {
    name: 'Matthew Toma',
    team: 'Team Noona',
    points: [2, 6, null, 2, 0, 3, 8, null],
    twoMakes: [1, 3, null, 0, 0, 1, 4, null],
    twoAttempts: [3, 4, null, 1, 1, 1, 4, null],
    ftMakes: [0, 0, null, 2, 0, 1, 0, null],
    ftAttempts: [1, 1, null, 2, 1, 2, 0, null],
    threeMakes: [0, 0, null, 0, 0, 0, 0, null],
    threeAttempts: [1, 0, null, 0, 0, 0, 1, null],
    image: null
  },
  {
    name: 'Michael Ruan',
    team: 'Team Noona',
    points: [1, 3, null, null, 2, 4, 2, null],
    twoMakes: [0, 1, null, null, 1, 2, 1, null],
    twoAttempts: [1, 2, null, null, 2, 3, 2, null],
    ftMakes: [1, 1, null, null, 0, 0, 0, null],
    ftAttempts: [2, 2, null, null, 0, 1, 0, null],
    threeMakes: [0, 0, null, null, 0, 0, 0, null],
    threeAttempts: [1, 1, null, null, 0, 0, 0, null],
    image: null
  },
  {
    name: 'Paul Ko',
    team: 'Team Noona',
    points: [4, 2, null, null, 4, 0, null, null],
    twoMakes: [2, 0, null, null, 0, 0, null, null],
    twoAttempts: [4, 1, null, null, 2, 0, null, null],
    ftMakes: [0, 2, null, null, 4, 0, null, null],
    ftAttempts: [0, 4, null, null, 6, 0, null, null],
    threeMakes: [0, 0, null, null, 0, 0, null, null],
    threeAttempts: [0, 0, null, null, 0, 0, null, null],
    image: null
  },
  {
    name: 'Tae Kim',
    team: 'Team Noona',
    points: [7, 11, null, 20, 5, 8, 16, null],
    twoMakes: [2, 0, null, 6, 1, 1, 2, null],
    twoAttempts: [6, 0, null, 13, 7, 4, 4, null],
    ftMakes: [0, 2, null, 5, 3, 0, 0, null],
    ftAttempts: [2, 5, null, 7, 5, 2, 1, null],
    threeMakes: [1, 3, null, 1, 0, 2, 4, null],
    threeAttempts: [3, 6, null, 5, 2, 6, 6, null],
    image: null
  },
  {
    name: 'Christina Oh',
    team: 'Team Noona',
    points: [null, null, null, null, 2, 0, 2, null],
    twoMakes: [null, null, null, null, 1, 0, 1, null],
    twoAttempts: [null, null, null, null, 1, 1, 1, null],
    ftMakes: [null, null, null, null, 0, 0, 0, null],
    ftAttempts: [null, null, null, null, 0, 0, 0, null],
    threeMakes: [null, null, null, null, 0, 0, 0, null],
    threeAttempts: [null, null, null, null, 0, 0, 0, null],
    image: null
  },
  {
    name: 'Robin Choi',
    team: "Robin's Hood",
    points: [0, 0, null, null, 3, 0, null, 6],
    twoMakes: [0, 0, null, null, 1, 0, null, 0],
    twoAttempts: [2, 2, null, null, 2, 3, null, 4],
    ftMakes: [0, 0, null, null, 1, 0, null, 0],
    ftAttempts: [0, 0, null, null, 2, 1, null, 0],
    threeMakes: [0, 0, null, null, 0, 0, null, 2],
    threeAttempts: [2, 0, null, null, 0, 1, null, 7],
    image: null
  },
  {
    name: 'Brandon Wang',
    team: "Robin's Hood",
    points: [0, null, 6, null, 12, 9, null, null],
    twoMakes: [0, null, 0, null, 0, 0, null, null],
    twoAttempts: [4, null, 0, null, 0, 1, null, null],
    ftMakes: [0, null, 0, null, 0, 0, null, null],
    ftAttempts: [0, null, 0, null, 0, 2, null, null],
    threeMakes: [0, null, 2, null, 4, 3, null, null],
    threeAttempts: [3, null, 5, null, 8, 8, null, null],
    image: null
  },
  {
    name: 'Jamie Chang',
    team: "Robin's Hood",
    points: [0, 4, 0, null, null, null, null, 4],
    twoMakes: [0, 2, 0, null, null, null, null, 2],
    twoAttempts: [7, 3, 2, null, null, null, null, 2],
    ftMakes: [0, 0, 0, null, null, null, null, 0],
    ftAttempts: [0, 0, 0, null, null, null, null, 0],
    threeMakes: [0, 0, 0, null, null, null, null, 0],
    threeAttempts: [2, 3, 0, null, null, null, null, 1],
    image: null
  },
  {
    name: 'Jonathan Mo',
    team: "Robin's Hood",
    points: [0, 0, 0, null, 2, 1, null, 3],
    twoMakes: [0, 0, 0, null, 1, 0, null, 0],
    twoAttempts: [0, 0, 1, null, 1, 1, null, 2],
    ftMakes: [0, 0, 0, null, 0, 1, null, 0],
    ftAttempts: [0, 0, 0, null, 0, 2, null, 0],
    threeMakes: [0, 0, 0, null, 0, 0, null, 1],
    threeAttempts: [0, 1, 0, null, 0, 0, null, 1],
    image: null
  },
  {
    name: 'Josh Nash',
    team: "Robin's Hood",
    points: [0, 0, 2, null, 2, 0, null, null],
    twoMakes: [0, 0, 1, null, 1, 0, null, null],
    twoAttempts: [0, 0, 1, null, 1, 0, null, null],
    ftMakes: [0, 0, 0, null, 0, 0, null, null],
    ftAttempts: [0, 0, 0, null, 0, 0, null, null],
    threeMakes: [0, 0, 0, null, 0, 0, null, null],
    threeAttempts: [0, 0, 0, null, 0, 0, null, null],
    image: null
  },
  {
    name: 'Matthew Ikeda',
    team: "Robin's Hood",
    points: [5, 27, 8, null, 8, null, null, null],
    twoMakes: [1, 3, 1, null, 2, null, null, null],
    twoAttempts: [1, 7, 2, null, 2, null, null, null],
    ftMakes: [0, 0, 0, null, 1, null, null, null],
    ftAttempts: [0, 0, 0, null, 2, null, null, null],
    threeMakes: [1, 7, 2, null, 1, null, null, null],
    threeAttempts: [5, 12, 9, null, 6, null, null, null],
    image: null
  },
  {
    name: 'Patrick Suh',
    team: "Robin's Hood",
    points: [10, 2, 20, null, 0, 4, null, 6],
    twoMakes: [5, 1, 8, null, 0, 2, null, 3],
    twoAttempts: [11, 3, 12, null, 6, 6, null, 5],
    ftMakes: [0, 0, 1, null, 0, 0, null, 0],
    ftAttempts: [0, 0, 2, null, 0, 0, null, 1],
    threeMakes: [0, 0, 1, null, 0, 0, null, 0],
    threeAttempts: [1, 1, 1, null, 0, 0, null, 2],
    image: null
  },
  {
    name: 'Peter Bae',
    team: "Robin's Hood",
    points: [null, null, null, null, 0, 0, null, 0],
    twoMakes: [null, null, null, null, 0, 0, null, 0],
    twoAttempts: [null, null, null, null, 2, 0, null, 0],
    ftMakes: [null, null, null, null, 0, 0, null, 0],
    ftAttempts: [null, null, null, null, 2, 0, null, 0],
    threeMakes: [null, null, null, null, 0, 0, null, 0],
    threeAttempts: [null, null, null, null, 0, 0, null, 0],
    image: null
  },
  {
    name: 'Richard Yoon',
    team: "Robin's Hood",
    points: [7, 8, 7, null, 3, 10, null, 16],
    twoMakes: [2, 1, 1, null, 1, 1, null, 5],
    twoAttempts: [2, 3, 2, null, 2, 4, null, 6],
    ftMakes: [0, 0, 2, null, 1, 5, null, 0],
    ftAttempts: [0, 0, 2, null, 4, 8, null, 0],
    threeMakes: [1, 2, 1, null, 0, 1, null, 2],
    threeAttempts: [5, 5, 4, null, 1, 4, null, 5],
    image: null
  },
  {
    name: 'Zion No',
    team: "Robin's Hood",
    points: [12, 15, 11, null, 11, 19, null, 13],
    twoMakes: [3, 4, 5, null, 3, 2, null, 3],
    twoAttempts: [9, 6, 8, null, 6, 4, null, 8],
    ftMakes: [0, 4, 1, null, 2, 6, null, 7],
    ftAttempts: [0, 5, 3, null, 3, 10, null, 16],
    threeMakes: [2, 1, 0, null, 1, 3, null, 0],
    threeAttempts: [7, 5, 3, null, 4, 7, null, 6],
    image: null
  },
  {
    name: 'Timothy Chiu',
    team: 'Kick Your Boaz',
    points: [null, 7, 9, 3, 5, 8, 5, null],
    twoMakes: [null, 0, 0, 0, 1, 1, 0, null],
    twoAttempts: [null, 2, 2, 1, 2, 3, 2, null],
    ftMakes: [null, 4, 0, 0, 0, 0, 2, null],
    ftAttempts: [null, 4, 0, 0, 0, 0, 2, null],
    threeMakes: [null, 1, 3, 1, 1, 2, 1, null],
    threeAttempts: [null, 3, 9, 4, 1, 9, 3, null],
    image: null
  },
  {
    name: 'Andrew Lee',
    team: 'Kick Your Boaz',
    points: [null, 3, 0, null, 4, 0, 0, null],
    twoMakes: [null, 0, 0, null, 2, 0, 0, null],
    twoAttempts: [null, 1, 0, null, 7, 0, 2, null],
    ftMakes: [null, 0, 0, null, 0, 0, 0, null],
    ftAttempts: [null, 0, 2, null, 1, 0, 0, null],
    threeMakes: [null, 1, 0, null, 0, 0, 0, null],
    threeAttempts: [null, 1, 1, null, 0, 0, 0, null],
    image: null
  },
  {
    name: 'Chris Kim',
    team: 'Kick Your Boaz',
    points: [null, 0, 0, 0, 0, 0, null, null],
    twoMakes: [null, 0, 0, 0, 0, 0, null, null],
    twoAttempts: [null, 1, 0, 0, 0, 0, null, null],
    ftMakes: [null, 0, 0, 0, 0, 0, null, null],
    ftAttempts: [null, 0, 0, 0, 0, 0, null, null],
    threeMakes: [null, 0, 0, 0, 0, 0, null, null],
    threeAttempts: [null, 0, 2, 0, 0, 0, null, null],
    image: null
  },
  {
    name: 'Elliot Kim',
    team: 'Kick Your Boaz',
    points: [null, 13, 10, 11, null, 7, null, null],
    twoMakes: [null, 5, 0, 0, null, 2, null, null],
    twoAttempts: [null, 7, 5, 0, null, 4, null, null],
    ftMakes: [null, 3, 10, 5, null, 0, null, null],
    ftAttempts: [null, 8, 12, 8, null, 0, null, null],
    threeMakes: [null, 0, 0, 2, null, 1, null, null],
    threeAttempts: [null, 1, 3, 2, null, 3, null, null],
    image: null
  },
  {
    name: 'Jason Lee',
    team: 'Kick Your Boaz',
    points: [null, 3, 0, 2, 0, 7, 12, null],
    twoMakes: [null, 0, 0, 1, 0, 2, 0, null],
    twoAttempts: [null, 2, 3, 4, 0, 6, 2, null],
    ftMakes: [null, 0, 0, 0, 0, 0, 0, null],
    ftAttempts: [null, 0, 0, 0, 0, 2, 3, null],
    threeMakes: [null, 1, 0, 0, 0, 1, 4, null],
    threeAttempts: [null, 5, 6, 5, 0, 6, 7, null],
    image: null
  },
  {
    name: 'Jonathan Cui',
    team: 'Kick Your Boaz',
    points: [null, 1, 2, 0, 9, 0, 7, null],
    twoMakes: [null, 0, 1, 0, 4, 0, 3, null],
    twoAttempts: [null, 4, 1, 2, 5, 2, 5, null],
    ftMakes: [null, 1, 0, 0, 1, 0, 1, null],
    ftAttempts: [null, 2, 0, 2, 5, 0, 3, null],
    threeMakes: [null, 0, 0, 0, 0, 0, 0, null],
    threeAttempts: [null, 0, 0, 0, 0, 1, 0, null],
    image: null
  },
  {
    name: 'Josiah Bezet',
    team: 'Kick Your Boaz',
    points: [null, null, 2, 9, 5, 13, 11, null],
    twoMakes: [null, null, 1, 0, 0, 2, 2, null],
    twoAttempts: [null, null, 2, 1, 6, 9, 9, null],
    ftMakes: [null, null, 0, 0, 2, 0, 1, null],
    ftAttempts: [null, null, 0, 0, 4, 2, 2, null],
    threeMakes: [null, null, 0, 3, 1, 3, 2, null],
    threeAttempts: [null, null, 2, 4, 5, 6, 5, null],
    image: null
  },
  {
    name: 'Michael Tay',
    team: 'Kick Your Boaz',
    points: [null, 7, 0, 0, 7, 0, 4, null],
    twoMakes: [null, 1, 0, 0, 2, 0, 0, null],
    twoAttempts: [null, 2, 1, 0, 5, 2, 0, null],
    ftMakes: [null, 2, 0, 0, 0, 0, 1, null],
    ftAttempts: [null, 2, 0, 0, 0, 0, 3, null],
    threeMakes: [null, 1, 0, 0, 1, 0, 1, null],
    threeAttempts: [null, 2, 4, 0, 1, 0, 3, null],
    image: null
  },
  {
    name: 'Ryan Chow',
    team: 'Kick Your Boaz',
    points: [null, 0, null, null, null, null, null, null],
    twoMakes: [null, 0, null, null, null, null, null, null],
    twoAttempts: [null, 0, null, null, null, null, null, null],
    ftMakes: [null, 0, null, null, null, null, null, null],
    ftAttempts: [null, 0, null, null, null, null, null, null],
    threeMakes: [null, 0, null, null, null, null, null, null],
    threeAttempts: [null, 0, null, null, null, null, null, null],
    image: null
  },
  {
    name: 'Stephen Han',
    team: 'Kick Your Boaz',
    points: [null, 2, 0, 7, 2, 0, null, null],
    twoMakes: [null, 0, 0, 3, 1, 0, null, null],
    twoAttempts: [null, 0, 1, 3, 4, 5, null, null],
    ftMakes: [null, 2, 0, 1, 0, 0, null, null],
    ftAttempts: [null, 6, 0, 6, 2, 0, null, null],
    threeMakes: [null, 0, 0, 0, 0, 0, null, null],
    threeAttempts: [null, 3, 3, 3, 4, 2, null, null],
    image: null
  }
];
