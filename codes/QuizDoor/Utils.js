function atan2Pi(deltaX, deltaY){
    var angle = Math.atan(deltaY/deltaX);
    if(deltaX > 0 && deltaY > 0){
    } else if(deltaX < 0 && deltaY > 0){
        angle += Math.PI;
    } else if(deltaX > 0 && deltaY < 0){
        angle += 2 * Math.PI;
    } else if(deltaX < 0 && deltaY < 0){
        angle += Math.PI
    }
    return angle;
}

function writeMessage(canvas, message, x, y) {
    context.font = '7pt Small Fonts';
    context.fillStyle = 'white';
    context.fillText(message, x, y);
}