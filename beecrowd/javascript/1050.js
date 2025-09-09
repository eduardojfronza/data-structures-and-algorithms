var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a] = lines.map((x) => parseFloat(x))

if (a == 11){
    console.log("Sao Paulo")
} else if(a == 61) {
    console.log("Brasilia")
}else if(a == 71) {
    console.log("Salvador")
}else if(a == 21) {
    console.log("Rio de Janeiro")
}
else if(a == 32) {
    console.log("Juiz de Fora")
}
else if(a == 19) {
    console.log("Campinas")
}
else if(a == 27) {
    console.log("Vitoria")
}else if(a == 31) {
    console.log("Belo Horizonte")
} else {
    console.log("DDD nao cadastrado")
}