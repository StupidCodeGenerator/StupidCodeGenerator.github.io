// Chesswall.js

HORIZONTAL = 0;
VERTICAL = 1;

function Chesswall(leftX, topY, gridSize, direction, boardX, boardY){
	
	this.x = leftX * gridSize + boardX;
	this.y = topY * gridSize + boardY;
	this.gridSize = gridSize;	
	this.direction = direction;

    this.update = function(){
    }

    this.draw = function(){
        context.beginPath();
        context.moveTo(this.x, this.y)
        if (this.direction == HORIZONTAL){
        	context.lineTo(this.x + this.gridSize, this.y);
        } else {
        	context.lineTo(this.x, this.y + this.gridSize);
        }
        context.lineWidth = 3;
        context.strokeStyle = 'red';
        context.stroke();
    }
}