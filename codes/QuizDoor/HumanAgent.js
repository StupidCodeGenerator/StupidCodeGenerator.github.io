// HumanAgent.js

// There's only two agent's in this world so there's no need to use the inherition system.
// It will contains all the human operations.

function HumanAgent(){

	this.numOfRemainingWalls = 10;

	this.choosenWall = null;
	this.oldXOfChoosen = -1;
	this.oldYOfChoosen = -1;

	this.type = 'HUMAN';

	// All states are : 
	// 'WAIT' the program is waiting for the operation.
	// 'CHESSMAN_CLICKED' the chessman is clicked and waiting for move.
	// 'WALL_PICKED' a wall has been picked and waiting for placement.
	this.state = 'WAIT';

	// When this function is called, make the human control avaliable
	this.behaviorRequest = function(manager){ 
		manager.isHumanControlAvaliable = true;
	}


	this.onClick = function(mouseX, mouseY, game){
		
		var boardX = game.chessboard.x;
		var boardY = game.chessboard.y;
		var boardWidth = game.chessboard.width;
		var boardHeight = game.chessboard.height;
		var chessmanGridX = game.chessmanHuman.gridX;
		var chessmanGridY = game.chessmanHuman.gridY;
		var gridSize = game.chessboard.gridSize;
		var gridX = Math.floor((mouseX - boardX) / gridSize);
	    var gridY = Math.floor((mouseY - boardY) / gridSize);

		switch(this.state){
	        case 'WAIT':
	            // Clicked on the chessman to show arrow,
	            // Clicked on the wall to pick a wall
	            if(gridX == chessmanGridX && gridY == chessmanGridY){ 
	                this.state = 'CHESSMAN_CLICKED';
	            } else if (mouseX >= boardX && mouseX <= boardX + boardWidth &&
	                mouseY >= boardY + 5 && mouseY <= boardY + 5 + gridSize
	            ){
	                this.state = 'WALL_CLICKED';
	            }
	            break;
	        case 'CHESSMAN_CLICKED':
	            if(gridX == chessmanGridX - 1 && gridY == chessmanGridY){
	            	// Left clicked
	                if(chessmanGridX > 0){
	                    var behavior = new Object();
	                    behavior.type = 'MOVE_LEFT';
	                    game.callBack(behavior);
	                    this.state = 'WAIT';
	                }
	            } else if (gridX == chessmanGridX + 1 && gridY == chessmanGridY ){
	            	// Right clicked
                    if(chessmanGridX < 8){
                        var behavior = new Object();
                        behavior.type = 'MOVE_RIGHT';
                        game.callBack(behavior);
                        this.state = 'WAIT';
                    }
                } else if (gridX == chessmanGridX && gridY == chessmanGridY - 1){
                	// Up clicked
                    if(chessmanGridX > 0){
                        var behavior = new Object();
                   	    behavior.type = 'MOVE_UP';
                   	    game.callBack(behavior);
                   	    this.state = 'WAIT';
                   	}
                } else if (gridX == chessmanGridX && gridY == chessmanGridY + 1){
                	// Right clicked
                    if(chessmanGridY < 8){
                        var behavior = new Object();
                        behavior.type = 'MOVE_DOWN';
                        game.callBack(behavior);
                        this.state = 'WAIT';
	                }
	            } else {
	                this.state = 'WAIT';
	            }
                break;
            case 'WALL_CLICKED':

                break;
	    }
	}

	this.onMouseDown = function(mouseX,mouseY, game){

		var boardX = game.chessboard.x;
		var boardY = game.chessboard.y;
		var gridSize = game.chessboard.gridSize;
		var gridX = Math.floor((mouseX - boardX) / gridSize);
    	var gridY = Math.floor((mouseY - boardY) / gridSize);
    	
    	if((gridY < 0 || gridY > 8)){
    		// The upwalls could not be clicked. They're for ai's.
    		for (i in game.downWalls){
    			if(game.downWalls[i].isMousePointing(mouseX, mouseY, boardX, boardY, gridSize)){
    				this.choosenWall = game.downWalls[i];
    				this.oldXOfChoosen = this.choosenWall.gridX;
    				this.oldYOfChoosen = this.choosenWall.gridY;
    			}
    		}
    	}
	}

	this.onMouseUp = function(mouseX, mouseY, game){

		var boardX = game.chessboard.x;
		var boardY = game.chessboard.y;
		var gridSize = game.chessboard.gridSize;
		var gridX = Math.floor((mouseX - boardX) / gridSize);
    	var gridY = Math.floor((mouseY - boardY) / gridSize);

    	// Try to place the wall
    	if(this.choosenWall != null){
    		if(this.choosenWall.tryToPlace(game.placedWalls)){
    			// Only down walls avaliable.
   				game.placedWalls.push(this.choosenWall);
   				game.downWalls.splice(game.downWalls.indexOf(this.choosenWall), 1);
    		} else {
    			this.choosenWall.gridX = this.oldXOfChoosen;
    			this.choosenWall.gridY = this.oldYOfChoosen;
    			this.choosenWall.direction = 'VERTICAL';
    		}
    		this.choosenWall = null;
    	}
	}

	this.onMouseMove = function(mouseX, mouseY, boardX, boardY, gridSize){

		var boardX = game.chessboard.x;
		var boardY = game.chessboard.y;
		var gridSize = game.chessboard.gridSize;
		var gridX = Math.floor((mouseX - boardX) / gridSize);
    	var gridY = Math.floor((mouseY - boardY) / gridSize);
    	var deltaX = mouseX - (gridX * gridSize + boardX); 
    	var deltaY = mouseY - (gridY * gridSize + boardY);

   		if(this.choosenWall != null){
   			this.choosenWall.gridX = gridX;
   			this.choosenWall.gridY = gridY;
   			if(deltaX > deltaY){
   				this.choosenWall.direction = 'HORIZONTAL';
   			} else {
   				this.choosenWall.direction = 'VERTICAL';
   			}
   		}
   		// Only downwalls avaliable
   		for(i in game.downWalls){
   			game.downWalls[i].isMousePointing(mouseX, mouseY, boardX, boardY, gridSize);
   		}
	}
}