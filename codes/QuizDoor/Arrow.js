// Arrow.js
// The arrow that painted around the chessman
// When mouse pointing at the arrow, the arrow will be bigger

function Arrow(gridX, gridY){
	this.gridX = gridX;
	this.gridY = gridY;

	this.isPointing = false;

	this.paint = function(context, boardX, boardY, gridSize, direction){
		var screenX = this.gridX * gridSize + boardX;
        var screenY = this.gridY * gridSize + boardY;
        context.beginPath();
        switch(direction){
        	case 'LEFT':
        	if(this.isPointing){
				context.moveTo(screenX - 17, screenY + 15);
                context.lineTo(screenX - 3, screenY + 3);
                context.lineTo(screenX - 3, screenY + gridSize - 3);
                context.lineTo(screenX - 17, screenY + 15);  
        	} else {
				context.moveTo(screenX - 15, screenY + 15);
                context.lineTo(screenX - 5, screenY + 5);
                context.lineTo(screenX - 5, screenY + gridSize - 5);
                context.lineTo(screenX - 15, screenY + 15);
        	}
        	break;
        	case 'RIGHT':
        	if(this.isPointing){
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
        	break;
        	case 'TOP':
        	if(isPointing){
				context.moveTo(screenX + 15, screenY - 17);
                context.lineTo(screenX + gridSize - 3, screenY - 3);
                context.lineTo(screenX + 3, screenY - 3);
                context.lineTo(screenX + 15, screenY - 17);
        	} else {
				context.moveTo(screenX + 15, screenY - 15);
                context.lineTo(screenX + gridSize - 5, screenY - 5);
                context.lineTo(screenX + 5, screenY - 5);
                context.lineTo(screenX + 15, screenY - 15);
        	}
        	break;
        	case 'BOTTOM':
        	if(isPointing){
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
        	break;
        }
        context.lineWidth = 1;
        context.strokeStyle = this.color;
        context.stroke();
	}
}