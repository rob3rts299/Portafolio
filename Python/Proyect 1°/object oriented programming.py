from librery.car import car

car1 = car("Mustang",2023,"blue",False)# manera de crear un objeto con los "metodos o atributos" del constructor
car2 = car("Corven",2026,"red",True)# manera de crear un objeto con los "metodos o atributos" del constructor

print(car1)#poniendolo solo nos marcara el lugar ubicado en memoria
print(car1.model)
print(car2.model)

car2.drive()#de esta manera usamos los metodos que contengan las clases
car2.stop()