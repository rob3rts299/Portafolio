#list comprehension => a list compact and easier to read tha traditional loop
            #   [Expression for value in iterable if condition]

#doubles = []

#for x in range(1,11):#va realizar el loop un total de 10 veces
#    doubles.append(x * 2)# va a ir agregando dentro del arreglo doubles los numeros o posicion de x, y se lo ira multiplicando la posicion por 2

#print(doubles)
        #Expression for value in iterable if condition
#doubles = [x * 2 for x in range(1,11)]#en este caso no necesitamos o usamos la funcion if
#square = [z * z for z in range(1,11)]

#print(square)

#fruits = ["apple", "banana","coconut","orange"] #se ouede hacer en arreglos
#fruits = [fruit.upper() for fruit in fruits]
#fruits = [fruit.upper() for fruit in ["apple", "banana","coconut","orange"]]#otra forma de simplificarlo

#print(fruits)

#numbers = [1, -2, 3,-4,5,-6,8,10,-11]
            # Lo que retornara | for lo que se va a iterar (variable) | if la condicional que se tendra que cumplir
#positive_nums= [num for num in numbers if num>=0]
#negative_nums= [num for num in numbers if num<=0]
#even_nums = [num for num in numbers if num % 2 == 0]
#odd_nums = [num for num in numbers if num % 2 == 1]
#print(odd_nums)

grades = [85,52,79,42,90,56,30,35]

passing_grades = [grade for grade in grades if grade >= 60]

print(passing_grades)