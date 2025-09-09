var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = String(lines[0])
let salarioFixo = Number(lines[1])
let vendas = Number(lines[2])

let total = ((vendas*0.15)+salarioFixo)

console.log(`TOTAL = R$ ${total.toFixed(2)}`)