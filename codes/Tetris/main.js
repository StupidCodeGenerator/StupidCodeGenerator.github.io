var WORLD_WIDTH_B = 10;
var WORLD_HEIGHT_B = 20;
var BLOCK_SIZE = 32;  // default, can be modified by screen size

var brickDisplay;


function init(){
    BLOCK_SIZE = (canvas.height / WORLD_HEIGHT_B) * 0.8;
    brickDisplay = new BrickDisplay(canvas.width / 2 - (WORLD_WIDTH_B * BLOCK_SIZE) / 2, 20, 10, 20, 30);
}

function update(){

    // 1. Check if it's the fall frame, run the fall logic
    // 2. If it's not the fall frame, check rotation if possible.
    //    "Possible" means that after that rotation, all brick will be in 
    //    empty space, not collide.
    // 3. Kick wall. It just try 4 other postion (+/- 1). if any of it works,
    //    it will success. if any of that fails. it will fail
    //    However, if the rotation just success, it success.
    // 4. It's half second lock, after touch the ground. It's not frame counted.

    // How do we display the bricks?
    // There should be 2 layers. 1 is the dead bricks. the other is the active layer.

    context.save();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();
    context.stroke();
    context.restore();

    brickDisplay.Draw();
}