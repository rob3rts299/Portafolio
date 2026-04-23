import random
import string

chars = " " + string.punctuation + string.digits + string.ascii_letters
chars = list(chars)
key = chars.copy()

random.shuffle(key)

#print(f"chars: {chars}")
#print(f"key: {key}")

#Encrypt

plain_text = input("Enter a message to encrypt: ")
cipher_text = ""

for letter in plain_text:
    index = chars.index(letter)
    cipher_text += key[index]
    #print(index) #Toma el valor indice de la letra del arreglo y lo asigna a la variable "index"
    #print(key) # mediante el random y el key colocariamos el caracter que esta en la posicion del index, al estar randomizado no tomaria el mismo valor asignado en el input

print(f"Original message: {plain_text}")
print(f"Encrypted message: {cipher_text}")

#Decrypt

cipher_text = input("Enter a message to encrypt: ")
plain_text = ""

for letter in cipher_text:
    index = key.index(letter)
    plain_text += chars[index]
    # tiene la misma logica, como el msj encriptado tiene los indices de las posiciones de las letras solo hay que colocarla en el arreglo que no esta randomizado

print(f"Encrypted message: {cipher_text}")
print(f"Original message: {plain_text}")
