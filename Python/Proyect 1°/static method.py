

class employee:
    #creacion de un empleado
    def __init__(self, name, position):
        self.name = name
        self.position = position

    def get_info(self):
        return f"{self.name} = {self.position}"
    #creacion del metodo estatico    
    @staticmethod #el metodo devolvera la posicion siempre y cuando esta se encuentre en el arreglo de posiciones validas
    def is_valid_position(position):#como son metodos estaticos no vamos a usar las variables que se crean en la misma clase.
        valid_positions = ["Manager","Cashier","Cook","Janitor"]
        return position in valid_positions
    
employee1 = employee("Roberts","Manager")

employee2 = employee("Erick","Rocket science")


#print(employee.is_valid_position("Cockers"))#corrobora la validez de la posicion del empleado.
print(employee1.get_info())
print(employee2.get_info())