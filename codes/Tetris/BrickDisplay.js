// 0 means off , 1 means on
// Anchor is left_top

function BrickDisplay(centerX, centerY, worldWidth, worldHeight, brickSize){

    this.brickArray2D = new Array();

    // Clear the bricks
    for(var i = 0 ; i < worldWidth ; i ++){
        for(var j = 0 ; j < worldHeight ; j ++){
            this.brickArray2D[i][j] = 0;
        }
    }

    this.x = centerX;
    this.y = centerY;
    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;
    this.width = worldWidth * brickSize;
    this.height = worldHeight * brickSize;

    this.Draw = function(){
    
        // 1. draw the background rect
        context.beginPath();
        context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        context.lineWidth = 3;
        context.strokeStyle = "black";
        context.fillStyle = "white";
        context.fill();
        context.stroke();

        // 2. draw the bricks
        for(var i = 0 ; i < worldWidth ; i++){
            for (var j = 0 ; j < worldHeight ; j++){
                this.DrawBrick();
            }
        }
    }

    this.DrawBrick = function(pixelX, pixelY, brickSize, color){
        context.beginPath();
        context.rect(pixelX, pixelY, brickSize, brickSize);
        context.lineWidth = 3;
        context.strokeStyle = "black";
        context.fillStyle = color;
        context.fill();
        context.stroke();
    }
}
