import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';

/**
 * The GameControl object manages the game.
 */
const GameControl = {
    audio: null,

    start: function(assets = {}) {
        GameEnv.create(); // Create the Game World
        this.background = new Background(assets.image || null);
        this.player = new Player(assets.sprite || null);

        // Initialize and play background music if a source is provided
        if (assets.music) {
            this.audio = new Audio(assets.music);
            this.audio.loop = true; // Loop the music
            this.audio.volume = 0.5; // Set volume (0.0 to 1.0)
            this.audio.play().catch(error => {
                console.error("Audio playback failed: ", error);
            });
        }

        this.gameLoop();
    },

    gameLoop: function() {
        GameEnv.clear(); // Clear the canvas
        this.background.draw();
        this.player.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    },

    resize: function() {
        GameEnv.resize(); // Resize the canvas
        this.player.resize();
    },

    // Add methods to control music
    playMusic: function() {
        if (this.audio) {
            this.audio.play();
        }
    },

    pauseMusic: function() {
        if (this.audio) {
            this.audio.pause();
        }
    },

    setVolume: function(volume) {
        if (this.audio) {
            this.audio.volume = volume;
        }
    }
};

// Detect window resize events and call the resize function.
window.addEventListener('resize', GameControl.resize.bind(GameControl));

export default GameControl;
