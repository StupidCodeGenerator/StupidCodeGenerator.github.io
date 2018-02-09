function Background(centerX, centerY, worldWidth, worldHeight, blockSize){
    this.color = "white";
    this.x = centerX;
    this.y = centerY;
    this.width = worldWidth * blockSize;
    this.height = worldHeight * blockSize;
    this.draw = function(){
        context.beginPath();
        context.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        context.lineWidth = 3;
        context.strokeStyle = "black";
        context.fillStyle = "white";
        context.fill();
        context.stroke();
    }
}