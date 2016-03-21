// Wall.js

// UP = gridY < 0 
// DOWN = gridY > 8

function Chesswall(gridX, gridY, direction){
	
    this.direction = direction;
    this.gridX = gridX;
    this.gridY = gridY;

    this.paint = function(boardX, boardY, gridSize){
        var screenX = this.gridX * gridSize + boardX;
        var screenY = this.gridY * gridSize + boardY;
        context.beginPath();
        context.moveTo(screenX, screenY)
        if (this.direction == 'HORIZONTAL'){
        	context.lineTo(screenX + gridSize, screenY);
        } else if (this.direction == 'VERTICAL'){
        	context.lineTo(screenX, screenY + gridSize);
        }
        context.lineWidth = 3;
        context.strokeStyle = 'red';
        context.stroke();
    }
}