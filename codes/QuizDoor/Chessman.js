// Chessman.js
// It's the little man walking on the chessboard.
// And the x and y is about the grid, not the coordination.
// Left top grid is 0,0.

function Chessman(gridX, gridY, color){
    this.color = color;
    this.gridX = gridX;
    this.gridY = gridY;

    this.paint = function(context, boardX, boardY, gridSize){
        context.save();
        var screenX = this.gridX * gridSize + boardX + 5;
        var screenY = this.gridY * gridSize + boardY + 5;
        var chessSize = gridSize - 10
        context.beginPath();
        context.rect(screenX, screenY, chessSize, chessSize);
        context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.stroke();
        context.restore();
    }

    // When the chessman (of human) is clicked, It will show arrows about direction to move.
    this.paintArrows = function(context, boardX, boardY, gridSize){
        var screenX = this.gridX * gridSize + boardX;
        var screenY = this.gridY * gridSize + boardY;
        context.beginPath();
        if(gridX > 0){          // Draw left arrow
            if(this.pointingArrow == 'LEFT'){
                context.moveTo(screenX - 17, screenY + 15);
                context.lineTo(screenX - 3, screenY + 3);
                context.lineTo(screenX - 3, screenY + this.gridSize - 3);
                context.lineTo(screenX - 17, screenY + 15);                
            } else {
                context.moveTo(screenX - 15, screenY + 15);
                context.lineTo(screenX - 5, screenY + 5);
                context.lineTo(screenX - 5, screenY + this.gridSize - 5);
                context.lineTo(screenX - 15, screenY + 15);                
            }
        }
        if(gridX < 8){          // Draw the right arrow
            if(this.pointingArrow == 'RIGHT'){
                context.moveTo(screenX + gridSize + 17, screenY + 15);
                context.lineTo(screenX + gridSize + 3, screenY + gridSize - 3);
                context.lineTo(screenX + gridSize + 3, screenY + 3);
                context.lineTo(screenX + gridSize + 17, screenY + 15);                
            } else {
                context.moveTo(screenX + gridSize + 15, screenY + 15);
                context.lineTo(screenX + gridSize + 5, screenY + gridSize - 5);
                context.lineTo(screenX + gridSize + 5, screenY + 5);
                context.lineTo(screenX + gridSize + 15, screenY + 15);                
            }
        }
        if(gridY > 0){          // Draw the up arrow
            if(this.pointingArrow == 'UP'){
                context.moveTo(screenX + 15, screenY - 17);
                context.lineTo(screenX + this.gridSize - 3, screenY - 3);
                context.lineTo(screenX + 3, screenY - 3);
                context.lineTo(screenX + 15, screenY - 17);
            } else {
                context.moveTo(screenX + 15, screenY - 15);
                context.lineTo(screenX + this.gridSize - 5, screenY - 5);
                context.lineTo(screenX + 5, screenY - 5);
                context.lineTo(screenX + 15, screenY - 15);
            }
        }
        if(gridY < 8){          // Draw the down arrow
            if(this.pointingArrow == 'DOWN'){
                context.moveTo(screenX + 15, screenY + gridSize + 17);
                context.lineTo(screenX + 3, screenY + gridSize + 3);
                context.lineTo(screenX + gridSize - 3, screenY + gridSize + 3);
                context.lineTo(screenX + 15, screenY + gridSize + 17);
            } else {
                context.moveTo(screenX + 15, screenY + gridSize + 15);
                context.lineTo(screenX + 5, screenY + gridSize + 5);
                context.lineTo(screenX + gridSize - 5, screenY + gridSize + 5);
                context.lineTo(screenX + 15, screenY + gridSize + 15);
            }
        }
        context.lineWidth = 1;
        context.strokeStyle = this.color;
        context.stroke();
    }

    // When the mouse is on the arrow the arrow should be bigger
    this.onMouseMove = function(mouseGridX, mouseGridY){
        if(mouseGridX >= 0 && mouseGridX < 9 && mouseGridY >= 0 && mouseGridY < 9){
            if(mouseGridX == this.gridX - 1 && mouseGridY == this.gridY){             // The left arrow
                this.pointingArrow = 'LEFT';
            } else if (mouseGridX == this.gridX + 1 && mouseGridY == this.gridY){     // The right arrow
                this.pointingArrow = 'RIGHT';
            } else if (mouseGridX == this.gridX && mouseGridY == this.gridY - 1){     // The up arrow
                this.pointingArrow = 'UP';
            } else if (mouseGridX == this.gridX && mouseGridY == this.gridY + 1){     // The down arrow
                this.pointingArrow = 'DOWN';
            } else {
                this.pointingArrow = 'NONE';
            }
        }
    }
}