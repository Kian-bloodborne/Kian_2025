---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---

## Home Hello

This blog contains my journey into Coding.

### Development Environment

> Coding starts with tools, explore these tools and procedures with a click.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://github.com/Kian-bloodborne/Kian_2025.git">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
    </a>
    <a href="https://github.com/Kian-bloodborne/Kian_2025.git">
        <img src="https://img.shields.io/badge/GitHub%20Pages-327FC7?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
    </a>
    <a href="https://kasm.nighthawkcodingsociety.com/">
        <img src="https://img.shields.io/badge/KASM-0078D4?style=for-the-badge&logo=kasm&logoColor=white" alt="KASM">
    </a>
    <a href="{{site.baseurl}}/kasm/quick/setup">
        <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" alt="Ubuntu">
    </a>
    <a href="https://vscode.dev/">
        <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VSCode">
    </a>
</div>

<br>

### Game Progress

> Here is my progress through game coding, click to see these online

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/snake" style="text-decoration: none;">
        <div style="background-color: #00FF00; color: blue; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Snake Game
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg/dot0" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: red; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.0(Broken)
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg/dot1" style="text-decoration: none;">
        <div style="background-color: #FF8800; color: red; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.1(Broken)
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg/dot2" style="text-decoration: none;">
        <div style="background-color: #FFFF00; color: gold; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.2(Broken)
        </div>
    </a>
        <a href="{{site.baseurl}}/rpg/latest" style="text-decoration: none;">
        <div style="background-color: #FFFF00; color: gold; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.3
        </div>
    </a>
</div>

<br>

### College Articulation

> Here is my preparation for college topics, click to review my blogs

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/variables" style="text-decoration: none;">
        <div style="background-color: #000000; color: red; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Variables I/O
        </div>
    </a>
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/data-types/" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Data Types
        </div>
    </a>
</div>#What I want to do 

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

%%js

/* Primitive Data Types
These are data types that store a single value.
*/

// Number: Represents numerical values, such as health and speed
let health = 100; // Integer
let playerSpeed = 5.75; // Float representing the player's speed

console.log("Health (Number):", health, "Type:", typeof health);
console.log("Player Speed (Number):", playerSpeed, "Type:", typeof playerSpeed);

// String: Represents text, such as the user's name or keypress
let userName = "Hero123"; // User name
let keyPress = 'a'; // Keypress

console.log("User Name (String):", userName, "Type:", typeof userName);
console.log("Key Press (String):", keyPress, "Type:", typeof keyPress);

// Compare single character to its ASCII value
let asciiValue = keyPress.charCodeAt(0);
console.log("ASCII Value of Key Press:", asciiValue, "Type:", typeof asciiValue);
console.log("Is Key Press 'a' (ASCII 97)?", asciiValue === 97);

// Boolean: Represents true/false values, such as isAlive
let isAlive = true;

console.log("Is Alive (Boolean):", isAlive, "Type:", typeof isAlive);

// Undefined: Represents a variable that has been declared but not yet assigned a value
let questReward;

console.log("Quest Reward (Undefined):", questReward, "Type:", typeof questReward);

// Null: Represents the intentional absence of any object value, such as an empty inventory slot
let inventorySlot = null;

console.log("Inventory Slot (Null):", inventorySlot, "Type:", typeof inventorySlot);

// Symbol: Represents a unique and immutable value, often used as unique identifiers for game objects
let uniqueID = Symbol('playerID');

console.log("Unique ID (Symbol):", uniqueID, "Type:", typeof uniqueID);

// BigInt: Represents very large integers, such as the total time played in milliseconds
let totalTimePlayed = 1234567890123456789012345678901234567890n;

console.log("Total Time Played (BigInt):", totalTimePlayed, "Type:", typeof totalTimePlayed);

/* Reference Data Types
These are data types that store references to memory locations.
*/

// Object: Represents a collection of key-value pairs, such as player attributes or game settings
let playerAttributes = {
  name: "Hero123",
  health: 100,
  mana: 50
};

console.log("Player Attributes (Object):", playerAttributes, "Type:", typeof playerAttributes);

// Array: Represents an ordered collection of values, such as a list of high scores or inventory items
let highScores = [1500, 1200, 900, 600, 300];

console.log("High Scores (Array):", highScores, "Type:", typeof highScores);

// Function: Represents a block of code designed to perform a specific task, such as attacking an enemy or saving the game
function attackEnemy() {
  console.log("Enemy attacked!");
}

console.log("Attack Enemy (Function):", attackEnemy, "Type:", typeof attackEnemy);
attackEnemy();
<IPython.core.display.Javascript object>





Popcorn Hack 2
Make a code cell that changes block into a square, versus HD resolution
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scaling Square Block</title>
    <style>
        body {
            background-color: blue; /* Set the background color of the body */
            color: white;
            text-align: center;
            padding: 20px;
        }
        #container {
            position: relative;
            width: 100%;
            height: 100vh; /* Full viewport height */
            overflow: hidden; /* Ensure no overflow */
        }
        #block {
            position: absolute;
            background-color: red;
            left: 50%; /* Center horizontally */
            top: 50%; /* Center vertically */
            transform: translate(-50%, -50%); /* Adjust for block size */
        }
    </style>
