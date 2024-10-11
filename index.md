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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scaling Block</title>
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
    <p>This example uses data types, operators, and functions to scale a block based on a user-defined width.</p>

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
            const ASPECT_RATIO = 9 / 16;
            let block = document.getElementById('block');
            let width = parseInt(document.getElementById('width').value);
            
            // Restrict sizes to common HD resolutions
            if (width === 1280 || width === 1920 || width === 2560 || width === 3840) {
                // Calculate height based on 16:9 aspect ratio
                let height = Math.round(width * ASPECT_RATIO);
                
                // Calculate block size as 1/20th of the scale dimensions
                let blockSize = Math.min(width, height) / BLOCK_SCALE_DIVISOR;

                // Set/clear error messages when the value is valid
                document.getElementById('error').innerHTML = "";
                document.getElementById('output').innerHTML = "Scale set to: " + width + " x " + height + " (Block size: " + blockSize + "px)";
                
                // Adjust the size of the block
                block.style.width = blockSize + "px";
                block.style.height = (blockSize * ASPECT_RATIO) + "px";
                
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




Popcorn Hack 2
Make a code cell that changes block into a square, versus HD resolution
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scaling Block</title>
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
    <p>This example uses data types, operators, and functions to scale a block based on a user-defined width.</p>

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
            const ASPECT_RATIO = 9 / 16;
            let block = document.getElementById('block');
            let width = parseInt(document.getElementById('width').value);
            
            // Restrict sizes to common HD resolutions
            if (width === 1280 || width === 1920 || width === 2560 || width === 3840) {
                // Calculate height based on 16:9 aspect ratio
                let height = Math.round(width * ASPECT_RATIO);
                
                // Calculate block size as 1/20th of the scale dimensions
                let blockSize = Math.min(width, height) / BLOCK_SCALE_DIVISOR;

                // Set/clear error messages when the value is valid
                document.getElementById('error').innerHTML = "";
                document.getElementById('output').innerHTML = "Scale set to: " + width + " x " + height + " (Block size: " + blockSize + "px)";
                
                // Adjust the size of the block
                block.style.width = blockSize + "px";
                block.style.height = (blockSize * ASPECT_RATIO) + "px";
                
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


