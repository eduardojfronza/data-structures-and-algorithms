var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a,b] = lines.shift().split(' ').map((x) => parseFloat(x))
if ( a % b == 0 || b % a == 0) {
    console.log("Sao Multiplos")
}
else {
    console.log("Nao sao Multiplos")
}