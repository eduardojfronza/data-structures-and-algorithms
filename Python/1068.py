while True:
    try:
        entrada = input()
        auxiliar = 0
        for i in range(len(entrada)):
            if (entrada[i] == '('):
                auxiliar = auxiliar+1
            elif (entrada[i] == ')'):
                auxiliar = auxiliar-1
            if (auxiliar < 0):
                break
        if (auxiliar != 0):
            print("incorrect")
        else:
            print("correct")
            
    except(EOFError):
        break