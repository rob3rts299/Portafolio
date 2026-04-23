#exception = An event that interrupts the flow of a program
#           mas usadas => 1 try; 2 except; 3 finally;   Existen mas exceptiones revisar el material pagina de python.

#Ejemplo de zeroDivisionError:
#1/0
#Ejemplo de TypeError:
#1+"1"
#Ejemplo de ValueError:
#int("pizza")

#Tipos de soluciones 
#1
try:
    number = int(input("Enter a number: "))
    print(1/number)    #,ValueError ⬇
#except ZeroDivisionError:#evita la culminacion del programa para darle la posibilidad de remontar en alguna otra linea de codigo   |   puede tomar los errores anterior mostrados
#    print("You can't divide by zero. .i.")
#except ValueError:#si existen 2 exception con el mismo error, tomara el primero en leer
#
#     print("Enter only numbers please")
except Exception:# Es una mala practica esto.
    print("Somethings went wrong ")
finally:#Se ejecutara siempre al final, en cualquier exception  |  Se suele usar para que siga leyendo archivos, o para mandar a que siga la siguiente funcion etc etc
    print("Do some Cleanup here")