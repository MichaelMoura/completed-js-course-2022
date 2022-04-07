'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const odds = Object.values(game.odds)

const printGoals = () => {
  game.scored.map((player, index) => console.log(`Goal ${index + 1}:${player}`));
}

const calcAvgOdd = () => {
  const sumOdss = odds.reduce((initialValue, currentValue) => { return initialValue + currentValue }, 0)
  console.log(`The avegare odds of the match is ${(sumOdss / odds.length).toFixed(2)}`);
}

const printOdds = () => {
  const { team1, draws = "draws", team2 } = game;

  console.log(`odd of victory ${team1}: ${odds[0]}`)
  console.log(`odd of ${draws}: ${odds[1]}`)
  console.log(`odd of victory ${team2}: ${odds[2]}`)

}

const printScorers = () => {
  const value = game.scored.reduce((acc, value) => {
    return !acc[value] ? { ...acc, [value]: 1 } : { ...acc, [value]: acc[value] + 1 }
  }, {})
  return console.log(value)
}

printGoals();
calcAvgOdd();
printOdds();
printScorers()
