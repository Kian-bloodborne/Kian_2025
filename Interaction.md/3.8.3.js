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
    <p>Create a for loop that iterates through your name and prints each letter. Here's an example:</p>

    <pre><code>&lt;script&gt;
    const name = "YourName";
    let output = '';

    for (let i = 0; i &lt; name.length; i++) {
        output += name[i] + '&lt;br&gt;'; // Append each letter with a line break
    }

    document.getElementById('output').innerHTML = output;
    &lt;/script&gt;</code></pre>

    <div id="output"></div>

    <script>
        const name = "ChatGPT";
        let output = '';

        for (let i = 0; i < name.length; i++) {
            output += name[i] + '<br>'; // Append each letter with a line break
        }

        document.getElementById('output').innerHTML = output;
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
