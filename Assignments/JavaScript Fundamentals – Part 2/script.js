//first assignment - functions

function describeContry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`)
}

describeContry("Brazil", 212000000, "Brasilia");
describeContry("Portugal", 10310000, "Lisbon");
describeContry("Germany", 83240000, "Berlin");

//second assignment - function declarations vs expressions

function percentageOfWord1(population) {
    return (population / 7900000000) * 100;
}

console.log(percentageOfWord1(340034034));
console.log(percentageOfWord1(200034034));
console.log(percentageOfWord1(490034034));

const percentageOfWord2 = function (population) {
    return (population / 7900000000) * 100;
}

console.log(percentageOfWord1(230034034));
console.log(percentageOfWord1(41034034));
console.log(percentageOfWord1(830034034));

//third assignment - arrow function

const percentageOfWord3 = population => (population / 7900000000) * 100;

//fourth assignment - functions calling outher functions

function describePopulation(country, population) {
    const percentage = percentageOfWord1(population);

    return `${country} has ${population} million people, which is about ${percentage.toFixed(2)}% of the world`;
}

console.log(describePopulation("Brazil", 233000000));

//fifth assignment - introduce to Arrays
const populations = new Array(213000000, 86000000, 10000000, 329500000);

console.log(populations.length == 4);

const populationPercentage = populations.map(population => percentageOfWord1(population));

console.log(populationPercentage);

//sixth assignment = introduction to Objects
const myCountry = {
    country: "Brazil",
    language: "Portuguese",
    capital: "Brasilia",
    population: populations[0],
    neighbours: ["Argentina", "Chile", "Uruguay", "Peru"]
};

//seventh assignment - dot vs bracket notation
console.log(`${myCountry.country} has ${myCountry.population} million finnish-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry.population += 1000000;
myCountry["population"] -= 2000000;

//eighth assignment - Object Methods

myCountry.describe = function () {
    return (`${this.country} has ${this.population} million finnish-speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
}

console.log(myCountry.describe());

myCountry.checkIsland = function () {
    return this.neighbours.length ? true : false;
}

console.log(myCountry.checkIsland())

//ninth assignment - the for loop

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`)
}
