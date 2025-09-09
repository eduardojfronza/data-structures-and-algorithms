l = []
n = []
s = []
o = []
listaf= []

while True:

  p = input()
  
  if p == "0":
    break
  
  if p == "-1" or p == "-2" or p == "-3" or p == "-4":
    v = p
    continue

  if v == "-4":
    l.append(p)
    
  elif v == "-3":
    n.append(p)
    
  elif v == "-2":
    s.append(p)
    
  elif v == "-1":
    o.append(p)

soma = len(n) + len(s) + len(l) + len(o)


for i in range(soma):
  if len(o) > 0:
    listaf.append(o[0])
    o.remove(o[0])
  if len(n) > 0:
    listaf.append(n[0])
    n.remove(n[0])
  if len(s) > 0:
    listaf.append(s[0])
    s.remove(s[0])
  if len(l) > 0:
    listaf.append(l[0])
    l.remove(l[0])

print(*listaf)