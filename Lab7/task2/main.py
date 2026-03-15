from models import Animal, Dog, Cat

animal = Animal("Kiki", 5, "brown")
dog = Dog("Aqtos", 3, "white", "Alabai")
cat = Cat("Harbi", 2, "gray", "ball")

animals = [animal, dog, cat]

print("ALL ANIMALS:")
for a in animals:
    print(f"\n{a}")
    print(f"  {a.eat()}")
    print(f"  {a.sleep()}")
    
    if hasattr(a, 'speak'):
        print(f"  {a.speak()}")

print("\nUNIQUE ACTIONS:")
print(dog.fetch())
print(cat.scratch())