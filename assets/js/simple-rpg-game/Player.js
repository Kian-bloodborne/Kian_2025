export default class Player {
    constructor(sprite) {
        this.sprite = sprite;
        this.position = { x: 0, y: 0 };
    }

    move(direction) {
        switch (direction) {
            case 'up':
                this.position.y -= 10;
                break;
            case 'down':
                this.position.y += 10;
                break;
            case 'left':
                this.position.x -= 10;
                break;
            case 'right':
                this.position.x += 10;
                break;
        }
    }

    draw(ctx) {
        const { src, data } = this.sprite;
        const img = new Image();
        img.src = src;
        img.onload = () => {
            ctx.drawImage(img, this.position.x, this.position.y, data.pixels.width * data.SCALE_FACTOR, data.pixels.height * data.SCALE_FACTOR);
        };
    }
}
