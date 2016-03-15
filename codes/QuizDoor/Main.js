// Main.js
// It contains the ChessBoard object, the AgentManager object.
// And it manages the UI system of the game.



// Debug info. Remove that after the game is finished
msgMousePos = '';
msgGridIndex = ''

// Units that make up the game
manager = new Manager();
chessboard = new Chessboard(25, 50, 30);
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
        // draw lines to represent the walls
        context.strokeStyle = 'red';
        for(i = 0 ; i < manager.aiAgent.numOfRemainingWalls + 1; i++){
            context.moveTo(chessboard.x + i * chessboard.gridSize, chessboard.y - 5);
            context.lineTo(chessboard.x + i * chessboard.gridSize, chessboard.y - chessboard.gridSize);
        }
        for(i = 0 ; i < manager.humanAgent.numOfRemainingWalls + 1; i++){
            context.moveTo(chessboard.x + i * chessboard.gridSize, chessboard.y + chessboard.height + 5);
            context.lineTo(chessboard.x + i * chessboard.gridSize, chessboard.y + chessboard.height + 5 + chessboard.gridSize);
        }
        if(manager.humanAgent.state == 'CHESSMAN_CLICKED'){
            chessmanHuman.drawArrows(manager.humanAgent.gridX, manager.humanAgent.gridY);
        }
        writeMessage(canvas, manager.currentAgent.type, 10, 440);
    }

    // debug info
    writeMessage(canvas, msgMousePos, 10, 400);
    writeMessage(canvas, msgGridIndex, 10, 420);
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
                } else if (mouseX >= chessboard.x && 
                    mouseX <= chessboard.x + chessboard.width &&
                    mouseY >= chessboard.y + 5 &&
                    mouseY <= chessboard.y + 5 + chessboard.gridSize
                ){
                    hAgent.state = 'WALL_CLICKED';
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