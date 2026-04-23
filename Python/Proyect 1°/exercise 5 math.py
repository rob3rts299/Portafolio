import math

a = float(input("Enter valor of a Cat Adj: "))
b = float(input("Enter valor of a Cat Op: "))

hipotenusa = math.sqrt(pow(a,2)+pow(b,2))

print(f"The Hipotenusa of the Rectangule is: {round(hipotenusa,2)}cm")