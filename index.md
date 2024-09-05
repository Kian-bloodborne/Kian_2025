---
layout: base
title: Student Home 
description: Home Page
hide: true
---

### Markdown samples.[markdown cheatsheet](https://www.markdownguide.org/getting-started/)
Using markdown form index.md. We are learning markdwon


-This text below is something called Marked.This is a heading, inside of code scaffolding.

```markdown
##Investing in Your Tecnical Future
```
-This is emphasis

```markdown
> Explore the Computer Science Pathway at Del Norte High School and invest in your technical skills. 
 All Del Norte CompSci classes are designed to provide a real-world development experience. Class time includes tech talks (lectures), peer collaboration, communication with teachers, critical thinking while coding, and creativity in projects. Grading is focused on time invested, participation with peers, and engagement in learning.

-Sample of bullets

```bullets
- Introduction to concepts and requirements by the teacher
- Project-based learning with teacher support, performing Agile/Scrum development
- Coding, frontend, backend, devops, version control and algorithmic thinking
- Creativity, research, design, data structures, and utilizing ChatGPT
- Performing team work, team communication and collaboration, peer reviews/grading
- Focus on tehnical communications through project presentations and student led teaching
- Grades are on projects, learnt concepts, and live reviews between student(s) and teacher
```

Rest:
row: 0
col: 0
frames: 15
RestL:
row: 1
col: 0
frames: 15
Walk:
row: 2
col: 0
frames: 8
Tada:
row: 2
col: 11
frames: 3
WalkL:
row: 3
col: 0
frames: 8
TadaL:
row: 3
col: 11
frames: 3
Run1:
row: 4
col: 0
frames: 15
Run1L:
row: 5
col: 0
frames: 15
Run2:
row: 6
col: 0
frames: 15
Run2L:
row: 7
col: 0
frames: 15
Puff:
row: 8
col: 0
frames: 15
PuffL:
row: 9
col: 0
frames: 15
Cheer:
row: 10
col: 0
frames: 15
CheerL:
row: 11
col: 0
frames: 15
Flip:
row: 12
col: 0
frames: 15
FlipL:
row: 13
col: 0
frames: 15
index.md

{% include nav/home.html %}

{% assign sprite_file = site.baseurl | append: page.image %}

{% assign hash = site.data.mario_metadata %}

{% assign pixels = 256 %}

<style> /*CSS style rules for the id and class of the sprite... */ .sprite { height: {{pixels}}px; width: {{pixels}}px; background-image: url('{{sprite_file}}'); background-repeat: no-repeat; } /*background position of sprite element */ #mario { background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px); } </style> <script> ////////// convert YML hash to javascript key:value objects ///////// var mario_metadata = {}; //key, value object {% for key in hash %} var key = "{{key | first}}" //key var values = {} //values object values["row"] = {{key.row}} values["col"] = {{key.col}} values["frames"] = {{key.frames}} mario_metadata[key] = values; //key with values added {% endfor %} ////////// game object for player ///////// class Mario { constructor(meta_data) { this.tID = null; //capture setInterval() task ID this.positionX = 0; // current position of sprite in X direction this.currentSpeed = 0; this.marioElement = document.getElementById("mario"); //HTML element of sprite this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant this.interval = 100; //animation time interval this.obj = meta_data; this.marioElement.style.position = "absolute"; } animate(obj, speed) { let frame = 0; const row = obj.row * this.pixels; this.currentSpeed = speed; this.tID = setInterval(() => { const col = (frame + obj.col) * this.pixels; this.marioElement.style.backgroundPosition = `-${col}px -${row}px`; this.marioElement.style.left = `${this.positionX}px`; this.positionX += speed; frame = (frame + 1) % obj.frames; const viewportWidth = window.innerWidth; if (this.positionX > viewportWidth - this.pixels) { document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels; } }, this.interval); } startWalking() { this.stopAnimate(); this.animate(this.obj["Walk"], 3); } startRunning() { this.stopAnimate(); this.animate(this.obj["Run1"], 6); } startPuffing() { this.stopAnimate(); this.animate(this.obj["Puff"], 0); } startCheering() { this.stopAnimate(); this.animate(this.obj["Cheer"], 0); } startFlipping() { this.stopAnimate(); this.animate(this.obj["Flip"], 0); } startResting() { this.stopAnimate(); this.animate(this.obj["Rest"], 0); } stopAnimate() { clearInterval(this.tID); } } const mario = new Mario(mario_metadata); ////////// event control ///////// window.addEventListener("keydown", (event) => { if (event.key === "ArrowRight") { event.preventDefault(); if (event.repeat) { mario.startCheering(); } else { if (mario.currentSpeed === 0) { mario.startWalking(); } else if (mario.currentSpeed === 3) { mario.startRunning(); } } } else if (event.key === "ArrowLeft") { event.preventDefault(); if (event.repeat) { mario.stopAnimate(); } else { mario.startPuffing(); } } }); //touch events that enable animations window.addEventListener("touchstart", (event) => { event.preventDefault(); // prevent default browser action if (event.touches[0].clientX > window.innerWidth / 2) { // move right if (currentSpeed === 0) { // if at rest, go to walking mario.startWalking(); } else if (currentSpeed === 3) { // if walking, go to running mario.startRunning(); } } else { // move left mario.startPuffing(); } }); //stop animation on window blur window.addEventListener("blur", () => { mario.stopAnimate(); }); //start animation on window focus window.addEventListener("focus", () => { mario.startFlipping(); }); //start animation on page load or page refresh document.addEventListener("DOMContentLoaded", () => { // adjust sprite size for high pixel density devices const scale = window.devicePixelRatio; const sprite = document.querySelector(".sprite"); sprite.style.transform = `scale(${0.2 * scale})`; mario.startResting(); }); </script>

<style>
    /* Style looks pretty compact, trace grid-container and grid-item in the code */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }
</style>

<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "0/01/Flag_of_California.svg", "greeting": "Hey", "description": "California - forever"},
        {"flag": "b/b9/Flag_of_Oregon.svg", "greeting": "Hi", "description": "Oregon - 9 years"},
        {"flag": "b/be/Flag_of_England.svg", "greeting": "Alright mate", "description": "England - 2 years"},
        {"flag": "e/ef/Flag_of_Hawaii.svg", "greeting": "Aloha", "description": "Hawaii - 2 years"},
    ]; 
    
    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the descriptios
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);
     

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

Classroom work time is 3-4 hours per week. Homework expectations are approximately 2-3 hours per week.  Homework is scheduled over a Sprint, approximately 2-4 weeks.  Time lost is extremely hard to make up as all materials are cummulative.


New Kasm Test 

My journey starts here - Kickin' Projects 2.3
