

class animal:
    alive = True

class dog(animal):
    def speak(self):
        print("WOOF!") 
class cat(animal):
    def speak(self):
        print("MIAU!")

class car:#aunque no sera una clase heredada de animal al compartir el mismo atributo o metodo que la clase "madre" el metodo "animals" funcionara 
    alive = False # con esto corroboramos, al no heredar el atributo "alive" saldra error, pero al agregarlo el programa funcionara correctamente
    def speak(self):
        print("HONK!")

#para que se entienda el ejemplo de este programa, es en el caso de tener objetos que difieren en algunos atributos. por ejemplo el auto no es un ser vivo, pero se lo podria considerar con vida dependiendo el contexto (caso: Cars pelicula). y ahi es necesario cambiar el atributo de alive a True
animals  = [dog(), cat(), car()]

for animal in animals:
    animal.speak()
    print(animal.alive)