var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let segundos = Number(lines[0])

let horas = Math.floor(segundos / 3600);
segundos %= 3600;
let minutos = Math.floor(segundos / 60);
segundos %= 60;
console.log(`${horas}:${minutos}:${segundos}`)