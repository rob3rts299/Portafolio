from abc import ABC, abstractmethod

class shape(ABC):
    
    @abstractmethod
    def area(self):
        pass

class circle(shape):
    def __init__(self,radius):
        super().__init__()
        self.radius = radius
    def area(self):
        return 3.14 * self.radius ** 2

class square(shape):
    def __init__(self,side):
        super().__init__()
        self.side = side
    def area(self):
        return self.side ** 2

class triangle(shape):
    def __init__(self, base, height):
        super().__init__()
        self.base = base
        self.height = height
    def area(self):
        return self.base * self.height / 0.5

class pizza(circle):#de esta manera la clase pizza tomara los atributos y metodos de circle (por su forma), y a su vez tomara el metodo de area.
    def __init__(self,topping,radius):
        super().__init__(radius)
        self.topping = topping



shapes = [circle(4), square(5),triangle(6, 8),pizza("pepperoni", 15)]

for shape in shapes:
    print(f"{shape.area()}cm²")