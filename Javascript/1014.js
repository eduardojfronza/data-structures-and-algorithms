var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = lines[0]
let b = lines[1]

let consumo = a/b

console.log(`${consumo.toFixed(3)} km/l`)