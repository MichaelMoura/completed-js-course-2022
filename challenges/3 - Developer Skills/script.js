// Remember, we're gonna use strict mode in all scripts now!
'use strict';

function printForecast(arr = []) {
    arr.forEach((value, index) => console.log(`${value}°C in ${index + 1} days`));
}

printForecast([17, 21, 23])