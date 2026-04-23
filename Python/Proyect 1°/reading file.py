
#.txt
file_path = "librery/output.txt"

    
try:
    with open(file_path,"r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("thar file was not found")
except PermissionError:
    print("You do not have permission to read that file")
#algo interesante es que si desde el sistema nosotros denegamos el acceso al archivo tanto de lectura como etc. no podremos ingresar por comandos

import json

file_path2 = "librery/output.json"

    
try:
    with open(file_path2,"r") as file:
        content = json.load(file)
        print(content)
        print(content["job"])#se lo puede buscar por la key
except FileNotFoundError:
    print("thar file was not found")
except PermissionError:
    print("You do not have permission to read that file")

#csv

import csv

file_path3 = "librery/output.csv"

    
try:
    with open(file_path3,"r") as file:
        content = csv.reader(file)
        for line in content:
            print(line)
#            print(line[1])#se puede ser mas especifico por columnas
except FileNotFoundError:
    print("that file was not found")
except PermissionError:
    print("You do not have permission to read that file")