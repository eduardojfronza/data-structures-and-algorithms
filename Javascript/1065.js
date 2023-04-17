var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').filter(Boolean).map(l => parseInt(l));

pares = []
for (let i = 0; i<lines.length; i++){
    if (lines[i] % 2 === 0) {
        pares.push(lines[i])
    }
}
 console.log(`${pares.length} valores pares`)