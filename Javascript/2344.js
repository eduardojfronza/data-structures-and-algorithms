var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines[0])

if (a >= 86 && a<=100) {console.log("A")}
if (a > 61 && a<85) {console.log("B")}
if (a > 36  && a<60) {console.log("C")}
if (a >1 && a<35) {console.log("D")}
if (a === 0) {console.log("E")}