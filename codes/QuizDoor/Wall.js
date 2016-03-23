// Wall.js
// Each wall has 2 grid width, the gridX and gridY means the center of the wall

// UP = gridY < 0 
// DOWN = gridY > 8

function Wall(gridX, gridY, direction){
	
    this.direction = direction;
    this.gridX = gridX;
    this.gridY = gridY;
    this.pointing = false;

    this.paint = function(context, boardX, boardY, gridSize){
        var screenX = this.gridX * gridSize + boardX;
        var screenY = this.gridY * gridSize + boardY;
        context.save();
        context.beginPath();

        // a little gap when painting
        if (this.direction == 'HORIZONTAL'){
            context.moveTo(screenX - gridSize + 4, screenY)
        	context.lineTo(screenX + gridSize - 4, screenY);
        } else if (this.direction == 'VERTICAL'){
            context.moveTo(screenX, screenY - gridSize + 4)
        	context.lineTo(screenX, screenY + gridSize - 4);
        }
        if(this.pointing){
            context.lineWidth = 6;
        } else {
            context.lineWidth = 3;
        }
        context.strokeStyle = 'red';     
        context.stroke();
        context.restore();
    }

    this.isMousePointing = function(mouseX, mouseY, boardX, boardY, gridSize){
        // Only walls outside the board is avaliable
        if(this.gridY >= 0 && this.gridY <= 8){
            this.pointing = false;
            return false;
        }
        var screenX = this.gridX * gridSize + boardX;
        var screenY = this.gridY * gridSize + boardY;
        if(mouseX > screenX - gridSize / 2 && mouseX <= screenX + gridSize / 2 &&
            mouseY > screenY - gridSize && mouseY <= screenY + gridSize
        ){
            this.pointing = true;
            return true;
        } else {
            this.pointing = false;
            return false;
        }
    }

    // Check if this wall is collide to another wall
    this.isCollideTo = function(theOtherWall){
        if(this.direction == 'HORIZONTAL' && theOtherWall.direction == 'HORIZONTAL'){
            return Math.abs(this.gridX - theOtherWall.gridX) < 2;
        } else if (this.direction == 'VERTICAL' && theOtherWall.direction == 'VERTICAL'){
            return Math.abs(this.gridY - theOtherWall.gridY) < 2;
        } else {
            return !(this.gridX == theOtherWall.gridX && this.gridY == theOtherWall.gridY);
        }
    }

    // All grid positions. if place is succeed, update the wall's position
    // to the news. otherwise, to the olds.
    // Conditions to place :
    // 1. in the board
    // 2. not collide to other walls
    this.tryToPlace = function(oldX, oldY, placedWalls){
        var succeed = true;
        if(this.gridX < 1 || this.gridY > 7 || this.gridY < 1 || this.gridY > 7){
            succeed = false;
        } else {
            for (i in placedWalls){
                if(this.isCollideTo(placedWalls[i])){
                    succeed = false;
                }
            }
        }
        if(!succeed){
            this.gridX = oldX;
            this.gridY = oldY;
        }
        return succeed; // If succeed, this wall will be placed in "placedWalls" array.
    }
}