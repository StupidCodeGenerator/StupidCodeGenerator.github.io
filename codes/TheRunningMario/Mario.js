function Mario(initX, initY, initVx, initVy, initFrameIndex, image){
	this.image = image;
	this.sprites = [
				new Sprite(image, 21, 52, 12, 16),
				new Sprite(image, 36, 53, 14, 15),
				new Sprite(image, 53, 52, 16, 16),
				new Sprite(image, 75, 52, 17, 16)];
	this.x = initX;
	this.y = initY;
	this.vx = initVx;
	this.vy = initVy;
	this.frameIndex = initFrameIndex;

	this.Update = function(){}

	this.Draw = function(){
		this.sprites[frameindex].Draw(this.x, this.y);
	}
}