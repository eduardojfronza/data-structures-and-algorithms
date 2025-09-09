var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let R = lines[0]

let volume = (4.0/3)*3.14159*R**3

console.log(`VOLUME = ${volume.toFixed(3)}`)