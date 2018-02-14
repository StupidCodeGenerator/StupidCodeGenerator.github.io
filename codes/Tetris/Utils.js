function DrawBrick(int pixelX, int pixelY, int brickSize){
	context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.fillStyle = color;
    context.fill();
    context.stroke();
}