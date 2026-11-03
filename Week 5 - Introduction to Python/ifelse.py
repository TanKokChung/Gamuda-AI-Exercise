age = int(input("Please key in your age:"))
if age >= 18 and age <= 20:
    print("Adult and Freshman.")
elif age > 20 and age <= 22:
    print("Sophomore")
elif age > 22:
    print("Graduate")
else:
    print("You too young to enter college!")