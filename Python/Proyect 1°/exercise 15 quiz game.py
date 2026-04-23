
questions = ("How many elements are in the periodic table?: ",
            "Which animal lays the largest eggs?: ",
            "What is the most abundant gas in Earth's atmosphere?: ",
            "How many bones are in the human body?: ",
            "Which planet in the solar system is te hottest?: ")
options = (("A. 116","B. 117","C. 118","D. 119"),
           ("A. Whale","B. Crocodrile","C. Elephant","D. Ostrich"),
           ("A. Nitrogen","B. Oxygen","C. Carbon-Dioxide","D. Hydrogen"),
           ("A. 205","B. 206","C. 207","D. 208"),
           ("A. Mercury","B. Mars","C. Venus","D. Earth"))
answers = ("C","D","A","B","B")
guesses = []
score = 0
questions_number=0

for question in questions:
    print("--------------------------")
    print(question)
    for option in options[questions_number]:
        print(option)
    guess = input("Enter (A, B, C, D): ").upper()
    guesses.append(guess)
    if guess == answers[questions_number]:
        score += 1
        print("CORRECT!!")
    else:
        print("INCORRECT!!")
        print(f"{answers[questions_number]}, is the Correct answer")
    questions_number += 1

print("---------------------------")
print("----------RESULTS----------")
print("---------------------------")

print("answer: ", end="")
for answer in answers:
    print(answer, end=" ")
print()

print("guess: ", end="")
for guess in guesses:
    print(guess, end=" ")
print()

score = int(score / len(questions) * 100)
print(f"Your score is: {score}%")