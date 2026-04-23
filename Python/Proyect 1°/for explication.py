                #range 1,11,2  El primero de donde comienza el conte, segundo donde termina, tercero saltos del conteo
#for x in reversed(range(1,11,2)): #de esta manera el conteo es al revez,
#    print(x)

#print("HAPPY NEW YOUR!!")

#credit_card = "1245-2352-3244-2221"

#for x in credit_card:
#    print(x)

for x in range(1,21):# forma de saltearse un numero o un valor
    if x == 13:
        continue#si queremos terminar el bucle hasta una iteracion usamos break
    else:
        print(x)
