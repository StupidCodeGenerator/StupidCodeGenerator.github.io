// Chessboard.js
// It contains the infomation of position and size

function Chessboard(leftX, topY, gridSize, numOfGridX, numOfGridY){
    this.x = leftX;
    this.y = topY;
    this.width = numOfGridX * gridSize;
    this.height = numOfGridY * gridSize;
    this.gridSize = gridSize;
    this.numOfGridX = numOfGridX;
    this.numOfGridY = numOfGridY;

    this.paint = function(context){
        context.save();
        // The bound
        context.beginPath();
        context.rect(this.x, this.y, this.gridSize * this.numOfGridX, this.gridSize * this.numOfGridY);
        context.lineWidth = 4;
        context.strokeStyle = 'lime';
        context.stroke();
        // The grid
        context.beginPath();
        for(var i = 0 ; i < this.numOfGridY ; i ++){                         // Vertical lines
            context.moveTo(this.x, i * gridSize + this.y);
            context.lineTo(this.x + this.width, this.y + i * gridSize)
        }
        for(var i = 0 ; i < this.numOfGridX ; i ++){                         // Horizontal lines
            context.moveTo(i * gridSize + this.x, this.y);
            context.lineTo(i * gridSize + this.x, this.y + this.height);
        }
        context.lineWidth = 0.3;
        context.strokeStyle = 'lime';
        context.stroke();
        context.restore();
    }
}