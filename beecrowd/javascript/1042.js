var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(n => Number(n));
let normal = [...lines]
let menor = lines.sort(function(a,b){return a-b})
console.log(`${menor[0]}\n${menor[1]}\n${menor[2]}\n`)
console.log(`${normal[0]}\n${normal[1]}\n${normal[2]}`)
