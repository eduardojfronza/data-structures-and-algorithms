a,b,c = map(float, input().split())

if a < b + c and b < a + c and c < a + b:
    p = a+b+c
    print("Perimetro = %0.1f"%p)
else:
    ar = ((a+b)/2.0)*c
    print("Area = %0.1f"%ar)