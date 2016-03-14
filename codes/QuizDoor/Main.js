// Main.js
// It will read the infos in manager an shows that



// Debug info. Remove that after the game is finished
msgMousePos = '';
msgGridIndex = ''

// Units that make up the game
manager = new Manager();
chessboard = new Chessboard(25, 25, 30);
chessmanAI = new Chessman(chessboard.x, chessboard.y, chessboard.gridSize, 'yellow');
chessmanHuman = new Chessman(chessboard.x, chessboard.y, chessboard.gridSize, 'blue');



currentState = 'NONE';

function mainInit(){
    currentState = 'PLAY';
    manager.startNewRound();
}

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
    // Infos in manager
    if(currentState == 'PLAY'){
        chessboard.draw();
        chessmanAI.draw(manager.aiAgent.gridX, manager.aiAgent.gridY);
        chessmanHuman.draw(manager.humanAgent.gridX, manager.humanAgent.gridY);
        if(manager.humanAgent.state == 'CHESSMAN_CLICKED'){
            chessmanHuman.drawArrows(manager.humanAgent.gridX, manager.humanAgent.gridY);
        }
        writeMessage(canvas, manager.currentAgent.type, 10, 390);
    }

    // debug info
    writeMessage(canvas, msgMousePos, 10, 350);
    writeMessage(canvas, msgGridIndex, 10, 370);
}

// It will translate the mouse click into manager's operations
// Mainly about the human agent's operations
function onClick(mouseX, mouseY){
    // Mouse test
    msgMousePos = 'Mouse position: ' + mouseX + ',' + mouseY;
    var gridX = Math.floor((mouseX - chessboard.x) / chessboard.gridSize);
    var gridY = Math.floor((mouseY - chessboard.y) / chessboard.gridSize);
    if(gridX < 0 || gridY < 0 || gridX > 8 || gridY > 8){
        msgGridIndex = "Out";
    } else {
        msgGridIndex = "Grid("+gridX+","+gridY+")";
    }
    // State opeartions
    if(currentState == 'PLAY'){
        onClickOfPlayState(mouseX, mouseY)
    }
}

function onClickOfPlayState(mouseX, mouseY){
    var gridX = Math.floor((mouseX - chessboard.x) / chessboard.gridSize);
    var gridY = Math.floor((mouseY - chessboard.y) / chessboard.gridSize);
    // Translate the player's operation into humanAgent's behavior
    if(manager.currentAgent.type == 'HUMAN'){
        var hAgent = manager.humanAgent;
        switch(hAgent.state){
            case 'WAIT':
                // Clicked on the chessman to show arrow,
                // Clicked on the wall to pick a wall
                if(gridX == hAgent.gridX && gridY == hAgent.gridY){ 
                    hAgent.state = 'CHESSMAN_CLICKED';
                }
                break;
            case 'CHESSMAN_CLICKED':
                if(gridX == hAgent.gridX - 1 && gridY == hAgent.gridY){
                    if(hAgent.gridX > 0){
                        var behavior = new Object();
                        behavior.type = 'MOVE_LEFT';
                        manager.callBack(behavior);
                        hAgent.state = 'WAIT';
                    }
                } else if (gridX == hAgent.gridX + 1 && gridY == hAgent.gridY){
                    if(hAgent.gridX < 8){
                        var behavior = new Object();
                        behavior.type = 'MOVE_RIGHT';
                        manager.callBack(behavior);
                        hAgent.state = 'WAIT';
                    }
                } else if (gridX == hAgent.gridX && gridY == hAgent.gridY - 1){
                    if(hAgent.gridY > 0){
                        var behavior = new Object();
                        behavior.type = 'MOVE_UP';
                        manager.callBack(behavior);
                        hAgent.state = 'WAIT';
                    }
                } else if (gridX == hAgent.gridX && gridY == hAgent.gridY + 1){
                    if(hAgent.gridY < 8){
                        var behavior = new Object();
                        behavior.type = 'MOVE_DOWN';
                        manager.callBack(behavior);
                        hAgent.state = 'WAIT';
                    }
                } else {
                    manager.humanAgent.state = 'WAIT';
                }
                break;
            case 'WALL_CLICKED':
                break;
        }
    }
}

function onMove(mouseX, mouseY){
    var gridX = Math.floor((mouseX - chessboard.x) / chessboard.gridSize);
    var gridY = Math.floor((mouseY - chessboard.y) / chessboard.gridSize);
    chessmanHuman.onMouseMove(gridX, gridY);
}