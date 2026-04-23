username = input("Enter a username: ")

if len(username) > 12:
    print("Your username can't be more than 12 characters.")
elif username.isalpha() == False:
    print("Your username can't contain spaces and digit.")
else:
    print(f"!!Welcome¡¡ {username}.")