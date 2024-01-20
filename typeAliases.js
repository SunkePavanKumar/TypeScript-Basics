"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calArea(data) {
    var len = data.len, breadth = data.breadth, height = data.height;
    return len * breadth * height;
}
var area = calArea({ len: 100, breadth: 90, height: 32 });
console.log(area);
