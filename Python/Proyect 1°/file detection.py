

import os #Necesario para la deteccion de archivos. este modulo sistema operativo de python interactua con otros sistemas operativos


file_path = "librery/text.txt"#tomamos la ruta del archivo que necesitamos. En este caso es de una carpeta distinta

if os.path.exists(file_path):#verifica si encontro el archivo
    print(f"The location '{file_path}' exists")
else:
    print("That location doesn't exist")

#file_path2 = "C:\\Users\\Rober\\OneDrive\\Escritorio\\Archivos sin sentido"#en el caso de rutas absolutas que tengas " \ " es necesario agregarle otra mas para que el compilador de python las detecte osea " \\ "
file_path2 = "C:/Users/Rober/OneDrive/Escritorio/Archivos sin sentido/soa.txt"# tambien se puede resolver el problema anterior cambiando las " \ " por " / "
if os.path.exists(file_path2):#verifica si encontro el archivo
    print(f"The location '{file_path2}' exists")
    if os.path.isfile(file_path2):
        print("That is a file")
    elif os.path.isdir(file_path2):#Borrar "soa.txt"
        print("That is a directory")
else:
    print("That location doesn't exist")
