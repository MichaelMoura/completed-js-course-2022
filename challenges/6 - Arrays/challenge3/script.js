'use strict';


function calcAverageHumanAge(dogsAge) {
  const avgDogs = dogsAge.map(value => value <= 2 ? value * 2 : 16 + value * 4).filter(value => value >= 18).reduce((acumulator, value, index, arr) => {
    return acumulator + value / arr.length
  }, 0);

  console.log(avgDogs)
}


calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])