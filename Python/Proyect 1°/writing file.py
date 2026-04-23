
#.txt

txt_data = "I like pizza"

file_path = "librery/output.txt"#Se crea el archivo mediante ruta relativa
file_path2 = "C:/Users/Rober/OneDrive/Escritorio/Archivos sin sentido/output.txt" #Se crea el archivo mediante ruta absoluta

#         file=file_path, mode="w"    otra forma de escribirlo
#with open(file_path2, "w") as file:
#    file.write(txt_data)
#    print(f" txt file '{file_path2}' was created")

try:
    with open(file_path2, "x") as file:#verifica si el archivo existe, si no existe lo crea
        file.write(txt_data)
        print(f" txt file '{file_path2}' was created")
except FileExistsError:
    print("that file already exists")


try:
    with open(file_path2, "a") as file:# funciona como el append() de los arreglos
        file.write("\n" + txt_data)
        print(f" txt file '{file_path2}' was created")
except FileExistsError:
    print("that file already exists")

#employees = ["eugene","squidward","spongebob","patrick"]


#try:
#    with open(file_path2, "x") as file:#verifica si el archivo existe, si no existe lo crea
#        for employee in employees:
#            file.write(employee + "\n")
#        print(f" txt file '{file_path2}' was created")
#except FileExistsError:
#    print("that file already exists")


#JSON

import json #Necesario para poder manejar archivos JSON

employee = {
    "name": "bob",
    "age": 30,
    "job": "cook"
}

file_path3 = "librery/output.json"


try:
    with open(file_path3, "w") as file:#verifica si el archivo existe, si no existe lo crea
        json.dump(employee, file, indent=4)# el metodo dump convierte el diccionario en un archivo del estilo json
        print(f" json file '{file_path3}' was created")
except FileExistsError:
    print("that file already exists")


#CSV    
import csv # necesario para trabajar con csv

employee2 = [["name","age","job"],
             ["bob",30,"cook"],
             ["patrick",27,"unemployed"],
             ["sandy",31,"Scientist"]]

file_path4 = "librery/output.csv"


try:
    with open(file_path4, "w", newline="") as file:# el newline le saca los caracteres extras, o le agrega dependiendo lo que quiera el usuario
        writer = csv.writer(file)
        for row in employee2:
            writer.writerow(row)
        print(f" csv file '{file_path4}' was created")
except FileExistsError:
    print("that file already exists")