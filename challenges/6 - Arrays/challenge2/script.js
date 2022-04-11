'use strict';


function calcAverageHumanAge(dogsAge) {
  const dogsInHumanAge = dogsAge.map(value => value <= 2 ? value * 2 : 16 + value * 4);

  const adultDogs = dogsInHumanAge.filter(value => value >= 18);

  const averageAdultDogs = adultDogs.reduce((acumulator, value, index) => {
    acumulator += value;
    return index == adultDogs.length - 1 ? acumulator / (adultDogs.length - 1) : acumulator;
  }, 0)

  console.log("Dogs in the human age " + dogsInHumanAge)
  console.log("Adults dogs only " + adultDogs)
  console.log("Average of adults dogs " + averageAdultDogs + " years old")
}


calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])