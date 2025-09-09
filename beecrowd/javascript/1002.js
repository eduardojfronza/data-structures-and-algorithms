var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = Number(lines[0]);

let area = 3.14159*raio**2

console.log(`A=${area.toFixed(4)}`)