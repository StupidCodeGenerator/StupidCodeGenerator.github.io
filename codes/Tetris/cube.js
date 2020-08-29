function Cube(index, x, y, size, color){
    this.index = index;
    this.color = color
    this.x = x;
    this.y = y;
    this.width = size;
    this.height = size;
    this.isActive = true;   // is active means it's falling
    this.draw = function(){
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.lineWidth = 3;
        context.strokeStyle = "black";
        context.fillStyle = color;
        context.fill();
        context.stroke();
    }
}