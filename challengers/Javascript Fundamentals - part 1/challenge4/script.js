const bill = Number(prompt("Insert your bill"));

const tip = bill >= 50 && bill <= 300
    ? bill * 0.15
    : bill * 0.20;

alert(`The bill was ${bill}, the tip was ${tip}, and total value ${bill + tip}`);