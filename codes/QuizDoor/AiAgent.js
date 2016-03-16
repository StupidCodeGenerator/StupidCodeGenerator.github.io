// AiAgent.js

// The agent that represents the AI's behavior.

function AiAgent(){

	this.type = 'AI';
	// The manager contains all information about the game so one single parameter is OK
	this.behaviorRequest = function(manager){
		var behavior = new Object();
		behavior.type = 'MOVE_DOWN';
		manager.callBack(behavior);
	}
}