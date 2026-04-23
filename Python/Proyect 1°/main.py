##Los comentarios se realizan con el signo #
#print("vamoo a ver si sale esto.")

##Variables:

##nombre unico y asignacion mediante el signo = 
#strings
#first_name = "Broo"
#second_name = "old"
#dr = "Andy Gonzales"
#food = "lomito"

#print(first_name)

##uso de f-string => es una manera de agregar texto a la variable.
#print(f"hello {first_name} & {second_name}")
#print(f"i like {food}")

##Integers => Enteros

#age = 25

#print(f"you are {age} years old")

#float

#price = 19.99
#prom = 9,85
#print (f"the price is ${price}")


##boolean | Verdadero o falso

#is_student = True
#
#print(f"are you is student?: {is_student}")
#
#if is_student:
#    print("you are a student")
#    print (f"Hello {first_name} {second_name};\n age: {age};\n prom: {prom}")
#else:
#    print("You are NOT a student")
#    print (f"Hello dr: {dr}; age: {age+3}; price for consult {price}")

##Funtion str (); int(); float(); bool()

#name="roberto pereyra"
#age=26
#gpa=7.68
#is_student = True

##Se puede deducir que tipo de variable es con la function type()
#print(type(gpa))

##convertir los tipos de variables

#gpa = int(gpa)
#print(gpa,"\n", type(gpa))

#age = float(age)
#print(age,"\n", type(age))

#age = str(age)
#print(age,"\n", type(age))

#name = bool(name)
#print(name,"\n", type(name))

##input
##Pide valores al usuario, es un metodo mas didactico con el usuario

name = input("What your name?: ")
age = int(input("how old are you?: "))#de esta manera al momento de tomar valores del usuarios lo transformamos directamente en enteros
print(f"Hello {name}! \n you are {age} years old.")
print(f"HAPPY BIRTHDAY!! \n {name}, you birthday {age+1}")#Con esto podemos demostrar el uso de string y sumas de ints

