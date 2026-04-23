from script1 import * #de esta manera se pueden conectar los 2 script para poder compartir las variables, funciones, metodos, etc. es un paralelismo de libreria

def favorite_drink(drink):
    print(f"Your favorite drink is {drink}")

def main():
    print("This is script2")
    favorite_food("sushii")
    favorite_drink("water")
    print("Goodbye!!")

if __name__ == '__main__':# esto es una buena practica ayuda a tener un codigo dedicado a modulos, es mas facil comprensible, no existe las variables globales
     main()