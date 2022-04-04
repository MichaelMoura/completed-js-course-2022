
function calcAverage(firstScore, secondScore, thirdScore) {
    return (firstScore + secondScore + thirdScore) / 3;
}

function checkWinner(dolphins, koalas) {
    const doubleAvgDolphins = dolphins * 2;
    const doubleAvgKoalas = koalas * 2;

    let winner;

    if (dolphins >= doubleAvgKoalas) {
        winner = `Dolphins win 🏆 (${dolphins} vs. ${koalas})`;
    } else if (koalas >= doubleAvgDolphins) {
        winner = `Koalas win 🏆 (${koalas} vs. ${dolphins})`;
    } else {
        winner = "No teams wins";
    }

    return winner;
}

const dolphinsAvg = calcAverage(44, 23, 71);
const koalasAvg = calcAverage(65, 54, 49);

console.log(checkWinner(dolphinsAvg, koalasAvg));