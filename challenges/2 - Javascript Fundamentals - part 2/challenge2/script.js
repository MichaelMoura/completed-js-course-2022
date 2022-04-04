function calcTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

    return tip;
}

const bills = [125, 555, 44];

const total = bills.map(bill => calcTip(bill))

const sum = total.reduce(
    (acumulator, currentValue, index) => {
        console.log(acumulator);
        return acumulator + currentValue + bills[index]
    }, 0)

console.log(sum);