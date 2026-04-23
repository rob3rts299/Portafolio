#variable scope = where a variable is visiable and accessible
#scope resolution = sige la jerarquia (LEGB) Local => Enclosed => Global => Built-in


#las valirables a solamente funcionaria dentro de la funcion en la que aparecen. en el caso de fun2 quiera leer a saldra error.
# jerarquia local
def fun1():
    a = 1
    print(a)

def fun2():
    b=2
    print(b)

fun1()
fun2()

#ejemplo de una posible utilizacion de variable de una funcion en otra.

def happy_birthday(name, age):
    print(f"Happy Birthday dear {name}")
    print(f"You are {age} years old.")

def main():
    name = "Roberto"
    age = 26
    happy_birthday(name,age)

main()

# jerarquia Enclosed
def fun1():
    x = 1

    def fun2():
        print(x)
    fun2()
fun1()

# jerarquia global
def fun1():
    a = 1
    print(x)

def fun2():
    x=2#aunque estemos en jerarquia global, siempre que se asigne a un valor local este tendra prioridad.
    print(x)

x = 3
fun1()
fun2()

#jerarquia built-in

from math import e

def fun1():
    print(e)

#e = 7#siguiendo la jerarquia tomara el valor global en primera instancia

fun1()