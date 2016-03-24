// HumanAgent.js

// There's only two agent's in this world so there's no need to use the inherition system.
// It will contains all the human operations.

function HumanAgent(){

	this.numOfRemainingWalls = 10;

	this.type = 'HUMAN';

	// All states are : WAIT, CHESSMAN_CLICKED, WALL_CLICKED
	this.state = 'WAIT';

	// When this function is called, make the human control avaliable
	this.behaviorRequest = function(manager){ 
		manager.isHumanControlAvaliable = true;
	}
}