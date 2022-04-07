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

const gkPlayerOne = "Neuer";
const fieldPlayersOne = ['Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski'];

const gkPlayerTwo = "Burki";
const fieldPlayersTwo = [
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
]

const allPlayers = [
  gkPlayerOne, ...fieldPlayersOne,
  gkPlayerTwo, ...fieldPlayersTwo
]

const playersOneFinal = [
  gkPlayerOne,
  ...fieldPlayersOne,
  "Thiago",
  "Coutinho",
  "Perisic"
]

const { team1, x: draw, team2 } = game.odds

const printGoals = async function (...parameter) {
  parameter.forEach((player, index) => {
    setTimeout(() => console.log(` Goaaaaaaaaaaaaaaaaaaaal!!! ${player} - ${index + 1} x 0`), 2000 * (index + 1))
  })

  setTimeout(() => console.log(`${parameter.length} goals were scored`), 2000 * (parameter.length + 1))
}

setTimeout(() => console.log("Welcome to today's match"), 1000);
printGoals(...game.scored)

team1 < team2 && setTimeout(() => console.log("Team 2 wins"), (game.scored.length + 2) * 2000)
