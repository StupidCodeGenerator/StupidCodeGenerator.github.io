function Fighter(initX, initY, initAlpha){
	this.x = initX;
	this.y = initY;
	this.vx = 0;
	this.vy = 0;
	this.alpha = initAlpha
    this.targetX = this.x;
    this.targetY = this.y;
    this.speed = 1;

	this.update = function(){
        var angle = atan2Pi(this.targetX-this.x, this.targetY - this.y);
        if(Math.abs(this.alpha - angle) > Math.PI){
            if(this.alpha < angle){
                this.alpha += 2 * Math.PI;
            } else {
                angle += 2 * Math.PI;
            }
        }
        if(Math.abs(this.alpha - angle) > 0.1){
            if(this.alpha > angle){
                this.alpha -= 0.1;
            } else {
                this.alpha += 0.1;
            }    
        } else if(Math.abs(this.targetX - this.x) > 1 || Math.abs(this.targetY - this.y) > 1) {
            this.alpha = angle;
            var speedX = this.speed * Math.cos(this.alpha);
            var speedY = this.speed * Math.sin(this.alpha);
            this.x += speedX;
            this.y += speedY;
        }
    }

	this.draw = function(){
		context.save();
        context.translate(this.x, this.y);
		context.rotate(this.alpha + Math.PI / 2);
        context.translate(-this.x, -this.y);
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