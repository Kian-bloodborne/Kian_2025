export default class GameAssets {
    constructor() {
        this.assets = {
            image: this.loadBackground(),
            sprite: this.loadSprite(),
        };
    }

    loadBackground() {
        return {
            src: "assets/images/background.png",
            data: { pixels: { height: 580, width: 1038 } },
        };
    }

    loadSprite() {
        return {
            src: "assets/images/turtle.png",
            data: {
                SCALE_FACTOR: 10,
                STEP_FACTOR: 1000,
                ANIMATION_RATE: 50,
                pixels: { height: 280, width: 256 },
                orientation: { rows: 4, columns: 3 },
                down: { row: 0, start: 0, columns: 3 },
                left: { row: 1, start: 0, columns: 3 },
                right: { row: 2, start: 0, columns: 3 },
                up: { row: 3, start: 0, columns: 3 },
            },
        };
    }

    getAssets() {
        return this.assets;
    }
}
