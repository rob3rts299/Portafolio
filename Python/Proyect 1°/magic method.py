

class book:

    def __init__(self, title, author, num_pages):
        self.title = title
        self.author = author
        self.num_pages = num_pages
    
    #metodo (magic) de retorno del contenido de las variables.
    def __str__(self):  # Retirna la direccion en memoria, En otra palabras trae el contenido que se especifica. Si no estuviera definida este parametro el print solo devolveria que "book1" es un objeto
        return f"'{self.title}' by {self.author}"
    
    #Este metodo (magic) Permite Comparar
    def __eq__(self, other):#se pone el valor el cual utilizaremos para hacer la comparacion "other"
        return self.title == other.title and self.author == other.author

    #metodo (magic) Para elegir mayor o menor
    def __lt__(self, other):#se pone el valor el cual utilizaremos para hacer la comparacion  "other"
        return self.num_pages < other.num_pages
    
    #metodo (magic) para sumar o agregar
    def __add__(self, other):#se pone el valor el cual utilizaremos para hacer la suma "other"
        return f"{self.num_pages + other.num_pages} pages"
    
    #metodo (magic) para "busqueda"
    def __contains__(self, keyword):
        return keyword in self.title or keyword in self.author
    
    #metodo (magic) para obtener un "item" o obtener los valores del objeto
    def __getitem__(self, key):
        if key == "title":
            return self.title
        elif key == "author":
            return self.author
        elif key == "num_pages":
            return self.num_pages
        else:
            return f"key {key} was not found"

book1 = book("The Hobbits", "J.R.R. Tolkien", 310)
book2 = book("Harry Potter", "J.K. Rowling", 223)
book3 = book("The Lion", "C.S. Lewis", 270)
book4 = book("The Hobbits", "J.R.R. Tolkien", 310)

print(book1)

print(book1 == book4)
print(book1 < book3)
print(book1 + book2)
print("Lion" in book3)
print(book1['author'])