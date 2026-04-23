

#def hello(greeting, title,first_name, last_name):
 #   print(f"{greeting} {title} {first_name} {last_name}")

#hello("Hello",first_name="Roberto",last_name="Pereyra" , title="Mr.")#manera de ubicar los valores con el atributo correcto, se tienen que poner al ultimo.


#for x in range(1,11):
 #   print(x, end=" ")#en "end" funciona como keyword argument.

#print("1","2","3","4","5", sep="-")#el "sep" funciona como keyword, al poder ser tipeado luego de cada numero.

def get_phone(country, area, first, last):
    return f"{country}-{area}-{first}-{last}"

phone_number= get_phone(country=1,area=123,first=456,last=7890)#los keyword argument, sirve para identificar de manera directa los valores de los atributos de las funciones.

print(phone_number) 