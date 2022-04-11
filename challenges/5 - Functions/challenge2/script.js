'use strict';

let isColored = false;

(function () {
    const header = document.querySelector('h1');

    header.addEventListener("click", () => {
        !isColored ? header.style.color = 'blue' : header.style.color = 'white';
        !isColored ? isColored = true : isColored = false;
    })
})();

[1, 2, 3].at()