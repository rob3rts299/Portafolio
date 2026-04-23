#membership operators => "in" & "not in"
#word = "APPLE"

#letter = input("Guess a letter in the secret word: ")

#if letter in word:#El in en un if va a devolver un valor booleano de verdadero o falso.
#    print(f"There is a {letter}")#Imprimira esto si la letra que se ingresa esta dentro de la palabra por ejemplo: A esta en "APPLE", u no entraria
#else:
 #   print(f"{letter} was not found")

#if letter not in word:#las condiciones se invierten al tener el condicional not

#    print(f"{letter} was not found")
#else:
#    print(f"There is a {letter}")


#students = {"roberto","patrick","broo","agus"}

#student = input("Enter the name of a student: ")#.capitalize() para colocar la primera en mayuscula pero en este caso no funcionaria porque el diccionario esta en minuscula

#if student not in students: # una manera mas rapida y simple de hacer este tipo de comprobaciones.
#    print(f"{student} was not found")
#else:
#    print(f"{student} is a student")    


#rades = {  "sandy": "A",
#            "roberto": "B",
#            "patrick": "C"}

#student = input("Enter the name of a student: ")

#if student in grades:
#    print(f"{student}'s grade is {grades[student]}")#asi se mostraria el estudiante y su valor
#else:
#    print(f"{student} was a not found")


email = "Roberto_Pereyr@hotmail.com"

if "@" in email and "." in email:# se tienen que cumplir las dos condiciones 
    print("Valid email")
else:
    print("Invalid email")