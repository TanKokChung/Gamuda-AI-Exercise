person = {
    "name": "Louis",
    "age": 30,
    "city": "Kota Kinabalu"
}
print(person["name"])
person["email"] = "louistan96@gmail.com"
print(person)
for key in person:
    print(key)
for value in person.values():
    print(value)
for key, value in person.items():
    print(f"{key}: {value}")