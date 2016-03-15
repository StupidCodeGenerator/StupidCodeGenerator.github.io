// Chessboard.js
// It contains the chessboard, 2 chessmen and some walls.
// It's paintable

NUM_GRID_X = 9;
NUM_GRID_Y = 9;

function Chessboard(leftX, topY, gridSize){
    this.x = leftX;
    this.y = topY;
    this.width = NUM_GRID_X * gridSize;
    this.height = NUM_GRID_Y * gridSize;
    this.gridSize = gridSize;

    this.update = function(){
    }

    this.moveUp = function(){

    }

    this.draw = function(){
        // The bound
        context.beginPath();
        context.rect(this.x, this.y, this.gridSize * NUM_GRID_X, this.gridSize * NUM_GRID_Y);
        context.lineWidth = 4;
        context.strokeStyle = 'lime';
        context.stroke();
        // The grid
        context.beginPath();
        for(var i = 0 ; i < NUM_GRID_Y ; i ++){                         // Vertical lines
            context.moveTo(this.x, i * gridSize + this.y);
            context.lineTo(this.x + this.width, this.y + i * gridSize)
        }
        for(var i = 0 ; i < NUM_GRID_X ; i ++){                         // Horizontal lines
            context.moveTo(i * gridSize + this.x, this.y);
            context.lineTo(i * gridSize + this.x, this.y + this.height);
        }
        context.lineWidth = 0.3;
        context.strokeStyle = 'lime';
        context.stroke();
    }
}