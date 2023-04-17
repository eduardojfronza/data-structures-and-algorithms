variavel = input().split()

A = int(variavel[0])
B = int(variavel[1])
C = int(variavel[2])

if A<B and A<C:
 if B<C:
    print(A)
    print(B)
    print(C)
 elif C<B:
    print(A)
    print(C)
    print(B)

if B<A and B<C:
 if A<C:
    print(B)
    print(A)
    print(C)
 elif C<A:
    print(B)
    print(C)
    print(A)
      

if C<A and C<B:
 if A<B:
    print(C)
    print(A)
    print(B)
 elif B<A:
    print(C)
    print(B)
    print(A)

print("")
print(A)
print(B)
print(C)
  