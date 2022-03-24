let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
    console.log(`
        Mark's BMI is higher than John's! \n
        Mark's BMI(${markBMI.toFixed(2)}) is higher than John's 
        (${johnBMI.toFixed(2)})
    `);
} else {
    console.log(`
        John's BMI is higher than Mark's! \n
        John's BMI(${johnBMI.toFixed(2)}) is higher than Mark's 
        (${markBMI.toFixed(2)})
    `);
}