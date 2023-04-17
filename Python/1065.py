pares = []
lines = []
for i in range(5):
    a = int(input())
    lines.append(a)
    
for j in range(len(lines)):
    if (lines[j] % 2 == 0):
        pares.append(j) 
print(str(len(pares)) + " valores pares")