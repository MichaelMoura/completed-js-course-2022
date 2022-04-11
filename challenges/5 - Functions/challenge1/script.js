'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const value = Number(prompt(`${this.question}\n${this.options.join("\n")}`).trim());

        if (value > 3) {
            alert("The value cannot be greater than 3");
            alert(`Select between the options \n ${this.options.toString()}`)
            this.registerNewAnswer();
        }

        typeof value === "number" && value < this.answers.length && this.answers[value]++;



    },
    displayResults(type = "") {
        if (typeof type === "string") {
            return console.log("Poll results are ".concat(...this.answers))
        }

        return console.log(...type)
    }
};

const registerAnswer = poll.registerNewAnswer;

document.querySelector("button.poll").addEventListener("click", registerAnswer.bind(poll))