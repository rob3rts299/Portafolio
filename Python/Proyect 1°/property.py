# @property = Decorator used to define a method as a property 
#             Benefit: Add additional logic when read, write or deleted attributes.
#             Gives you getter, setter, and deleter method 


class rectangle:
    def __init__(self, width, height):
        self._width = width # Ponemos el "_" antes del nombre del atributo para ponerlo en "private", tiene el fin de proteger los datos
        self._height = height

    @property
    def width(self):
        return f"{self._width:.1f}cm"

    @property
    def height(self):
        return f"{self._height:.1f}cm"#hay que especificar que es el valor privado, el que estamos usando

    @width.setter
    def width(self, new_width):
        if new_width > 0:
            self._width = new_width
        else:
            print("Width must be greater than zero")
    
    @height.setter
    def height(self, new_height):
        if new_height > 0:
            self._height = new_height
        else:
            print("Height must be greater than zero")

    @width.deleter#creamos un metodo para eliminar los valores/parametros de este caso width y height
    def width(self):
        del self._width
        print("Width has been deleted")

    @height.deleter#creamos un metodo para eliminar los valores/parametros de este caso width y height
    def height(self):
        del self._height
        print("height has been deleted")

rectangle1 = rectangle(2,7)

rectangle1.width= 5
rectangle1.height= 2

del rectangle1.width
del rectangle1.height#una vez borrados saldran error los siguientes prints porque no poseen dicho valor.

#print(rectangle1._width)#en teoria deberia salir que es acceso protegido, osea no mostrara las propiedades del obj. por eso no saldra con los cm
#print(rectangle1.height)
#print(rectangle1.width)

