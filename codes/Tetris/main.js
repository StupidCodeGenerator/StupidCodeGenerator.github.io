WORLD_WIDTH_B = 10;
WORLD_HEIGHT_B = 20;
BLOCK_SIZE = 32;  // default, can be modified by screen size

var testCube;
var background;

function init(){
    BLOCK_SIZE = (canvas.height / WORLD_HEIGHT_B) * 0.8;
    testCube = new Cube(0, 30, 30, BLOCK_SIZE, "red");
    background = new Background(canvas.width / 2, canvas.height/2, WORLD_WIDTH_B, WORLD_HEIGHT_B, BLOCK_SIZE);
}

function update(){
    context.save();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();
    context.stroke();
    context.restore();

    background.draw();
    testCube.draw();
}