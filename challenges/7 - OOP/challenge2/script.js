'use strict';

class CarlCL {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}km/h`)
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} brake at ${this.speed}km/h`)
    }

    get speedUs() {
        return this.speed / 1.6;
    }

    set speedUs(speed) {
        this.speed = speed * 1.6;
    }
}