</head>
<body>
    <p>This example uses data types, operators, and functions to scale a square block based on a user-defined width.</p>

    <!-- Input definitions -->
    <div>
        <label for="width">Enter Width (1280, 1920, 2560, 3840):</label>
        <input type="number" id="width" name="width" min="1280" max="3840" step="640" value="1280">
        <button onclick="submitScale()">Submit</button>
    </div>

    <!-- Document Object Model (DOM) output locations -->
    <div id="output"></div>
    <div id="error"></div>

    <!-- Block display -->
    <div id="container">
        <div id="block" style="width: 0px; height: 0px;"></div>
    </div>

    <script>
        // Function to validate and output the scale value
        function submitScale() {
            const BLOCK_SCALE_DIVISOR = 20;
            let block = document.getElementById('block');
            let width = parseInt(document.getElementById('width').value);
            
            // Restrict sizes to common HD resolutions
            if (width === 1280 || width === 1920 || width === 2560 || width === 3840) {
                // Set the block size to be equal to the width
                let blockSize = width / BLOCK_SCALE_DIVISOR;

                // Set/clear error messages when the value is valid
                document.getElementById('error').innerHTML = "";
                document.getElementById('output').innerHTML = "Scale set to: " + width + " x " + width + " (Block size: " + blockSize + "px)";
                
                // Adjust the size of the block
                block.style.width = blockSize + "px";
                block.style.height = blockSize + "px"; // Make it square
                
            } else {
                // Set/clear output messages when there is an error
                document.getElementById('output').innerHTML = "";
                document.getElementById('error').innerHTML = "Invalid HD resolution: " + width;

                // Clear the block size
                block.style.width = "0px";
                block.style.height = "0px";
            }
            console.error("HD resolution:", block.style.width, "x", block.style.height);
        }
    </script>
</body>
</html>



Popcorn Hack 3
Try to place a square in every corner.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Squares in Every Corner</title>
</head>
<body>
    <p>This example uses data types, operators, and functions to scale blocks based on a user-defined width.</p>

    <!-- Input definitions -->
    <div>
        <label for="widthCanvas">Enter Width (1280, 1920, 2560, 3840):</label>
        <input type="number" id="widthCanvas" name="widthCanvas" min="1280" max="3840" step="640" value="1280">
        <button onclick="submitScaleImg()">Submit</button>
    </div>

    <!-- Document Object Model (DOM) output locations -->
    <div id="outputMsg"></div>
    <div id="errorMsg"></div>

    <!-- Canvas for background display -->
    <canvas id="canvas"></canvas>

    <script>
        // Function to validate and output the scale value
        function submitScaleImg() {
            const BLOCK_SCALE_DIVISOR = 20;
            const ASPECT_RATIO = 9 / 16;
            const SCALE_DOWN_FACTOR = 0.5;
            let canvas = document.getElementById('canvas');
            let c = canvas.getContext('2d');
            let width = parseInt(document.getElementById('widthCanvas').value);
            
            // Restrict sizes to common HD resolutions
            if (width === 1280 || width === 1920 || width === 2560 || width === 3840) {
                // Calculate height based on 16:9 aspect ratio
                let height = Math.round(width * ASPECT_RATIO);
                
                // Set the canvas dimensions
                canvas.width = width * SCALE_DOWN_FACTOR;
                canvas.height = height * SCALE_DOWN_FACTOR;

                // Calculate block size as 1/20th of the scale dimensions
                let blockSize = Math.min(width, height) / BLOCK_SCALE_DIVISOR;

                // Set/clear error messages when the value is valid
                document.getElementById('errorMsg').innerHTML = "";
                document.getElementById('outputMsg').innerHTML = "Scale set to: " + width + " x " + height + " (Block size: " + blockSize + "px)";
                
                // Clear the canvas before drawing
                c.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw squares in each corner
                c.fillStyle = 'red';
                c.fillRect(0, 0, blockSize, blockSize); // Top-left corner
                c.fillRect(canvas.width - blockSize, 0, blockSize, blockSize); // Top-right corner
                c.fillRect(0, canvas.height - blockSize, blockSize, blockSize); // Bottom-left corner
                c.fillRect(canvas.width - blockSize, canvas.height - blockSize, blockSize, blockSize); // Bottom-right corner
                
            } else {
                // Set/clear output messages when there is an error
                document.getElementById('outputMsg').innerHTML = "";
                document.getElementById('errorMsg').innerHTML = "Invalid HD resolution: " + width;

                // Clear the canvas
                c.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
    </script>
</body>
</html>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>While Loop Example</title>
</head>
<body>
    <script>
        let counter = 5;
        while (counter > 0) {
            console.log("Hello");
            counter--;
        }
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For Loops in JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
        }
        h1, h2 {
            color: #333;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
        }
        #output {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Understanding For Loops</h1>
    <h2>Overview</h2>
    <p>For loops can be used to iterate through a list, a range of numbers, or a string. This is particularly useful for accessing each element in these collections.</p>

    <h2>Looping Through a String</h2>
    <p>Here’s how you can use a for loop to print each letter of a string:</p>
    <pre><code>for (let letter of "teststring") {
    console.log(letter);
}</code></pre>
    <p>This will output:</p>
    <pre><code>t
e
s
t
s
t
r
i
n
g</code></pre>

    <h2>Practice Exercise: Print Your Name</h2>
    <p>Click the button below to print each letter of your name, "Kian," multiple times:</p>
    <button id="submitBtn">Print My Name</button>

    <div id="output"></div>

    <script>
        document.getElementById('submitBtn').addEventListener('click', function() {
            const name = "Kian"; // Your name
            let output = '';

            for (let i = 0; i < name.length; i++) {
                output += name[i] + '<br>'; // Append each letter with a line break
            }

            // Repeat the name 5 times (you can change this number)
            output = output.repeat(5);

            document.getElementById('output').innerHTML = output;
        });
    </script>

    <script src="https://utteranc.es/client.js"
            repo="nighthawkcoders/portfolio_2025"
            issue-term="title"
            label="blogpost-comment"
            theme="github-light"
            crossorigin="anonymous"
            async>
    </script>
</body>
</html>
