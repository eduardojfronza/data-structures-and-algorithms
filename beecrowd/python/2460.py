n = int(input())
m = input().split()
p = int(input())
q = input().split()


for i in range(p):
  m.remove(q[i])

print(*m)