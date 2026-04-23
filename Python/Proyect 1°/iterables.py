
#numbers = [1,2,3,4,5]#tambien funcionaria con los parentesis ()
#
#for number in reversed(numbers):# formas de iterar las variables
#    print(number)


#fruits = {"apple","orange","banana","coconut"}

#for fruit in fruits:#Estos sets  no son reversibles
 #   print(fruit)

#name = "Robert Pereyra "

#for character in name:
#    print(character, end=" ")

my_dictionary = {"A": 1,"B":2,"C":3,"D":4}

for key, value in my_dictionary.items():# se puede tomar solo los valores con .value()
    print(f"{key}: {value}")

