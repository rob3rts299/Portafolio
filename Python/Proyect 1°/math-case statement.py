

def day_of_week(day):
    #if day == 1:
    #    return "It is sunday"
    #elif day == 2:
    #    return "It is monday"
    #elif day == 3:
    #    return "It is tuesday"
    #elif day == 4:
    #    return "It is wednesday"
    #elif day == 5:
    #    return "It is thurday"
    #elif day == 6:
    #    return "It is friday"
    #elif day == 7:
    #    return "It is saturday"
    #else :
    #    return "Not a valid day"
    #ahora simplificariamos el uso de los if con case (switch case)
    match day:
        case 1:
            return "It is sunday"
        case 2:
            return "It is monday"
        case 3:
            return "It is tuesday"
        case 4:
            return "It is wednesday"
        case 5:
            return "It is thurday"
        case 6:
            return "It is friday"
        case 7:
            return "It is saturday"
        case _ :# funciona como el "else"
            return "Not a valid day"
print(day_of_week(1))#funciona tambien con variables de tipo string, y ademas puede retornar boolean (el ejemplo fue dia de semana = false / Fin de semana = true)

def is_weekend(day):
    match day:
        case "saturday" | "sunday":
            return True
        case "monday" | "tuesday" | "wednesday" | "thurday" | "friday":
            return False
        case _:
            return False
        
print(is_weekend("saturday"))

