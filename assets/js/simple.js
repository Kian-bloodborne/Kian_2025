 // Player 1 sprite data (turtle)
    const TURTLE_SCALE_FACTOR = 10;
    const sprite_src_turtle = path + "/images/rpg/.png";
    const sprite_data_turtle = {
        name: 'turtle',
        src: sprite_src_turtle,
        SCALE_FACTOR: TURTLE_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/TURTLE_SCALE_FACTOR) }, 
        pixels: {height: 280, width: 256},
        orientation: {rows: 0, start: 1, columns: 1  },
    };
