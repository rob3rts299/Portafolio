#la super clase le permite extender la funcionalidad a las clases hijos que heredan los metodos y las variables del constructor

class shape:
    def __init__(self,color, is_filled):
        self.color = color
        self.is_filled = is_filled
    def describe(self):
        print(f"It is {self.color} and {'filled' if self.is_filled else 'not filled'}")

class circle(shape):
    def __init__(self, color, is_filled, radius):
        super().__init__(color, is_filled)#de esta manera se obtienen los valores comunes del constructor de la clase padre
        self.radius = radius
    def describe(self):
        print(f"It is a circle with an area of {3.14 * self.radius * self.radius}cm^2")#aca podemos corroborar que los metodos tendran prioridad siempre que sean de la misma clase. 
        super().describe()# de esta manera usamos las dos funciones o metodos tanto de la clase padre como de la clase hijo. Osea usar una superclass.
class square(shape):
    def __init__(self, color, is_filled, width):
        super().__init__(color, is_filled)
        self.width =width
    def describe(self):
        print(f"It is a square with an area of {self.width * self.width}cm^2")#aca podemos corroborar que los metodos tendran prioridad siempre que sean de la misma clase. 
        super().describe()# de esta manera usamos las dos funciones o metodos tanto de la clase padre como de la clase hijo. Osea usar una superclass.
  

class triangle(shape):
    def __init__(self, color, is_filled, width, height):
        super().__init__(color, is_filled)
        self.width = width
        self.height = height
    def describe(self):
        print(f"It is a triangle with an area of {self.width * self.height / 2}cm^2")#aca podemos corroborar que los metodos tendran prioridad siempre que sean de la misma clase. 
        super().describe()# de esta manera usamos las dos funciones o metodos tanto de la clase padre como de la clase hijo. Osea usar una superclass.


circle = circle("red",True, 5)
#circle = circle(color="red",is_filled=True,radius= 5)#no es necesario pero de esta manera es mas facil identificarlo
square = square(color="red",is_filled=False,width= 6)
triangle = triangle(color="blue",is_filled=True,width= 2,height=8)#


circle.describe()
square.describe()
triangle.describe()