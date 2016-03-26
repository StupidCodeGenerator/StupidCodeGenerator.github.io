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
	this.chessboard = new Chessboard(25, 70, 30, 9, 9);
	this.chessmanHuman = new Chessman(4, 8, 'blue');
	this.chessmanAI = new Chessman(4, 0, 'yellow');
	this.upWalls = [];
	this.downWalls = [];
	this.placedWalls = [];

	// the mouse picking wall
	this.choosenWall;
	this.oldXOfChoosen;
	this.oldYOfChoosen;

	// Human control
	this.isHumanControlAvaliable = true;

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
		this.placedWalls.length = 0;
		for (var i = 0; i < 10; i ++){
			this.upWalls.push(new Wall(i, -1, 'VERTICAL'));
			this.downWalls.push(new Wall(i, 10, 'VERTICAL'));
		}
	}

	// It will change the agent that acts.
	this.nextStep = function(){
		if(this.currentAgent.type == 'HUMAN'){
			this.currentAgent = this.aiAgent;
			this.isHumanControlAvaliable = false;
		} else {
			this.currentAgent = this.humanAgent;
			this.isHumanControlAvaliable = true;
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
		} else if (behavior.type == 'PLACE_WALL'){
			this.nextStep();
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
	    for(i in this.upWalls){
	    	this.upWalls[i].paint(context, this.chessboard.x, this.chessboard.y, this.chessboard.gridSize);
	    }
	    for(i in this.downWalls){
	    	this.downWalls[i].paint(context, this.chessboard.x, this.chessboard.y, this.chessboard.gridSize)
	    }
	    for(i in this.placedWalls){
	    	this.placedWalls[i].paint(context, this.chessboard.x, this.chessboard.y, this.chessboard.gridSize)
	    }
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
		if(this.isHumanControlAvaliable){
			this.humanAgent.onClick(mouseX, mouseY, this);
		}
	}

	this.onMouseMove = function(mouseX, mouseY){
		var boardX = game.chessboard.x;
		var boardY = game.chessboard.y;
		var gridSize = game.chessboard.gridSize;
		var gridX = Math.floor((mouseX - boardX) / gridSize);
    	var gridY = Math.floor((mouseY - boardY) / gridSize);
    	if(this.state == 'PLAY'){
	   		this.chessmanHuman.onMouseMove(gridX, gridY); // Arrow will bigger when pointed.
	   		if(this.isHumanControlAvaliable){
		   		this.humanAgent.onMouseMove(mouseX, mouseY, this);
	   		}
    	}
	}

	this.onMouseDown = function(mouseX, mouseY){
		if(this.state == 'PLAY'){
			if(this.isHumanControlAvaliable){
				this.humanAgent.onMouseDown(mouseX, mouseY, this);
			}
		}
	}

	this.onMouseUp = function(mouseX, mouseY){
		if(this.state == 'PLAY'){
			if(this.isHumanControlAvaliable){
				this.humanAgent.onMouseUp(mouseX, mouseY, this);
			}
		}
	}

	// --------------------------------------------------------------
	//  Util functions
	// --------------------------------------------------------------
	// it will return an array of positions.
	// 1. chessman can't go across the wall.
	// 2. chessman can jump across another chessman. If there's a wall 
	//    at the back of that chessman, it can go left or right of that.
	this.getAvaliableGoPositions = function(chessmanX, chessmanY){

	}
}