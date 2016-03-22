// Wall.js

// UP = gridY < 0 
// DOWN = gridY > 8

function Wall(gridX, gridY, direction){
	
    this.direction = direction;
    this.gridX = gridX;
    this.gridY = gridY;

    this.paint = function(context, boardX, boardY, gridSize){
        var screenX = this.gridX * gridSize + boardX;
        var screenY = this.gridY * gridSize + boardY;
        context.beginPath();
        // a little gap when painting
        if (this.direction == 'HORIZONTAL'){
            context.moveTo(screenX + 2, screenY)
        	context.lineTo(screenX + gridSize - 4, screenY);
        } else if (this.direction == 'VERTICAL'){
            context.moveTo(screenX, screenY + 4)
        	context.lineTo(screenX, screenY + gridSize - 4);
        }
        context.lineWidth = 3;
        context.strokeStyle = 'red';
        context.stroke();
    }
}