#arreglo con []
#fruits = ["apple", "orange", "banana", "coconut","das"]

#print(fruits[::2])#comienza desde la posicion 0 y va saltando 2 a 2

#for fruit in fruits:
    #print(fruit,end=" ")

#print(dir(fruits)) #pedir ayuda print(help(fruits))
#print(len(fruits))#la cantidad de elementos que tiene el arreglo
#print("apple" in fruits)#muestra si el string esta dentro de la cadena.


#for fruit in fruits:
#    print(fruit,end=" ")
#print(" ")
#fruits[2] = "pineapple"#sobreescribimos un nuevo valor

#for fruit in fruits:
#    print(fruit,end=" ")

#fruits.append("new fruit")#se agrega un nuevo elemento, al final
#print(fruits)

#fruits.remove("banana")#elimina un elemento
#print(fruits)

#fruits.insert(5,"banana")#inserta un nuevo valor en cualquier indice del arreglo
#print(fruits)

#fruits.sort()#ordena el arreglo e manera alfabetica
#print(fruits)

#fruits.reverse()#pone el arreglo al revez
#fruits.clear()#limpia el arreglo

#print(fruits.index("apple"))

#print(fruits.count("banana"))#cuenta cuantas veces esta en el arreglo   

##----SETS
##fruits = {"apple", "orange", "banana", "coconut","das"}##se encuentran en el arreglo pero no estan en orden, eso lo diferencia de las [], no permite duplicados ni modificar los valores.

#print(fruits[0])##no hay orden por lo tanto saldra error

##fruits.add("pineapple")## se agrega en orden aleatorio
#podemos hacer los mismos metodos que en el caso de los arreglos
##print(fruits)

###--------tuple

fruits = ("apple", "orange", "banana", "coconut","das")#la ventaja es que son mas rapido que los arreglos, se pueden duplicar y no modificar
#print(dir(fruits)) #pedir ayuda print(help(fruits))
#se sigue usando las mismas formas de contar (len), se puede manejar los index y count

for fruit in fruits:
    print(fruit)