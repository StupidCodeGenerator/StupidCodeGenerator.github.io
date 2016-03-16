// Game.js

// The fucking Chairman Mao of the game.
// Every thing is managed here.
// The design rule of this game is: Centralization of power.
// Unless it's necessary.

function Game(){
	// Game state
	this.state = 'NONE';

	// Agents
	this.aiAgent = new AiAgent();
	this.humanAgent = new HumanAgent();
	this.currentAgent = this.humanAgent;

	// Chessboard, Chessman, Walls
	this.chessboard = new Chessboard(25, 50, 30, 9, 9);
	this.chessmanHuman = new Chessman(4, 8, 'blue');
	this.chessmanAI = new Chessman(4, 0, 'yellow');
	this.horizontalWalls =  [];
	this.verticalWalls = [];
	this.numOfWallsOfAI = 10;
	this.numOfWallsOfHuman = 10;

	// --------------------------------------------------------------
	//  Game process managements
	// --------------------------------------------------------------

	// Function to init the game.
	this.startNewRound = function(){
		this.horizontalWalls.length = 0;
		this.verticalWalls.length = 0;
		this.currentAgent = this.humanAgent;
		this.numOfWallsOfHuman = 10;
		this.numOfWallsOfAI = 10;
		this.state = 'PLAY';
	}

	// It will change the agent that acts.
	this.nextStep = function(){
		if(this.currentAgent.type == 'HUMAN'){
			this.currentAgent = this.aiAgent;
		} else {
			this.currentAgent = this.humanAgent;
		}
		this.currentAgent.behaviorRequest(this);
	}

	// Behavior callback
	this.callBack = function(behavior){
		if(behavior.type == 'HORIZONTAL_WALL'){
			this.horizontalWalls.push(new Chesswall(behavior.gridX, behavior.gridY));
			this.nextStep();
		} else if (behavior.type == 'VERTICAL_WALL'){
			this.verticalWalls.push(new Chesswall(behavior.gridX, behavior.gridY));
			this.nextStep();
		} else if (behavior.type == 'MOVE_UP'){
			if(this.currentAgent.gridY > 0){
				this.currentAgent.gridY--;
				this.nextStep();
			}
		} else if (behavior.type == 'MOVE_DOWN'){
			if(this.currentAgent.gridY < 8){
				this.currentAgent.gridY++;
				this.nextStep();
			}
		} else if (behavior.type == 'MOVE_LEFT'){
			if(this.currentAgent.gridX > 0){
				this.currentAgent.gridX--;
				this.nextStep();
			}
		} else if (behavior.type == 'MOVE_RIGHT'){
			if(this.currentAgent.gridX < 8){
				this.currentAgent.gridX++;
				this.nextStep();
			}
		} else {
			// illegal behavior appeared
		}
	}

	// --------------------------------------------------------------
	//  The update
	// --------------------------------------------------------------
	this.update = function(){}

	// --------------------------------------------------------------
	//  The paint
	// --------------------------------------------------------------
	this.paint = function(context){
		// Clear the screen
	    context.save();
	    context.clearRect(0, 0, canvas.width, canvas.height);
	    context.fillStyle = 'black';
	    context.rect(0, 0, canvas.width, canvas.height);
	    context.fill();
	    context.stroke();
	    context.restore();
	    // Infos in manager
	    if(this.state == 'PLAY'){
	        this.paintPlay(context);
	    }
	}

	// The paint function of 'PLAY' state
	this.paintPlay = function(context){
		this.chessboard.paint(context);
	    this.chessmanAI.paint(context, this.chessboard.x, this.chessboard.y, 
	    	this.chessboard.gridSize);
	    this.chessmanHuman.paint(context, this.chessboard.x, this.chessboard.y, 
	    	this.chessboard.gridSize);
	    // Draw arrow when the chessman is clicked by human.
	    if(this.humanAgent.state == 'CHESSMAN_CLICKED'){
	        this.chessmanHuman.drawArrows(this.humanAgent.gridX, this.humanAgent.gridY);
	    }
	    writeMessage(canvas, this.currentAgent.type, 10, 440);   	
	}

	// --------------------------------------------------------------
	//  UI inputs (click/move, keys etc.)
	// --------------------------------------------------------------
	this.onClick = function(mouseX, mouseY){
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
	        onClickOfPlay(mouseX, mouseY)
	    }
	}

	this.onClickOfPlay = function(mouseX, mouseY){
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

	this.onMouseMove = function(mouseX, mouseY){
		var gridX = Math.floor((mouseX - this.chessboard.x) / this.chessboard.gridSize);
    	var gridY = Math.floor((mouseY - this.chessboard.y) / this.chessboard.gridSize);
    	this.chessmanHuman.onMouseMove(gridX, gridY);
	}
}