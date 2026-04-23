

#print(help("modules"))#da informacion de todos los modulos disponibles
#print(help("math"))#da informacion de un modulo especifico por ejemplo math

#import math #se agregan los modulos con el comando import
#import math as m #de esta manera podemos importar el modulo y simplificarlo para que sea mas especifico y entendible el nombre
#print(m.pi)

#from math import pi #importamos unicamente la funcion que nos interesa del modulo
#print(pi) #el problema de usar este tipo de metodos es que la palabra clave en este caso"pi" , puede ser cambiada de valor al asignarle

#pi = 2
#print(pi)

#creamos un archivo que usaremos de modulo (module_example.py) tienen que ser si o si guines bajos "_"

import module_example

#result = module_example.pi
#result = module_example.square(3)
result = module_example.circumference(4)
#result = module_example.cube(2)
#result = module_example.area(3)


print(result)
