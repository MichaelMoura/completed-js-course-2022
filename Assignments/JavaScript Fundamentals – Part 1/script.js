//first assignment
const country = "Brazil";
const continent = "South America";
let population = 212600000.00;

//second assignment
const isIsland = false;
let language;

// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

//third assignment - let, const and var
language = "portuguese";

/* country = "Portugal"; */

//forth assignment - Basic operators

const halfPopulation = population / 2;
population++;
const isBiggerThanFinland = population > 6000000;
const isBiggerThanAverage = population > 33000000;
const description = "Portugal is in Europe, and its 11 milion people speak portuguese";

//fifth assignment - taking decisions (control structere)
if (population > 33000000) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is below average`)
};

//sixth assignment - types conversion and coercion
console.log("coersion and conversion")
console.log("9" - "5");
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//seventh assignment - equality operators
// const numNeighbours = Number(prompt("How many neighbour countries does your country have"));

// if (numNeighbours === 1) {
//     console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//     console.log("more then 1 border");
// } else {
//     console.log("No borders");
// }

//eighth assignment - Logical Operators

if (population < 50000000 && language === "English") {
    console.log("You should live in Brazil :)")
} else {
    console.log("Brazil does not meet your criteria :(")
}

//nineth assignment - the switch statement

const yourLanguage = prompt("What is your language?").trim().toLocaleLowerCase()

switch (yourLanguage) {
    case "chinese":
    case "mandarim":
        console.log("Most number of native speakers!")
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindu":
        console.log("Number 4")
        break
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D")

}

//tenth assignment - ternary operator


population > 33000000
    ? console.log("Brazil population is above average")
    : console.log("Brazil popoulation is below average")