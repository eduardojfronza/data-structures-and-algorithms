while True:
  n = int(input())

  if n == 0 :
        break
  lista1 =[]
  lista2 = []

  for i in range(n):
      lista1.append(i+1)

  for j in range(n-1):
      y = lista1[0]
      lista1.remove(y)
      lista2.append(y)
      x = lista1[0]
      lista1.append(x)
      lista1.remove(x)

  print("Discarded cards:" , str(lista2).replace("[","").replace("]",""))
  print("Remaining card:" , str(lista1).replace("[","").replace("]",""))