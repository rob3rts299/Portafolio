
class animal:
    def __init__(self,name):
        self.name = name
        self.is_alive = True

    def eat(self):
        print(f"{self.name} is eating")

    def sleep(self):
        print(f"{self.name} is sleeping")

class dog(animal):#de esta manera estamos haciendo que la clase dog herede todos los atributos de la clase animal
    def speak(self):
        print("WOOF!")

class cat(animal):
    def speak(self):
        print("MIAU!")

class mouse(animal):
    def speak(self):
        print("NICH NICH!")

dog = dog("Scooby")     
cat = cat("Tom")
mouse = mouse("Jerry")

print(dog.name)
print(dog.is_alive)
dog.eat()
mouse.speak()
print(cat.name)
print(mouse.name)