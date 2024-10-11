---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---



---
layout: default
title: Welcome to My Site
description: A brief introduction to my project.
---

#What I want to do 

1.I'm trying to add background music it called 'bloodborne Ludwig the holy blade', and add the speed control. Use shift button to let character run.

2.I want add a character2, and let it control by the jkil. And this is his image ![image](https://github.com/user-attachments/assets/78af2afb-ceed-4ebf-a65c-1a2b4cc1ad6f)

3.I try to add attack button to let character to attack, one use klee weapons one use gun.

4.I want add some enemies and they also can attack.

5.I want to add items fall off, if the character kill the enemies they can get some items to resume HP or increase the damage of the character.

6.I want add some envirment like snow or rain, may be the harmful one.

7..RPG game must be random so I want add some treasure box let character open it may have weapon and money inside, I also want to add treasure chest monster.![image](https://github.com/user-attachments/assets/dcea74e1-1dde-40b5-8a06-0bc33b4aa349)
 

![image](https://github.com/user-attachments/assets/e44c3314-0868-472b-a852-1f697b3c3b66)


# Welcome to My Site

Hello! This is the homepage of my project. Here, you can find various resources and information about what I’m working on.

## About This Project

This project aims to explore the world of [Your Topic]. Here are some key points:

- **Objective**: Explain what you want to achieve.
- **Technologies Used**: List the main technologies or languages used in this project.
- **Target Audience**: Describe who this project is for.

## Key Features

- Feature 1: Brief description of the first feature.
- Feature 2: Brief description of the second feature.
- Feature 3: Brief description of the third feature.

## Get Involved

If you want to contribute to this project, please check the [contributing guidelines](CONTRIBUTING.md).

## Resources

- [Documentation](docs/index.md)
- [About Us](about.md)
- [Contact](contact.md)

## Connect with Me

Feel free to reach out if you have any questions or suggestions!

- [GitHub](https://github.com/yourusername)
- [Twitter](https://twitter.com/yourusername)

---

Thank you for visiting my site!

---
layout: base
title: Simple RPG Game
permalink: /rpg/
---

<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/rpg/">RPG Game</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/contact/">Contact</a></li>
    </ul>
</nav>

<canvas id='gameCanvas'></canvas>

<script type="module" src="assets/js/GameControl.js"></script>

<style>
nav {
    background-color: #333;
    padding: 10px;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

nav li {
    margin-right: 20px;
}

nav a {
    color: white;
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
}
</style>





Popcorn Hack 1
Make a code cell that show usage of compound assignment in a Data Type Operations.

// Compound Assignment with Number
let x = 10;
console.log("Initial x:", x);

// Using compound assignment for addition
x += 5; // equivalent to x = x + 5
console.log("After x += 5:", x);

// Using compound assignment for multiplication
x *= 2; // equivalent to x = x * 2
console.log("After x *= 2:", x);


// Compound Assignment with Array
let myArray = [1, 2, 3];
console.log("\nInitial myArray:", myArray);

// Using compound assignment to concatenate arrays
myArray += [4, 5]; // This won't work as expected; use .concat instead
myArray = myArray.concat([4, 5]);
console.log("After myArray.concat([4, 5]):", myArray);


// Compound Assignment with String
let myString = "Hello";
console.log("\nInitial myString:", myString);

// Using compound assignment for string concatenation
myString += " World!"; // equivalent to myString = myString + " World!"
console.log("After myString += ' World!':", myString);

Popcorn Hack 2
Make a code cell that changes block into a square, versus HD resolution
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Block to Square</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .block {
            width: 100px; /* initial block width */
            height: 200px; /* initial block height */
            background-color: #3498db;
            transition: all 0.5s ease; /* smooth transition */
        }
        .square {
            width: 200px; /* square width */
            height: 200px; /* square height */
            background-color: #e74c3c; /* change color when square */
        }
    </style>
</head>
<body>
    <div class="block" id="block"></div>
    <script>
        const block = document.getElementById('block');
        
        // Change block to square on click
        block.addEventListener('click', () => {
            block.classList.toggle('square');
        });
    </script>
</body>
</html>

