import GameEnv from './GameEnv.js';

export class Background {
    constructor(imageSrc = null) {
        if (imageSrc) {
            this.image = new Image();
            this.image.src = imageSrc.src;
        } else {
            this.image = null;
        }
    }

    /* To draws are used to capture primary frame and wrap around to next frame
     * x to y is primary draw
     * x + width to y is wrap around draw
    */
    draw() {
        const ctx = GameEnv.ctx;
        const width = GameEnv.innerWidth;
        const height = GameEnv.innerHeight;

        if (this.image) {
            // Draw the background image scaled to the canvas size
            ctx.drawImage(this.image, 0, 0, width, height);
        } else {
            // Fill the canvas with white if no background image is provided
            ctx.fillStyle = '#87CEEB';
            ctx.fillRect(0, 0, width, height);
        }
    }
}

export default Background;

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website</title>
</head>
<body>
    <h1>Welcome to My Website</h1>

    <audio autoplay loop>
        <source src="path/to/your-music-file.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
    </audio>

</body>
</html>

