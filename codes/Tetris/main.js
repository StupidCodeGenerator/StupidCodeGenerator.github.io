var WORLD_WIDTH_B = 10;
var WORLD_HEIGHT_B = 20;
var BLOCK_SIZE = 32;  // default, can be modified by screen size

var brickDisplay;


function init(){
    BLOCK_SIZE = (canvas.height / WORLD_HEIGHT_B) * 0.8;
    brickDisplay = new BrickDisplay(canvas.width / 2 - (WORLD_WIDTH_B * BLOCK_SIZE) / 2, 20, 10, 20, 30);
}

function update(){
    context.save();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();
    context.stroke();
    context.restore();

    brickDisplay.Draw();
}