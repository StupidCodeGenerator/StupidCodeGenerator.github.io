function ScanButton(x, y){
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 40;
    this.draw = function(){
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.lineWidth = 1;
        context.strokeStyle = 'white';
        context.stroke();
    }
    this.onClick = function(clickX, clickY){

    }
}