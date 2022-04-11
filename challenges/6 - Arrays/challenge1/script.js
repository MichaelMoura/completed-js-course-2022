'use strict';

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const printDogs = dogs => {
  [...dogs].forEach((value, index) => {
    return value >= 3
      ? console.log(`Dog number ${index} is an adult, and is ${value} years old 🐕`)
      : console.log(`Dog number ${index} is still a puppy 🐶`)
  })
}

const checkDogs = (julia, kate) => {
  const onlyDogs = julia.slice(1, 3)

  printDogs([...onlyDogs, ...kate])
}

checkDogs(dogsJulia, dogsKate);
