"use strict";
function addFunc(x, ...y) {
    let sum = 0;
    for (let i = 0; i < y.length; i++) {
        sum = sum + y[i];
    }
    return x + sum;
}
let func = addFunc(2, 3, 4, 5, 6, 7, 8, 9);
document.write(`<h3> sum of variables using rest operator ${func} </h3>`);
