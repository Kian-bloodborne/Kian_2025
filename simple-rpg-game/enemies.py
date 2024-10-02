import random

class Enemy:
    def __init__(self):
        self.name = "Goblin"
        self.health = 50

    def attack(self, player):
        damage = random.randint(3, 15)
        player.health -= damage
        print(f"{self.name} attacks {player.name} for {damage} damage!")
