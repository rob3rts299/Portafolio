rows = int(input("Enter the # of rows: "))
Columns = int(input("Enter the # of Columns: "))
symbols = input("Enter a symbol to use: ")
for x in range(rows):
    for x in range(Columns):
        print(symbols, end="")#con el comando end, podemos reconfigurar para que no haga un salto de pagina.
    print()    