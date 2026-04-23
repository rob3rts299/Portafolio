unit = input("Is this temperature in Celsius or Fahrenheit? (C/F): ")
temp = float(input("Enter the Temperature:"))

if unit == "c" or unit == "c":
    temp = (temp * 9) / 5 + 32
    print(f"The temperature in Fahrenheit is: {round(temp,2)}°F")
elif unit == "F" or unit == "f":
    temp = (temp - 32) * 5 / 9
    print(f"The temperature in Celsius is: {round(temp,2)}°C")
else: 
    print(f"{unit} is NOT unit valid of temperature")