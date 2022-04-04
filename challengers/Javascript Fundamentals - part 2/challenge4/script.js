const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTips(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const totalValue = tip + bill;
    return { tip, totalValue };
}

for (let i = 0; i < bills.length; i++) {
    const { tip, totalValue } = calcTips(bills[i]);
    tips.push(tip);
    totals.push(totalValue);
};

const calcAvgTips = tips.reduce((total, currentValue, index) => {
    return index === tips.length - 1 ? total + currentValue + tips.length : total + currentValue;
}, 0)

const calcSumTotals = totals.reduce((total, currentValue) => { return total + currentValue }, 0)

console.log(calcSumTotals)
console.log(calcAvgTips)