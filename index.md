---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---



<!-- Liquid: statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav/home.html %}
<!-- Concatenation of site URL to frontmatter image -->
{% assign sprite_file = site.baseurl | append: page.image %}
<!-- Has a list variable containing Mario metadata for sprite -->
{% assign hash = site.data.mario_metadata %}
<!-- Size width/height of sprite images -->
{% assign pixels = 256 %}

<!-- HTML for page contains <p> tag named "Mario" -->
<p id="mario" class="sprite"></p>

<!-- Embedded CSS rules -->
<style>
  .sprite {
    height: {{ pixels }}px;
    width: {{ pixels }}px;
    background-image: url('{{ sprite_file }}');
    background-repeat: no-repeat;
    position: absolute; /* Ensure sprite is positioned absolutely */
  }

  #mario {
    background-position: calc({{ hash.Walk.col }} * {{ pixels }} * -1px) calc({{ hash.Walk.row }} * {{ pixels }} * -1px);
  }
</style>

<!-- Embedded executable code -->
<script>
  var mario_metadata = {};
  {% for key in hash %}
    mario_metadata["{{ key | first }}"] = {
      row: {{ key.row }},
      col: {{ key.col }},
      frames: {{ key.frames }}
    };
  {% endfor %}

  class Mario {
    constructor(meta_data) {
      this.tID = null;
      this.positionX = 0;
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario");
      this.pixels = {{ pixels }};
      this.interval = 100; // Animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  // Event control
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        mario.currentSpeed === 0 ? mario.startWalking() : mario.startRunning();
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      mario.startPuffing();
    }
  });

  window.addEventListener("touchstart", (event) => {
    event.preventDefault();
    if (event.touches[0].clientX > window.innerWidth / 2) {
      mario.currentSpeed === 0 ? mario.startWalking() : mario.startRunning();
    } else {
      mario.startPuffing();
    }
  });

  window.addEventListener("blur", () => mario.stopAnimate());
  window.addEventListener("focus", () => mario.startFlipping());

  document.addEventListener("DOMContentLoaded", () => {
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });
</script>

## Investing in Your Technical Future

Computer Science is the Wild Card for all Majors and Careers.

> Explore the Computer Science Pathway at Del Norte High School and invest in your technical skills.

<div style="display: flex; align-items: flex-start;">
<table>
<tr>
  <td>
    <div style="flex: 65%; text-align: left;">
      <p>All Del Norte CompSci classes are designed to provide real-world development experiences.</p>
      <ul>
        <li>Project talks between teachers and students</li>
        <li>Teaching through Tech talks (versus lectures)</li>
        <li>Peer collaboration using GitHub Issues and Kanban boards</li>
        <li>Critical thinking while performing iterative coding</li>
        <li>Creativity and designs in projects, as well as code</li>
      </ul>
    </div>
  </td>
  <td>
    <div style="flex: 35%; text-align: center;">
      <img src="{{ site.baseurl }}/images/course-brag/qr.png" alt="QR Code" style="width: 100%; max-width: 300px; height: auto; margin-left: 10px;">
    </div>
  </td>
</tr>
</table>
</div>

## Project-Based Learning

Grades are based on projects, time invested, engagement, learned concepts, participation with peers, and live reviews between student(s) and teacher.

- Performing Agile/Scrum development
- Coding, frontend, backend, devops, version control, and algorithmic thinking
- Creativity, research, design, data structures, and utilizing ChatGPT
- Performing teamwork, team communication, collaboration, peer reviews/grading
- Focus on technical communications through project presentations and student-led teaching

![ccr]({{ site.baseurl }}/images/course-brag/ccr.png)

## Computer Science and Software Engineering (CSSE) 1,2; Grades 9-12

CSSE 1,2 prepares students for the AP Computer Science pathway. This course focuses on teaching the JavaScript programming language, object-oriented programming, and developing algorithmic thinking skills.

- **Prerequisites**: None
- **Meets UC/CSU G requirements**
- **Articulated College Credit** to Mira Costa CC CS 111: "Introduction to Computer Science".

![csse]({{ site.baseurl }}/images/course-brag/csse.png)

## Computer Science Principles 1,2 and Data Structures 1; Grades 10-12

Computer Science Principles is designed as a college-level introduction to computer science. This course covers creative development, data, algorithms, and the impact of computing.

- **Prerequisites**:
  - Rising 10th graders: CSSE 1,2
  - Rising 11th-12th graders: GPA above 3.5 and expectation of experience with JavaScript or other languages

![csp]({{ site.baseurl }}/images/course-brag/csp24.png)

## Computer Science "A" 1,2 and Data Structures 2; Grades 11-12

AP Computer Science A focuses on programming, algorithms, and data structures, covering the Java programming language and topics such as fundamentals of programming and inheritance.

- **Prerequisites**:
  - Rising 11th or 12th graders: CS Principles 1,2 and Data Structures 1
  - Or teacher recommendation with an understanding of JavaScript, OOP, and Linux

![csa]({{ site.baseurl }}/images/course-brag/csa24.png)

![foundation]({{ site.baseurl }}/images/course-brag/foundation.png)
