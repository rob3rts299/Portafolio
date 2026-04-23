#Decorator = A function that extends the behavior of another function
#               w/o modifying the base function
#               Pass the base function as an argument to the decorator

def add_sprinkles(func):
    def wrapper(*arg, **kwargs):#Necesitamos el wrapper porque sino la funcion no se ejecuta completamente
        print("*You add sprinkles 🎊*")
        func(*arg, **kwargs)
    return wrapper

def add_fudge(func):
    def wrapper(*arg, **kwargs):#Agregamos los arg, para poder pasarle argumentos a las funciones
        print("*You add fudge 🍫*")
        func(*arg, **kwargs)
    return wrapper

@add_sprinkles #para llamar la funcion de decoracion se tiene que agregar los "@"
@add_fudge
def get_ice_cream(flavor):
    print(f"Here is your {flavor} ice cream 🍨")


get_ice_cream("vainilla")# antes de agregar los args y los kwargs saldra error.