n = int(input())
for x in range(0,n):
  a,b = input().split()
 
  len_a = len(a)
  len_b = len(b)

  maior = 0

  if len_a > len_b:
    maior = len_a
  else:
    maior = len_b

  t = ""

  for i in range(0,maior):
    if len(a) > i:
      t += a[i]
    if len(b) > i:
      t += b[i]

  print(t)