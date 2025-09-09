a = input().split()
#3.0 4.0 5.2
#print("%0.3f"%trap)
pi = 3.14159

A = float(a[0])
B = float(a[1])
C = float(a[2])


trian = (A*C)/2
circ = pi*(C*C)
trap = ((A+B)*C)/2
quadr = B*B
reta = A*B

print("TRIANGULO: %0.3f"%trian)
print("CIRCULO: %0.3f"%circ)
print("TRAPEZIO: %0.3f"%trap)
print("QUADRADO: %0.3f"%quadr)
print("RETANGULO: %0.3f"%reta)
