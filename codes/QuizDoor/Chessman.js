// Chessman.js
// It's the little man walking on the chessboard.
// And the x and y is about the grid, not the coordination.
// and left top grid is 0,0.
// It's paintable.

function Chessman(boardX, boardY, gridSize, color){
    this.size = gridSize - 10;
    this.color = color
    this.gridSize = gridSize;
    this.boardX = boardX;
    this.boardY = boardY;
    this.update = function(){
    }

    this.draw = function(gridX, gridY){
        var screenX = gridX * this.gridSize + this.boardX;
        var screenY = gridY * this.gridSize + this.boardY;
        context.beginPath();
        context.rect(screenX + 5, screenY + 5, this.size, this.size);
        context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.stroke();
    }

    this.drawArrows = function(gridX, gridY){
        var screenX = gridX * this.gridSize + this.boardX;
        var screenY = gridY * this.gridSize + this.boardY;
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
                context.moveTo(screenX + this.gridSize + 17, screenY + 15);
                context.lineTo(screenX + this.gridSize + 3, screenY + this.gridSize - 3);
                context.lineTo(screenX + this.gridSize + 3, screenY + 3);
                context.lineTo(screenX + this.gridSize + 17, screenY + 15);                
            } else {
                context.moveTo(screenX + this.gridSize + 15, screenY + 15);
                context.lineTo(screenX + this.gridSize + 5, screenY + this.gridSize - 5);
                context.lineTo(screenX + this.gridSize + 5, screenY + 5);
                context.lineTo(screenX + this.gridSize + 15, screenY + 15);                
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
                context.moveTo(screenX + 15, screenY + this.gridSize + 17);
                context.lineTo(screenX + 3, screenY + this.gridSize + 3);
                context.lineTo(screenX + this.gridSize - 3, screenY + this.gridSize + 3);
                context.lineTo(screenX + 15, screenY + this.gridSize + 17);
            } else {
                context.moveTo(screenX + 15, screenY + this.gridSize + 15);
                context.lineTo(screenX + 5, screenY + this.gridSize + 5);
                context.lineTo(screenX + this.gridSize - 5, screenY + this.gridSize + 5);
                context.lineTo(screenX + 15, screenY + this.gridSize + 15);
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