
#def happy_birthday(name, age):#importan la posicion de los parametros
#    print(f"Happy Birthday to you {name}")
#    print(f"You are {age} years old")
#    print("Happy Birthday to you")
#    print()


#happy_birthday("brooder", 15)
#happy_birthday("fede", 20)
#happy_birthday("frank", 29)


#def display_invoice(username, amount, due_date):
#    print(f"hello {username}")
#    print(f"Your bill of ${amount:.2f} is due:{due_date}")

#display_invoice("Brocode", 42.50, "01/01")


#Return

#def add(x, y):
#    z = x + y
#    return z

#def subtract(x, y):
#    z = x - y
#    return z

#def multiply(x, y):
#    z = x * y
#    return z

#def divide(x, y):
#    z = x / y
#    return z

#print(add(1,5))
#print(subtract(1,5))
#print(multiply(1,5))
#print(divide(1,5))

def create_name(first, last):
    first = first.capitalize()
    last = last.capitalize()
    return first + " " + last

full_name = create_name("Roberto", "Pereyra Illanes")
print(full_name)