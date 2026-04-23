#name = input("Enter your name: ")

#while name == "": #como todo while, hasta que deje de verificar la condicion del while, el bucle sera infinito
#    print("You did not enter your name.")
 #   name = input("Enter your name: ")
#print(f"Hello {name}")

#age = int(input("Enter your age: "))

#while age < 0:
#    print("age can't be negative")
#    age = int(input("Enter your age: "))

#print(f"Your are age {age} years old.")

food = input("Enter a food you like (q to quit): ")#para salir presiona q

while not food == "q": # con el "not" saldremos del while unicamente cuando se presiona la letra de la condicion
    print(f"You like {food}")
    food = input("Enter a food you like (q to quit): ")#para salir presiona q

print("Goodbye")



