function IsCollideHappen(x1, y1, w1, h1, x2, y2, w2, h2){
    var deltaX = Math.abs(x1 - x2);
    var deltaY = Math.abs(y1 - y2);
    if(deltaX * 2 < (w1 + w2) && deltaY * 2 < (h1 + h2)){
        return true;
    } else {
        return false;
    }
}

// xl, yl means last frame
function CollideDirection(x1, y1, w1, h1, x2, y2, w2, h2, xlast, ylast){
    if(Math.abs(x2 - x1)/Math.abs(y2-y1) > (w1+w2)/(h1+h2)){ // x collide
        if(xlast <= x1){
            return "left";
        } else {
            return "right";
        }
    } else { // y collide
        if(ylast <= y1){
            return "up";
        } else {
            return "down";
        }
    }
}

function CollidePoint(x1, y1, w1, h1, x2, y2, w2, h2, xlast, ylast, direction){
    var output = {};
    if(direction === "up"){
        output.y = y2 - (h1 + h2) / 2;
        output.x = ((x1 - xlast) / (y1 - ylast)) * output.y;
    } else if (direction === "down"){
        output.y = y2 + (h1 + h2) / 2;
        output.x = ((x1 - xlast) / (y1 - last)) * output.y;
    } else if (direction === "left"){
        output.x = x2 - (w1 + w2) / 2;
        output.y = ((y1 - ylast) / (x1 - xlast)) * output.x;
    } else if (direction === "right"){
        output.x = x2 + (w1 + w2) / 2;
        output.y = ((y1 - ylast) / (x1 - xlast)) * output.x;
    }
    return output;
}