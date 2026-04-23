import random

#print(help(random))#sacar toda la informacion de la libreria random

#number = random.randint(1,6)#asigna un valor aleatorio de entre el rango establecido dentro de los parentesis
#low = 1
#high = 100

#number = random.randint(low, high)#se puede agregar los rangos con variables, tener en cuenta!!!!
# number = random.random()#Genera valores aleatorios de punto flotante.

#print(number)

#piedra, papel o tijera
#options = ("rock","paper","scissors ")
#option = random.choice(options)

card = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
random.shuffle(card)#ubica aleatoriamente los valores del arreglo // en el ejemplo hace la ilusion de barajar cartas

print(card)