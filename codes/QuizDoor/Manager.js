// AgentManager.js
// This manager manages the two agents: AI and HUMAN.
// It will send request of action and recive the behavior 
// with callback function.

function AgentManager(){

	// Properties
	this.aiAgent = new AiAgent(4, 0);
	this.humanAgent = new HumanAgent(4, 8);
	this.horizontalWalls = [];     // placed
	this.verticalWalls = [];       // placed
	this.currentAgent = this.humanAgent;

	this.startNewRound = function(){
		this.aiAgent.gridX = 4;
		this.aiAgent.gridY = 0;
		this.humanAgent.gridX = 4;
		this.humanAgent.gridY = 8;
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
		this.currentAgent.behaviorRequest(this);
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