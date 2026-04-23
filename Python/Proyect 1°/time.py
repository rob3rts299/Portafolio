
import datetime

date = datetime.date(2024, 4, 17)#podemos colocar una fecha manualmente
today = datetime.date.today()#toma el dia de "hoy"

time = datetime.time(12,13,0)#podemos colocar una hora manual
now = datetime.datetime.now()#para entender esto es => ingresamos al metodo de "datetime", y dentro de datetime, existe una funcion llamada "datetime"
                                # esto retorna fecha y hora exacta, de "ahora"

now = now.strftime("%H:%M:%S")#una forma de representar la ahora actual sin ninguna informacion extra, se le puede agregar caracteres.
#now = now.strftime("%H:%M:%S %m-%d-%Y")#ahora mostramos la hora junto con la fecha. Se puede agregar mas informacion buscar la documentacion online

print(now)

target_datetime = datetime.datetime(2030,2,1, 12,30,52)
current_datetime = datetime.datetime.now()

if target_datetime < current_datetime:
    print("Target date has passed")
else:
    print("Target date has NOT passed")
