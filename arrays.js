"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let arr:Array<number> = [];  // Two ways of declaring the array
var arr = [];
function sum(array) {
    for (var i = 0; i < 10; i++) {
        array.push(i);
    }
    console.log(array);
}
sum(arr);
