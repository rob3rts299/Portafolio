

#def net_price(list_price, discount=0, tax=0):#podemos asignar los valores directamente en la declaracion de la funcion (list_price, discount=0, tax=0.05)
#    return list_price * (1 - discount) * (1 + tax)


#print(net_price(500, 0 ,0.05))#si mandamos los valores dentro de la misma declaracion nos ahorramos enviarlos aca pero si colocamos valores aca, toman prioridad
#print(net_price(500, 0.1 ,0.05))

import time

def count(end, start=0):#para poder darle valores a los atributos dentro de la definicion de la funcion estos tienen que ir al ultimo
    for x in range(start, end+1):
        print(x)
        time.sleep(1)
    print("DONE!")

#count(10)
count(15,20)#cambia el valor asignado, porque posee prioridad (1-Positional, 2-DEFAULT, 3-Keyword, 4-arbitrary)


