#Dictionary = collection of {key:value} - Ordenados, modificables y NO duplicables


capitals = {"Argentina": "Buenos Aires",
            "USA": "Whashington D.C.",
            "India": "New Delhi ",
            "China": "Beijing"}

#print(dir(capitals))#Atributos de un diccionario // Se puede usar la funcion help

#print(capitals.get("Argentina"))#Devolvera el valor asociado con esa palabra


#if capitals.get("Rusia"):
#    print("That capital exists")
#else:
#    print("that capital doesn't exist.")

#capitals.update({"Germany": "Berlin",
#                 "Russia": "Moscow"})#de esta manera se agregan mas valores
#capitals.update({"USA": "Detroy",})# de esta manera se puede modificar el valor asociado de una variable que ya posee valor

#capitals.pop("China")#elimina el valor con el nombre asosiado
#capitals.clear()#Limpia todo el diccionario

#keys = capitals.keys()#Los diccionarios se manejan por llave, de esta manera es una forma de obtener las llaves 
#for key in capitals.keys():
#    print(key)

#mismo metodo para los valores

#Value = capitals.values()#muestra el valor asociado a las variables en el diccionario
#print(Value)

#for value in capitals.values():
#    print(value)

#item = capitals.items()# muestra la totalidad de los items dentro del diccionario
#print(item)

for key, value in capitals.items():
    print(f"{key}: {value}")
