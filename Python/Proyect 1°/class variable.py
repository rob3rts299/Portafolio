

class student:

    class_year = 2025#la variable de clase son aquellas que se asignan por fuera del constructor y todos objetos de la clase las poseen
    num_student = 0

    def __init__(self, name, age):
        self.name = name
        self.age = age
        student.num_student += 1# para acceder a una variable de clase hace falta iniciar con el nombre de la clase.



student1 = student("Roberto", 29)
student2 = student("Patrick", 33)


print(student1.name)
print(student1.age)
print(student1.class_year)

print(f"My graduating class of {student.class_year} has {student.num_student} students")

