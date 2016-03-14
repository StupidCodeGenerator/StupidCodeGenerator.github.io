// Manager.js

// Manager will have the right to decide which agent to act.
// And manager the callbacks from the agent.

// The interface and the logic is fully seprerated.
// The agent will be asked for a behavior by given infomantion that event contains it's own chessman.

// The manager will not contains paint or IO interface at all.
// It will only manager the 2 agents.
// The Main.js will read the infos in manager and show that.

function Manager(){

	// Properties
	this.aiAgent = new AiAgent(4, 0);
	this.humanAgent = new HumanAgent(4, 8);
	this.horizontalWalls = [];
	this.verticalWalls = [];
	this.currentAgent = this.humanAgent;

	this.startNewRound = function(){
		this.aiAgent.gridX = 4;
		this.aiAgent.gridY = 0;
		this.humanAgent.gridX = 4;
		this.humanAgent.gridY = 0;
		this.horizontalWalls.length = 0;
		this.verticalWalls.length = 0;
		this.currentAgent = this.humanAgent;
	}

	// Each step will change the agent to act
	this.nextStep = function(){
		if(this.currentAgent.type == 'HUMAN'){
			this.currentAgent = this.aiAgent;
		} else {
			this.currentAgent = this.humanAgent;
		}
		this.currentAgent.behaviorRequest();
	}

	// Use this, the agent will tell the manager what the act is.
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
}