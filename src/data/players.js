export function getAverage(stat) {
  const initialValue = 0;
  const sum = stat.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const average = sum / stat.length + 1;
  return average;
}

export function getSum(stat) {
  const initialValue = 0;
  const sum = stat.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  return sum;
}

export const players = [
  {
    name: 'Sharon Lee',
    team: 'Victorious Secret',
    twoMakes: [1],
    twoAttempts: [3],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Daniel Kim',
    team: 'Victorious Secret',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Justin Son',
    team: 'Victorious Secret',
    twoMakes: [3],
    twoAttempts: [4],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [1],
    threeAttempts: [5],
    image: null
  },
  {
    name: 'Brian Shin',
    team: 'Victorious Secret',
    twoMakes: [0],
    twoAttempts: [1],
    ftMakes: [4],
    ftAttempts: [4],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Charles Choe',
    team: 'Victorious Secret',
    twoMakes: [2],
    twoAttempts: [8],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Dylan Wong',
    team: 'Victorious Secret',
    twoMakes: [1],
    twoAttempts: [5],
    ftMakes: [3],
    ftAttempts: [4],
    threeMakes: [1],
    threeAttempts: [6],
    image: null
  },
  {
    name: 'Jin Park',
    team: 'Victorious Secret',
    twoMakes: [3],
    twoAttempts: [3],
    ftMakes: [0],
    ftAttempts: [1],
    threeMakes: [1],
    threeAttempts: [6],
    image: null
  },
  {
    name: 'Joseph Lee',
    team: 'Victorious Secret',
    twoMakes: [3],
    twoAttempts: [9],
    ftMakes: [0],
    ftAttempts: [1],
    threeMakes: [2],
    threeAttempts: [7],
    image: null
  },
  {
    name: 'Ju Pyung Chung',
    team: 'Victorious Secret',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Kevin Lee',
    team: 'Victorious Secret',
    twoMakes: [0],
    twoAttempts: [1],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Daniel Kurniawan',
    team: 'ABG (Anointed by God)',
    twoMakes: [2],
    twoAttempts: [3],
    ftMakes: [3],
    ftAttempts: [4],
    threeMakes: [3],
    threeAttempts: [11],
    image: null
  },
  {
    name: 'Sang Park',
    team: 'ABG (Anointed by God)',
    twoMakes: [1],
    twoAttempts: [3],
    ftMakes: [2],
    ftAttempts: [2],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Jacob Lee',
    team: 'ABG (Anointed by God)',
    twoMakes: [0],
    twoAttempts: [2],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Stephanie Kim',
    team: 'ABG (Anointed by God)',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Anthony Kim',
    team: 'ABG (Anointed by God)',
    twoMakes: [0],
    twoAttempts: [0],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Chase Boswell',
    team: 'ABG (Anointed by God)',
    twoMakes: [0],
    twoAttempts: [0],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Jonathan Lee',
    team: 'ABG (Anointed by God)',
    twoMakes: [2],
    twoAttempts: [6],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Joon Jang',
    team: 'ABG (Anointed by God)',
    twoMakes: [0],
    twoAttempts: [2],
    ftMakes: [2],
    ftAttempts: [6],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Andrew Pak',
    team: 'ABG (Anointed by God)',
    twoMakes: [1],
    twoAttempts: [2],
    ftMakes: [1],
    ftAttempts: [1],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'TJ Kim',
    team: 'ABG (Anointed by God)',
    twoMakes: [1],
    twoAttempts: [4],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [1],
    threeAttempts: [2],
    image: null
  },
  {
    name: 'Duggy Jeong',
    team: 'Better Call Gasol',
    twoMakes: [2],
    twoAttempts: [3],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [1],
    threeAttempts: [2],
    image: null
  },
  {
    name: 'Al Kao',
    team: 'Better Call Gasol',
    twoMakes: [0],
    twoAttempts: [8],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [1],
    threeAttempts: [2],
    image: null
  },
  {
    name: 'Doulos Kun',
    team: 'Better Call Gasol',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Ethan Hu',
    team: 'Better Call Gasol',
    twoMakes: [4],
    twoAttempts: [4],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [1],
    threeAttempts: [3],
    image: null
  },
  {
    name: 'Grace Lee',
    team: 'Better Call Gasol',
    twoMakes: [1],
    twoAttempts: [2],
    ftMakes: [1],
    ftAttempts: [2],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Jason Leung',
    team: 'Better Call Gasol',
    twoMakes: [2],
    twoAttempts: [4],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [5],
    image: null
  },
  {
    name: 'Jonathan Lee',
    team: 'Better Call Gasol',
    twoMakes: [1],
    twoAttempts: [5],
    ftMakes: [2],
    ftAttempts: [4],
    threeMakes: [2],
    threeAttempts: [3],
    image: null
  },
  {
    name: 'Maximus Chung',
    team: 'Better Call Gasol',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Nick Ryu',
    team: 'Better Call Gasol',
    twoMakes: [1],
    twoAttempts: [5],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Peter Yu',
    team: 'Better Call Gasol',
    twoMakes: [0],
    twoAttempts: [1],
    ftMakes: [2],
    ftAttempts: [2],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Eugene Lim',
    team: 'Run JHC',
    twoMakes: [0],
    twoAttempts: [0],
    ftMakes: [0],
    ftAttempts: [2],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Joshua Chung',
    team: 'Run JHC',
    twoMakes: [5],
    twoAttempts: [11],
    ftMakes: [9],
    ftAttempts: [10],
    threeMakes: [0],
    threeAttempts: [4],
    image: null
  },
  {
    name: 'David Moon',
    team: 'Run JHC',
    twoMakes: [2],
    twoAttempts: [3],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Eric Byun',
    team: 'Run JHC',
    twoMakes: [0],
    twoAttempts: [1],
    ftMakes: [1],
    ftAttempts: [2],
    threeMakes: [4],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Olivia DeRienzo',
    team: 'Run JHC',
    twoMakes: [1],
    twoAttempts: [3],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'John Huddleston',
    team: 'Run JHC',
    twoMakes: [0],
    twoAttempts: [0],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [2],
    threeAttempts: [4],
    image: null
  },
  {
    name: 'Jacob Joe',
    team: 'Run JHC',
    twoMakes: [0],
    twoAttempts: [0],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'James Lee',
    team: 'Run JHC',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Jay Lee',
    team: 'Run JHC',
    twoMakes: [1],
    twoAttempts: [2],
    ftMakes: [1],
    ftAttempts: [1],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Timothy Yu',
    team: 'Run JHC',
    twoMakes: [1],
    twoAttempts: [2],
    ftMakes: [4],
    ftAttempts: [6],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'James Lee',
    team: 'J-Walkers',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Allan Eckart',
    team: 'J-Walkers',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Gene Kum',
    team: 'J-Walkers',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Ian Byun',
    team: 'J-Walkers',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Joe Lee',
    team: 'J-Walkers',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Lauren Kong',
    team: 'J-Walkers',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Mike Su',
    team: 'J-Walkers',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Paul Kim',
    team: 'J-Walkers',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Raymond Kim',
    team: 'J-Walkers',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Timothy Jao',
    team: 'J-Walkers',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Jin Bae',
    team: 'Goon Squad',
    twoMakes: [5],
    twoAttempts: [14],
    ftMakes: [1],
    ftAttempts: [6],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Angeline Quach',
    team: 'Goon Squad',
    twoMakes: [1],
    twoAttempts: [1],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Benjamin Lee',
    team: 'Goon Squad',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'David Lee',
    team: 'Goon Squad',
    twoMakes: [1],
    twoAttempts: [2],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Insoo Kim',
    team: 'Goon Squad',
    twoMakes: [0],
    twoAttempts: [1],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Ivan Huang',
    team: 'Goon Squad',
    twoMakes: [2],
    twoAttempts: [4],
    ftMakes: [1],
    ftAttempts: [2],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Jeffrey Zhu',
    team: 'Goon Squad',
    twoMakes: [0],
    twoAttempts: [1],
    ftMakes: [1],
    ftAttempts: [6],
    threeMakes: [2],
    threeAttempts: [4],
    image: null
  },
  {
    name: 'Joon Kim',
    team: 'Goon Squad',
    twoMakes: [2],
    twoAttempts: [4],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Sil Han Jin',
    team: 'Goon Squad',
    twoMakes: [3],
    twoAttempts: [7],
    ftMakes: [1],
    ftAttempts: [5],
    threeMakes: [0],
    threeAttempts: [3],
    image: null
  },
  {
    name: 'Sung Cho',
    team: 'Goon Squad',
    twoMakes: [0],
    twoAttempts: [1],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [2],
    image: null
  },
  {
    name: 'Luke Bae',
    team: 'Crossovers For Christ',
    twoMakes: [3],
    twoAttempts: [4],
    ftMakes: [3],
    ftAttempts: [3],
    threeMakes: [0],
    threeAttempts: [3],
    image: null
  },
  {
    name: 'Aaron Kim',
    team: 'Crossovers For Christ',
    twoMakes: [2],
    twoAttempts: [3],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Jonathan Kim',
    team: 'Crossovers For Christ',
    twoMakes: [0],
    twoAttempts: [0],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [1],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Kevin Ra',
    team: 'Crossovers For Christ',
    twoMakes: [3],
    twoAttempts: [6],
    ftMakes: [0],
    ftAttempts: [1],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Kimberly Huang',
    team: 'Crossovers For Christ',
    twoMakes: [2],
    twoAttempts: [4],
    ftMakes: [1],
    ftAttempts: [2],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Michael Lin',
    team: 'Crossovers For Christ',
    twoMakes: [0],
    twoAttempts: [1],
    ftMakes: [0],
    ftAttempts: [2],
    threeMakes: [2],
    threeAttempts: [2],
    image: null
  },
  {
    name: 'Nate Lee',
    team: 'Crossovers For Christ',
    twoMakes: [0],
    twoAttempts: [0],
    ftMakes: [4],
    ftAttempts: [6],
    threeMakes: [1],
    threeAttempts: [2],
    image: null
  },
  {
    name: 'Paul You',
    team: 'Crossovers For Christ',
    twoMakes: [1],
    twoAttempts: [1],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Simon Hwang',
    team: 'Crossovers For Christ',
    twoMakes: [1],
    twoAttempts: [1],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'William Sohn',
    team: 'Crossovers For Christ',
    twoMakes: [0],
    twoAttempts: [1],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Max Lee',
    team: 'Team Noona',
    twoMakes: [1],
    twoAttempts: [2],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [4],
    image: null
  },
  {
    name: 'Andrew Chia',
    team: 'Team Noona',
    twoMakes: [0],
    twoAttempts: [0],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [2],
    image: null
  },
  {
    name: 'Chris Lee',
    team: 'Team Noona',
    twoMakes: [0],
    twoAttempts: [0],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Jay Won',
    team: 'Team Noona',
    twoMakes: [1],
    twoAttempts: [3],
    ftMakes: [0],
    ftAttempts: [2],
    threeMakes: [0],
    threeAttempts: [3],
    image: null
  },
  {
    name: 'Jinnyi Pak',
    team: 'Team Noona',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Justin Chung',
    team: 'Team Noona',
    twoMakes: [1],
    twoAttempts: [2],
    ftMakes: [3],
    ftAttempts: [3],
    threeMakes: [1],
    threeAttempts: [8],
    image: null
  },
  {
    name: 'Matthew Toma',
    team: 'Team Noona',
    twoMakes: [1],
    twoAttempts: [3],
    ftMakes: [0],
    ftAttempts: [1],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Michael Ruan',
    team: 'Team Noona',
    twoMakes: [0],
    twoAttempts: [1],
    ftMakes: [1],
    ftAttempts: [2],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Paul Ko',
    team: 'Team Noona',
    twoMakes: [2],
    twoAttempts: [4],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Tae Kim',
    team: 'Team Noona',
    twoMakes: [2],
    twoAttempts: [6],
    ftMakes: [0],
    ftAttempts: [2],
    threeMakes: [1],
    threeAttempts: [3],
    image: null
  },
  {
    name: 'Robin Choi',
    team: "Robin's Hood",
    twoMakes: [0],
    twoAttempts: [2],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [2],
    image: null
  },
  {
    name: 'Brandon Wang',
    team: "Robin's Hood",
    twoMakes: [0],
    twoAttempts: [4],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [3],
    image: null
  },
  {
    name: 'Jamie Chang',
    team: "Robin's Hood",
    twoMakes: [0],
    twoAttempts: [7],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [2],
    image: null
  },
  {
    name: 'Jonathan Mo',
    team: "Robin's Hood",
    twoMakes: [0],
    twoAttempts: [0],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Josh Nash',
    team: "Robin's Hood",
    twoMakes: [0],
    twoAttempts: [0],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [0],
    image: null
  },
  {
    name: 'Matthew Ikeda',
    team: "Robin's Hood",
    twoMakes: [1],
    twoAttempts: [1],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [1],
    threeAttempts: [5],
    image: null
  },
  {
    name: 'Patrick Suh',
    team: "Robin's Hood",
    twoMakes: [5],
    twoAttempts: [11],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [0],
    threeAttempts: [1],
    image: null
  },
  {
    name: 'Peter Bae',
    team: "Robin's Hood",
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Richard Yoon',
    team: "Robin's Hood",
    twoMakes: [2],
    twoAttempts: [2],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [1],
    threeAttempts: [5],
    image: null
  },
  {
    name: 'Zion No',
    team: "Robin's Hood",
    twoMakes: [3],
    twoAttempts: [9],
    ftMakes: [0],
    ftAttempts: [0],
    threeMakes: [2],
    threeAttempts: [7],
    image: null
  },
  {
    name: 'Timothy Chiu',
    team: 'Kick Your Boaz',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Andrew Lee',
    team: 'Kick Your Boaz',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Chris Kim',
    team: 'Kick Your Boaz',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Elliot Kim',
    team: 'Kick Your Boaz',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Jason Lee',
    team: 'Kick Your Boaz',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Jonathan Cui',
    team: 'Kick Your Boaz',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Josiah Bezet',
    team: 'Kick Your Boaz',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Michael Tay',
    team: 'Kick Your Boaz',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Ryan Chow',
    team: 'Kick Your Boaz',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  },
  {
    name: 'Stephen Han',
    team: 'Kick Your Boaz',
    twoMakes: [null],
    twoAttempts: [null],
    ftMakes: [null],
    ftAttempts: [null],
    threeMakes: [null],
    threeAttempts: [null],
    image: null
  }
];
