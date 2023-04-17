var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

x = Number(lines[0])

if (x >= 0 && x <= 25.0) { 
  console.log('Intervalo [0,25]') 
} else if (x > 25.0 && x <= 50.0) { 
  console.log('Intervalo (25,50]') 
} else if (x > 50.0 && x <= 75.0) { 
  console.log('Intervalo (50,75]') 
} else if (x > 75.0 && x <= 100) { 
  console.log('Intervalo (75,100]') 
} else { 
  console.log('Fora de intervalo') 
}





