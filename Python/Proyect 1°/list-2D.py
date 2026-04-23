
#una forma de hacerlo
#fruits = ["appel","orange","pineapple","banana"]
#vegetables = ["celery","carrots","potatoes"]
#meats = ["chicken","fish","turkey"]
#groceries = [fruits,vegetables,meats]
#forma mas practica

groceries = [["appel","orange","pineapple","banana"],
             ["celery","carrots","potatoes"],
             ["chicken","fish","turkey"]]

#print(groceries[0][1])

for collection in groceries:
    for food in collection:
        print(food, end=" ")#de esta manera nosotros imprimimos todos los elementos de la coleccion.
    print()
 