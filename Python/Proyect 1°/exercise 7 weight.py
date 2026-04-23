weight = float(input("Enter your weight: "))
unit = input("Kilograms or Pounds? (K or L): ")#Kilogramos o libras.

valued_pound = 2.205

if unit == "K" or unit == "k":
    weight = weight * valued_pound
    unit = "Lbs."
    print(f"Your Weight is: {round(weight,2)}{unit}")
elif unit == "L" or unit == "l":
    weight = weight / valued_pound
    unit = "Kgs."
    print(f"Your Weight is: {round(weight,2)}{unit}")
else:
    print(f"This unit:{unit}, not valid.")

