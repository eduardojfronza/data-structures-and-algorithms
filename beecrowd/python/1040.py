a = input().split()

N1 = float(a[0])
N2 = float(a[1])
N3 = float(a[2])
N4 = float(a[3])

media = (N1*2+N2*3+N3*4+N4*1) / 10

print("Media: %.1f"%media)

if media >= 7.0:
  print("Aluno aprovado.")

if media < 5.0:
  print("Aluno reprovado.")

if media >= 5.0 and media <= 6.9:
  print("Aluno em exame.")

  nota_exame = float(input())
  print("Nota do exame: %.1f" %nota_exame)
  media_final = (media+nota_exame) / 2
  
  if media_final >= 5.0:
    print("Aluno aprovado.")
    print("Media final: %.1f"%media_final)

  else:
    print("Aluno reprovado.")
    print("Media final: %.1f"%media_final)