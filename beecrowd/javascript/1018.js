var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());   
// floor retorna o menor numero inteiro do parametro
console.log(n)
console.log(`${Math.floor(n/100)} nota(s) de R$ 100,00`)
n %= 100
console.log(`${Math.floor(n/50)} nota(s) de R$ 50,00`)
n %= 50
console.log(`${Math.floor(n/20)} nota(s) de R$ 20,00`)
n %= 20
console.log(`${Math.floor(n/10)} nota(s) de R$ 10,00`)
n %= 10
console.log(`${Math.floor(n/5)} nota(s) de R$ 5,00`)
n %= 5
console.log(`${Math.floor(n/2)} nota(s) de R$ 2,00`)
n %= 2
console.log(`${Math.floor(n/1)} nota(s) de R$ 1,00`)
