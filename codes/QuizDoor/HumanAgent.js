// HumanAgent.js

// There's only two agent's in this world so there's no need to use the inherition system.

function HumanAgent(gridX, gridY){

	this.numOfRemainingWalls = 10;

	this.gridX = gridX;
	this.gridY = gridY;

	this.type = 'HUMAN';

	// All states are : WAIT, CHESSMAN_CLICKED, WALL_CLICKED
	this.state = 'WAIT';
	// The manager contains all information about the game so one single parameter is OK
	this.behaviorRequest = function(manager){
		
	}
}