let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);