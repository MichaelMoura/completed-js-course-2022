'use strict';

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];

console.log(events)
//2
gameEvents.delete(64);

//3
const time = [...gameEvents.keys()].pop();
const avgEvent = time / gameEvents.size;
console.log(`An event happened, on average, every ${avgEvent} minutes`)

//4
gameEvents.forEach((value, key) => key < 45
  ?
  console.log(`[FIRST HALF]${key}: ${value}`)
  :
  console.log(`[SECOND HALF]${key}: ${value}`)
)