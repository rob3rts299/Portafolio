
# Instance methods = Best for operations on instances of the class (objects)
# Static methods =  Best for utility functions that do not need access to class data
# Class methods = Best for class-level data or require access to class itself

class student:

    count = 0
    total_gpa = 0

    def __init__(self, name, gpa):
        self.name = name
        self.gpa = gpa
        student.count += 1
        student.total_gpa += gpa
    #instance method
    def get_info(self):
        return f"{self.name}: {self.gpa}"
    
    @classmethod
    def get_count(cls):#se usa el cls para poder contar las variables que esten dentro de la class
        return f"Total # of students: {cls.count}"
    
    @classmethod
    def get_average_gpa(cls):
        if cls.count == 0:
            return 0 
        else:
            return f"Average GPA: {cls.total_gpa / cls.count:.2f}"
    
studen1 = student("Roberts",9.80)
studen2 = student("Federick",5.80)
studen3 = student("Vanessa",5.00)
print(student.get_count())
print(student.get_average_gpa())