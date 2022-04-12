'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((value) => {
  value.recommendedFood = value.weight ** 0.75 * 28;
})

const dogSarah = dogs.find(value => value.owners.includes("Sarah"));

const isUnderWeight = dogSarah.curFood < (dogSarah.recommendedFood * 0.90);
const isOverWeight = dogSarah.curFood > (dogSarah.recommendedFood * 1.10);

console.log(dogSarah.recommendedFood)
console.log(dogSarah.curFood)

if (isOverWeight && !isUnderWeight) {
  console.log(`The dog Sarah is overWeight`);
} else if (isUnderWeight && !isOverWeight) {
  console.log(`The dog Sarah is underweight`);
} else {
  console.log("The dog Sarah is average")
}


const ownersEatTooMuch = dogs.filter(value => value.curFood > (value.recommendedFood * 1.10)).flatMap(dog => dog.owners)
const ownersEatTooLittle = dogs.filter(value => value.curFood < (value.recommendedFood * 0.90)).flatMap(dog => dog.owners)

const dogsAreOverWeight = dogs.filter(value => value.curFood > (value.recommendedFood * 1.10));
const dogsAreUnderWeight = dogs.filter(value => value.curFood < (value.recommendedFood * 0.90));

dogsAreOverWeight.forEach(value => console.log(`${(value.owners).join(" and ")}'s dogs eat too much!`))
dogsAreUnderWeight.forEach(value => console.log(`${(value.owners).join(" and ")}'s dogs eat too little!`))

console.log(dogs.some(value => value.curFood === Math.trunc(value.recommendedFood)));

const checkEatingOkay = dog =>
  dog.curFood > (dog.recommendedFood * 1.1) && dog.curFood < (dog.recommendedFood * 0.9);

console.log(dogs.some(checkEatingOkay));

const dogsAreAverage = dogs.filter(checkEatingOkay);

console.log(dogsAreAverage);

