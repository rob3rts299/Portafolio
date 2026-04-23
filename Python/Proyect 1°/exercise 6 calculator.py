operator = input("Enter an operator (+ - * /): ")
num_a = float(input("Enter Num A: "))
num_b = float(input("Enter Num B: "))

if operator == "+":
    result = num_a + num_b
    print(f"El resultado es: {round(result,2)}")
elif operator == "-":
    result = num_a - num_b
    print(f"El resultado es: {round(result,2)}")
elif operator == "*":
    result = num_a * num_b
    print(f"El resultado es: {round(result,2)}")
elif operator == "/":
    result = num_a / num_b
    print(f"El resultado es: {round(result,2)}")
else:
    print(f"{operator} is not valid operator")