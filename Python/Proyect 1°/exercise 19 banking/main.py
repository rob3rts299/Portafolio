#banking program

def show_balance(balance):
    print(f"Your balance is ${balance:2.f}")

def deposit():
    amount= input("Enter an mount to be deposited: ")
    if amount < 0:
        print("That's not a valid amount")
        return 0 
    else:
        return amount
def withdraw(balance):
    amount = float(input("Enter amount to be withdraw: "))
    if amount > balance:
        print("Insufficient Funds")
        return 0
    elif amount < 0:
        print("amount must be greater than 0")
        return 0
    else:
        return amount
    
def main():
    balance= 0
    is_running = True

    while is_running:
        print("******************")
        print("  Banking Program  ")
        print("1. Show Balance")
        print("2. Deposit")
        print("3. Withdraw")
        print("4. Exit")
        print("******************")

        choise = input("Enter Your choise (1-4): ")


        if choise == '1':
            show_balance(balance)
        elif choise == '2':
            balance += deposit()
        elif choise == '3':
            balance -= withdraw(balance)
        elif choise == '4':
            print(choise)
            is_running = False
        else:
            print("Please select a choise!!")

    print("Thanks you! have a nice day.")

if __name__ == '__main__':
    main()