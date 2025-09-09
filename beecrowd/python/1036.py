valor = input().split()
A,B,C = valor

A = float(A)
B = float(B)
C = float(C)

delta = ((B**2) - 4*A*C)

if delta <0 or A==0:
 print("Impossivel calcular")

else:
 x_negativo =(-B+delta**(1/2))/(2*A)
 x_positivo = (-B-delta**(1/2))/(2*A)

 print("R1 = %.5f" %x_negativo)
 print("R2 = %.5f" %x_positivo)