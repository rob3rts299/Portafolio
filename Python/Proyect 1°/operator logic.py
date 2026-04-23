#Si hace mucho calor, o si esta lloviendo el evento al aire libre se cancela.
# operator "or" Alguna de las condiciones tiene que ser verdadera.
# operator "and" Vincula dos condiciones que tienen que ser verdadera para pasar por el if
# operator "not" invierte la condicion.
#temp = 25
#is_raining = False

#if temp > 35 or temp < 0 or is_raining:
#    print("The outdoor event is cancelled ")
#else:
#    print("The outdoor event is still scheduled")

#"And"
#temp = 25
#is_sunny = True

#if temp >= 28 and is_sunny:
#    print("It is hot outside")
#    print("It is SUNNY")
#elif temp <=0 and is_sunny:
#    print("It is COLD outside")
#    print("It is SUNNY")
#elif 28 > temp > 0 and is_sunny:
 #   print("It is WARM outside")
 #   print("It is SUNNY")

#"not"

temp = 25
is_sunny = False

if temp >= 28 and not is_sunny:
    print("It is hot outside")
    print("It is Cloudy")
elif temp <=0 and not is_sunny:
    print("It is COLD outside")
    print("It is Cloudy")
elif 28 > temp > 0 and not is_sunny:
    print("It is WARM outside")
    print("It is Cloudy")