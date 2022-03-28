const dolphinsFirstGame = 96;
const dolphinsSecondGame = 108;
const dolphinsThirdGame = 89;

const koalasFirstGame = 88;
const koalasSecondGame = 91;
const koalasThirdGame = 110;

const dolphinsAvg = (dolphinsFirstGame + dolphinsSecondGame + dolphinsThirdGame) / 3;
const koalasAvg = (koalasFirstGame + koalasSecondGame + koalasThirdGame) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("Dolphins have a higher average than Koalas");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 1000) {
    console.log("Koalas have a higher average than Dolphins");
} else {
    console.log("Both have the same point average");
}