var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [x,y] = input.split(' ').map(n => parseInt(n));

if (x==1){
    soma = y*4
    console.log(`Total: R$ ${soma.toFixed(2)}`)
}else if(x==2){
     soma = y*4.5
    console.log(`Total: R$ ${soma.toFixed(2)}`)
}else if(x==3){
     soma = y*5
    console.log(`Total: R$ ${soma.toFixed(2)}`)
}else if(x==4){
     soma = y*2
    console.log(`Total: R$ ${soma.toFixed(2)}`)
}else if(x==5){
     soma = y*1.5   
    console.log(`Total: R$ ${soma.toFixed(2)}`)
}