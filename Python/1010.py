x = input().split()
z = input().split()

peca1, n_pecas, valor = x
peca2, n_pecas2, valor2 = z


soma = (int(n_pecas)*float(valor)+int(n_pecas2)*float(valor2))

print("VALOR A PAGAR: R$ %0.2f"%soma)