BOARD_LEFT_X = 25;
BOARD_TOP_Y = 25;
BOARD_GRID_SIZE = 30

chessboard = new Chessboard(BOARD_LEFT_X, BOARD_TOP_Y, BOARD_GRID_SIZE)
chesswall = new Chesswall(2, 5, BOARD_GRID_SIZE, HORIZONTAL, BOARD_LEFT_X, BOARD_TOP_Y);
chessman1 = new Chessman(4, 0, BOARD_LEFT_X, BOARD_TOP_Y, BOARD_GRID_SIZE, 'yellow');
chessman2 = new Chessman(4, 8, BOARD_LEFT_X, BOARD_TOP_Y, BOARD_GRID_SIZE, 'blue');

msgMousePos = '';
msgGridIndex = ''

function update(){
}

function render(){
    // Clear the screen
    context.save();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();
    context.stroke();
    context.restore();
    // the main paint process
    chessboard.draw();
    chesswall.draw();
    chessman1.draw();
    chessman2.draw();
    // debug info
    writeMessage(canvas, msgMousePos, 10, 350);
    writeMessage(canvas, msgGridIndex, 10, 370);
}

function onClick(mouseX, mouseY){
    msgMousePos = 'Mouse position: ' + mouseX + ',' + mouseY;
    var gridX = Math.floor((mouseX - BOARD_LEFT_X) / BOARD_GRID_SIZE);
    var gridY = Math.floor((mouseY - BOARD_TOP_Y) / BOARD_GRID_SIZE);
    if(gridX < 0 || gridY < 0 || gridX > 8 || gridY > 8){
        msgGridIndex = "Out";
    } else {
        msgGridIndex = "Grid("+gridX+","+gridY+")";
    }
}