idade_dias = int(input())

ano = idade_dias // 365
idade_dias = idade_dias - ano*365

mes = idade_dias // 30
idade_dias = idade_dias - mes*30

dia = idade_dias

print(ano,"ano(s)")
print(mes,"mes(es)")
print(dia,"dia(s)")
