from player import Player
from enemies import Enemy

def main():
    print("Welcome to the RPG Game!")
    player_name = input("Enter your character's name: ")
    player = Player(player_name)

    while True:
        action = input("Do you want to (1) Fight or (2) Exit? ")
        if action == '1':
            enemy = Enemy()
            print(f"A wild {enemy.name} appears!")
            while enemy.health > 0 and player.health > 0:
                player.attack(enemy)
                if enemy.health > 0:
                    enemy.attack(player)
            if player.health > 0:
                print(f"You defeated the {enemy.name}!")
            else:
                print("You have been defeated!")
                break
        elif action == '2':
            print("Thanks for playing!")
            break
        else:
            print("Invalid option. Please choose again.")

if __name__ == "__main__":
    main()
