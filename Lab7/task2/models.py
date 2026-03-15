class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color
    
    def eat(self):
        return f"{self.name} is eating"
    
    def sleep(self):
        return f"{self.name} is sleeping"
    
    def __str__(self):
        return f"Animal: {self.name}, {self.age} years old, {self.color}"

class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed
    
    def speak(self):
        return f"{self.name} says Woof!"
    
    def fetch(self):
        return f"{self.name} is fetching the ball"
    
    def __str__(self):
        return f"Dog: {self.name}, {self.age} years old, {self.color} {self.breed}"

class Cat(Animal):
    def __init__(self, name, age, color, favorite_toy):
        super().__init__(name, age, color)
        self.favorite_toy = favorite_toy
    
    def speak(self):
        return f"{self.name} says Meow!"
    
    def scratch(self):
        return f"{self.name} is scratching the couch"
    
    def __str__(self):
        return f"Cat: {self.name}, {self.age} years old, {self.color} cat"