lista = []  

a = int(input())

n = input().split()
  

for i in n:
  i = int(i)
  lista.append(i)


menor = int(lista[0]) 
pos = 0 


for v in range(0, a): 
  if lista[v] < menor: 
    menor = lista[v] 
    pos = v

print("Menor valor:",menor)
print("Posicao:",pos)
