var mario

/**
 * Simple sprite class
 * 
 * @param {Image}  img    spritesheet image
 * @param {number} x      x-position in spritesheet
 * @param {number} y      y-position in spritesheet
 * @param {number} width  width of sprite 
 * @param {number} height height of sprite
 */
function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x*2;
	this.y = y*2;
	this.width = width*2;
	this.height = height*2;
};
/**
 * Draw sprite ta canvas context
 * 
 * @param  {CanvasRenderingContext2D} ctx context used for drawing
 * @param  {number} x   x-position on canvas to draw from
 * @param  {number} y   y-position on canvas to draw from
 */
Sprite.prototype.Draw = function(ctx, x, y) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
};

/**
 * Initate all sprite
 * 
 * @param  {Image} img spritesheet image
 */
function InitSprites(img) {
	mario = [
		new Sprite(img, 21, 52, 12, 16),
		new Sprite(img, 36, 53, 14, 15),
		new Sprite(img, 53, 52, 16, 16),
		new Sprite(img, 75, 52, 17, 16)
	];	
}