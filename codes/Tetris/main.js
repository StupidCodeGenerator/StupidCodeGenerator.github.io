var WORLD_WIDTH_B = 10;
var WORLD_HEIGHT_B = 20;
var BLOCK_SIZE = 32;  // default, can be modified by screen size

var testCube;

var background;

function init(){
    BLOCK_SIZE = (canvas.height / WORLD_HEIGHT_B) * 0.8;
}

function update(){
    context.save();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();
    context.stroke();
    context.restore();
}