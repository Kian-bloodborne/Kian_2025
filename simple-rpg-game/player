import random

class Player:
    def __init__(self, name):
        self.name = name
        self.health = 100

    def attack(self, enemy):
        damage = random.randint(5, 20)
        enemy.health -= damage
        print(f"{self.name} attacks {enemy.name} for {damage} damage!")
