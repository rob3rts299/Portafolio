#interest calculator

principle = 0
rate = 0
time = 0

while True: 
    principle = float(input("Enter the principle amount: "))
    if principle <= 0:
        print("Principle can't be less than or equal zero.")#el valor no puede ser 0 o menos a 0
    else:
        break

while rate <= 0: 
    rate = float(input("Enter the interest rate: "))
    if rate <= 0:
        print("interest rate can't be less than or equal zero.")#el valor no puede ser 0 o menos a 0

while time <= 0: 
    time = int(input("Enter the time in years: "))
    if time <= 0:
        print("time can't be less than or equal zero.")#el valor no puede ser 0 o menos a 0


total = principle * pow((1 + rate /100), time)
print(f"balance after {time} year/s: ${total:.2f}")