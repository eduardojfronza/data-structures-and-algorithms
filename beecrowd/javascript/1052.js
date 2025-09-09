var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let mes = Number(lines[0])

if (mes === 1) {console.log("January")}
if (mes === 2) {console.log("February")}
if (mes === 3) {console.log("March")}
if (mes === 4) {console.log("April")}
if (mes === 5) {console.log("May")}
if (mes === 6) {console.log("June")}
if (mes === 7) {console.log("July")}
if (mes === 8) {console.log("August")}
if (mes === 9) {console.log("September")}
if (mes === 10) {console.log("October")}
if (mes === 11) {console.log("November")}
if (mes === 12) {console.log("December")}