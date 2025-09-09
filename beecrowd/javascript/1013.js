var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);
let maiorAB = (a+b+Math.abs(a-b))/2

if ( c > maiorAB) {console.log(`${c} eh o maior`)} 
else {console.log(`${maiorAB} eh o maior`)}