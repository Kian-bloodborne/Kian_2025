---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id='gameCanvas'></canvas>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg/GameControl.js';

    class GameAssets {
        constructor() {
            this.assets = {
                image: this.loadBackground(),
                sprite: this.loadSprite(),
            };
        }

        loadBackground() {
            const image_src = "{{site.baseurl}}/images/rpg/background.png";
            const image_data = {
                pixels: { height: 580, width: 1038 }
            };
            return { src: image_src, data: image_data };
        }

        loadSprite() {
            const sprite_src = "{{site.baseurl}}/images/rpg/turtle.png";
            const sprite_data = {
                SCALE_FACTOR: 10,
                STEP_FACTOR: 1000,
                ANIMATION_RATE: 50,
                pixels: { height: 280, width: 256 },
                orientation: { rows: 4, columns: 3 },
                down: { row: 0, start: 0, columns: 3 },
                left: { row: 1, start: 0, columns: 3 },
                right: { row: 2, start: 0, columns: 3 },
                up: { row: 3, start: 0, columns: 3 },
            };
            return { src: sprite_src, data: sprite_data };
        }

        getAssets() {
            return this.assets;
        }
    }

    // Initialize game assets and start the game
    const gameAssets = new GameAssets();
    GameControl.start(gameAssets.getAssets());
</script>
