import random
#Arte ASI
# ● ┌ ─ ┐ │ └ ┘ 

"┌─────────┐"
"│         │"
"│    ●    │"
"│         │"
"└─────────┘"

dice_art = {
    1: ("┌─────────┐",
        "│         │",
        "│    ●    │",
        "│         │",
        "└─────────┘"),
    2: ("┌─────────┐",
        "│  ●      │",
        "│         │",
        "│      ●  │",
        "└─────────┘"),
    3: ("┌─────────┐",
        "│  ●      │",
        "│    ●    │",
        "│      ●  │",
        "└─────────┘"),
    4: ("┌─────────┐",
        "│  ●   ●  │",
        "│         │",
        "│  ●   ●  │",
        "└─────────┘"),
    5: ("┌─────────┐",
        "│  ●   ●  │",
        "│    ●    │",
        "│  ●   ●  │",
        "└─────────┘"),
    6: ("┌─────────┐",
        "│  ●   ●  │",
        "│  ●   ●  │",
        "│  ●   ●  │",
        "└─────────┘")
}

dice = []
total = 0
num_of_dice = int(input("How many dice?: "))

for die in range(num_of_dice):
    dice.append(random.randint(1,6))

#for die in range(num_of_dice):
#    for line in dice_art.get(dice[die]):
#        print(line)


#poner los dados horizontal

for line in range(5):#toma un rango de 5, que son las dimensiones del dado
    for die in dice:
        print(dice_art.get(die)[line], end=" ")#toma cada linea del dado seleccionado y la separa con espacio
    print()#sirve para hacer salto de pagina.
for die in dice:
    total += die
print(f"total= {total}")