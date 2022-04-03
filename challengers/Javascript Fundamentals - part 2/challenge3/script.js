const mark = {
    fullName: "Mark Miller",
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi.toFixed(2);
    }
}

const john = {
    fullName: "Mark Miller",
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi.toFixed(2);
    }
}


if (mark.calcBMI > john.calcBMI) {
    console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI})`)
} else if (john.calcBMI > mark.calcBMI) {
    console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI})`)
} else {
    console.log("John and Mark have the same BMI")
}