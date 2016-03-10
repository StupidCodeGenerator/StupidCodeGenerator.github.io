// Cheesman.js
// It's the little man walking on the cheesboard.
// And the x and y is about the grid, not the coordination.
// and left top grid is 0,0.

function Chessman(initX, initY, boardX, boardY, gridSize, color){
    this.x = initX * gridSize + boardX + 5;
    this.y = initY * gridSize + boardY + 5;
    this.size = gridSize - 10;
    this.color = color

    this.update = function(){
    }

    this.moveUp = function(){

    }

    this.draw = function(){
        // The bound
        context.beginPath();
        context.rect(this.x, this.y, this.size, this.size);
        context.lineWidth = 1;
        context.strokeStyle = this.color;
        context.stroke();
    }
}