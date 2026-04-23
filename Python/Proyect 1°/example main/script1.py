def favorite_food(food):
    print(f"your favorite food is {food}")

def main():
    print("This is script1")
    favorite_food("pizza")
    print("Goodbye!!")

if __name__ == '__main__':#de esta manera nos aseguramos que se ejecute una unica vez siempre y cuando se llame al script
    main()