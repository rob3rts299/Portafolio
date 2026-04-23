#Los arbitrary argument se usan mediante un * => Args y con ** => kwargs

#def add(*args):#se le puede poner cualquier nombre por ejemplo nums
 #   total = 0
 #   for arg in args:
 #       total += arg
 #   return total

#print(add(1,2,3,4))


#def display_name(*args):
#    for arg in args:
#        print(arg, end=" ")

#display_name("Roberto","pereyra","illanes")#se le puede ir agregando mas valores

#kwargs

#def print_address(**kwargs):#los kwargs manejan diccionarios.
#    for key, value in kwargs.items():#podemos manejar tambien las keys con .keys() y values con .values()
        #print(value)
        #print(key)
#        print(f"{key}: {value}")

#print_address(street="La rioja",
#              city="capital",
 #             state="av. Pres. Carlos Saul Menem",
 #             zip="1200")

def shipping_label(*args,**kwargs):# para que funcione los args tienen que ir primero
    for arg in args:
        print(arg, end=" ")
    print()
    for key, value in kwargs.items():
        print(f"{key}: {value}")

shipping_label("Dr.","Roberto","Pereyra",
               street="1200",
               apt="2",
               city="Capital",
               state="av. Pres. Carlos Saul Menem")

