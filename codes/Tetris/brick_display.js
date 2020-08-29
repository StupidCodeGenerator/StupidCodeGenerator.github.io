// 0 means off , 1 means on
// Anchor is left_top

function BrickDisplay(x, y, worldWidth, worldHeight, brickSize){

    this.brickArray2D = new Array();

    // Clear the bricks
    for(var i = 0 ; i < worldWidth ; i ++){
        this.brickArray2D[i] = new Array();
        for(var j = 0 ; j < worldHeight ; j ++){
            this.brickArray2D[i][j] = 0;
        }
    }

    this.x = x;
    this.y = y;
    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;
    this.brickSize = brickSize;
    this.pixelWidth = worldWidth * brickSize;
    this.pixelHeight = worldHeight * brickSize;


    this.Draw = function(){
    
        // 1. draw the background rect
        context.beginPath();
        context.rect(this.x, this.y, this.pixelWidth, this.pixelHeight);
        context.lineWidth = 5;
        context.strokeStyle = "black";
        context.fillStyle = "white";
        context.fill();
        context.stroke();

        // 2. draw the bricks
        for(var i = 0 ; i < worldWidth ; i++){
            for (var j = 0 ; j < worldHeight ; j++){
                if(this.brickArray2D[i][j] == 1){
                    this.DrawBrick(i,j,"red");
                }
            }
        }
    }


    this.SetBrickOn = function(worldX, worldY, color){
        this.brickArray2D[worldX][worldY] = 1;
    }

    this.SetBrickOff = function(worldX, worldY, color){
        this.brickArray2D[worldX][worldY] = 0;
    }


    this.DrawBrick = function(worldX, worldY, color){
        context.beginPath();
        context.rect(worldX * brickSize + this.x, worldY*brickSize + this.y, brickSize, this.brickSize);
        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.fillStyle = color;
        context.fill();
        context.stroke();
    }
}
