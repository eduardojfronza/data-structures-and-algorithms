var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = Number(lines[0])
let B = Number(lines[1])

let soma = A+B

console.log(`SOMA = ${soma}`)