// Game.js

// The fucking Chairman Mao of the game.
// Every thing is managed here.
// The design rule of this game is: Centralization of power.
// Unless it's necessary.

function Game(){

	// -------------------------------------------------------------
	//  Properties
	// -------------------------------------------------------------

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
	this.upWalls = [];
	this.downWalls = [];

	// --------------------------------------------------------------
	//  Game process managements
	// --------------------------------------------------------------

	// Function to init the game.
	this.startNewRound = function(){
		this.state = 'PLAY';
		this.currentAgent = this.humanAgent;
		this.chessmanHuman.init(4, 8, 'blue');
		this.chessmanAI.init(4, 0, 'yellow');
		this.upWalls.length = 0;
		this.downWalls.length = 0;
		
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
		var currentChessman = this.GetCurrentChessman();
		if(behavior.type == 'HORIZONTAL_WALL'){
			this.horizontalWalls.push(new Chesswall(behavior.gridX, behavior.gridY));
			this.nextStep();
		} else if (behavior.type == 'VERTICAL_WALL'){
			this.verticalWalls.push(new Chesswall(behavior.gridX, behavior.gridY));
			this.nextStep();
		} else if (behavior.type == 'MOVE_UP'){
			if(currentChessman.gridY > 0){
				currentChessman.gridY--;
				this.nextStep();
			}
		} else if (behavior.type == 'MOVE_DOWN'){
			if(currentChessman.gridY < 8){
				currentChessman.gridY++;
				this.nextStep();
			}
		} else if (behavior.type == 'MOVE_LEFT'){
			if(currentChessman.gridX > 0){
				currentChessman.gridX--;
				this.nextStep();
			}
		} else if (behavior.type == 'MOVE_RIGHT'){
			if(currentChessman.gridX < 8){
				currentChessman.gridX++;
				this.nextStep();
			}
		} else if (behavior.type == 'MOVE_UP'){
			if(currentChessman.gridY > 0){
				currentChessman.gridY--;
				this.nextStep();
			}
		} else if (behavior.type == 'MOVE_DOWN'){
			if(currentChessman.gridY < 8){
				currentChessman.gridY++;
				this.nextStep();
			}
		} else if (behavior.type == 'MOVE_LEFT'){
			if(currentChessman.gridX > 0){
				currentChessman.gridX--;
				this.nextStep();
			}
		} else if (behavior.type == 'MOVE_RIGHT'){
			if(this.currentChessman.gridX < 8){
				this.currentChessman.gridX++;
				this.nextStep();
			}
			// illegal behavior appeared
		}
	}

	this.GetCurrentChessman = function(){
		if(this.currentAgent == this.humanAgent){
			return this.chessmanHuman;
		} else {
			return this.chessmanAI;
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
		// Draw chessmen and board
		this.chessboard.paint(context);
	    this.chessmanAI.paint(context, this.chessboard.x, this.chessboard.y, 
	    	this.chessboard.gridSize);
	    this.chessmanHuman.paint(context, this.chessboard.x, this.chessboard.y, 
	    	this.chessboard.gridSize);
	    // Draw walls
	    // Draw arrow when the chessman is clicked by human.
	    if(this.humanAgent.state == 'CHESSMAN_CLICKED'){
	        this.chessmanHuman.paintArrows(context, this.chessboard.x,
	        	this.chessboard.y, this.chessboard.gridSize);
	    }
	    writeMessage(canvas, this.currentAgent.type, 10, 440);   	
	}

	// --------------------------------------------------------------
	//  UI inputs (click/move, keys etc.)
	// --------------------------------------------------------------
	this.onClick = function(mouseX, mouseY){
		msgMousePos = 'Mouse position: ' + mouseX + ',' + mouseY;
	    var gridX = Math.floor((mouseX - this.chessboard.x) / this.chessboard.gridSize);
	    var gridY = Math.floor((mouseY - this.chessboard.y) / this.chessboard.gridSize);
	    // State opeartions
	    if(this.state == 'PLAY'){
	        this.onClickOfPlay(mouseX, mouseY)
	    }
	}

	this.onClickOfPlay = function(mouseX, mouseY){
		var gridX = Math.floor((mouseX - this.chessboard.x) / this.chessboard.gridSize);
	    var gridY = Math.floor((mouseY - this.chessboard.y) / this.chessboard.gridSize);
	    // Translate the player's operation into humanAgent's behavior
	    if(this.currentAgent.type == 'HUMAN'){
	        var hAgent = this.humanAgent;
	        switch(hAgent.state){
	            case 'WAIT':
	                // Clicked on the chessman to show arrow,
	                // Clicked on the wall to pick a wall
	                if(gridX == this.chessmanHuman.gridX && gridY == this.chessmanHuman.gridY){ 
	                    hAgent.state = 'CHESSMAN_CLICKED';
	                } else if (mouseX >= this.chessboard.x && 
	                    mouseX <= this.chessboard.x + this.chessboard.width &&
	                    mouseY >= this.chessboard.y + 5 &&
	                    mouseY <= this.chessboard.y + 5 + this.chessboard.gridSize
	                ){
	                    hAgent.state = 'WALL_CLICKED';
	                }
	                break;
	            case 'CHESSMAN_CLICKED':
	                if(gridX == this.chessmanHuman.gridX - 1 && gridY == this.chessmanHuman.gridY){
	                    if(this.chessmanHuman.gridX > 0){
	                        var behavior = new Object();
	                        behavior.type = 'MOVE_LEFT';
	                        this.callBack(behavior);
	                        hAgent.state = 'WAIT';
	                    }
	                } else if (gridX == this.chessmanHuman.gridX + 1 && gridY == this.chessmanHuman.gridY){
	                    if(this.chessmanHuman.gridX < 8){
	                        var behavior = new Object();
	                        behavior.type = 'MOVE_RIGHT';
	                        this.callBack(behavior);
	                        hAgent.state = 'WAIT';
	                    }
	                } else if (gridX == this.chessmanHuman.gridX && gridY == this.chessmanHuman.gridY - 1){
	                    if(this.chessmanHuman.gridY > 0){
	                        var behavior = new Object();
                    	    behavior.type = 'MOVE_UP';
                    	    this.callBack(behavior);
                    	    hAgent.state = 'WAIT';
                    	}
	                } else if (gridX == this.chessmanHuman.gridX && gridY == this.chessmanHuman.gridY + 1){
	                    if(this.chessmanHuman.gridY < 8){
	                        var behavior = new Object();
	                        behavior.type = 'MOVE_DOWN';
	                        this.callBack(behavior);
	                        hAgent.state = 'WAIT';
	                    }
	                } else {
	                    this.humanAgent.state = 'WAIT';
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