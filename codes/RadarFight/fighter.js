function Fighter(initX, initY, initAlpha){
	this.x = initX;
	this.y = initY;
	this.vx = 0;
	this.vy = 0;
	this.alpha = initAlpha

	this.update = function(){}

	this.draw = function(){
		context.save();
		context.rotate(this.alpha);
    	context.beginPath();
    	context.moveTo(this.x, this.y + 2);
    	context.lineTo(this.x - 5, this.y + 5);
    	context.lineTo(this.x, this.y - 8);
    	context.lineTo(this.x + 5, this.y + 5);
    	context.lineTo(this.x, this.y + 2);
    	context.lineWidth = 1;
    	// set line color
    	context.strokeStyle = '#ffffff';
    	context.stroke();
    	context.restore();
	}
}