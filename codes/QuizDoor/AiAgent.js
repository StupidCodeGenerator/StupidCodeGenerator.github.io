// AiAgent.js

// The agent that represents the AI's behavior.
// The board size info is defined in Main.js

function AiAgent(gridX, gridY){

	this.gridX = gridX;
	this.gridY = gridY;

	this.type = 'AI';
	// The manager contains all information about the game so one single parameter is OK
	this.behaviorRequest = function(manager){
		var behavior;
		behavior.type = 'MOVE_DOWN';
		manager.callback(behavior);
	}
}