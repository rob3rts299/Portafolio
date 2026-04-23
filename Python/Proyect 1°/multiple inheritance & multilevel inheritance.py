#multiple inheritance = c(A,B)
#multi-level inheritance = C(B) <- B(A) <- (A)

class animal:
    def __init__(self, name):
        self.name = name 
    def eat(self):
        print(f"{self.name} is eating")
    def sleep(self):
        print(f"{self.name} is sleeping")

class prey(animal):
    def flee(self):
        print(f"{self.name} is fleeing")

class predator(animal):
    def hunt(self):
        print(f"{self.name} is hunting")

class rabbit(prey):
    pass

class hawk(predator):
    pass

class fish(prey,predator):#podemos ver como una clase puede heredar varios atributos de diferentes clases
    pass

rabbit = rabbit("bugs")
hawk = hawk("mirrow")
fish = fish("nemo")

rabbit.eat()#como podemos ver aca los atributos se pueden heredar desde diferentes clases. (prey y predator heredan los atributos de la clase animal) y por lo tanto hawk/rabbit/fish. hereda los atributos de la clase animal

