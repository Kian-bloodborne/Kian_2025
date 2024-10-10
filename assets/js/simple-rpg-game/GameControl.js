import GameAssets from './GameAssets.js';
import Player from './Player.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 1038;
canvas.height = 580;

const gameAssets = new GameAssets();
const assets = gameAssets.getAssets();
const player = new Player(assets.sprite);

const background = new Image();
background.src = assets.image.src;

// Draw background and player in the game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, assets.image.data.pixels.width, assets.image.data.pixels.height);
    player.draw(ctx);
}

document.addEventListener('keydown', (event) => {
    const keyMap = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
    };

    if (keyMap[event.key]) {
        player.move(keyMap[event.key]);
        gameLoop();
    }
});

// Start the game loop after the background is loaded
background.onload = () => {
    gameLoop();
};
