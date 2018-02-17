
// Tetrimino is the blocks that falling
// I O T S Z J L   7 types of block

// Types, each type has 4 rotations, except o type
var TYPE_I = 0;
var TYPE_O = 1;
var TYPE_T = 2;
var TYPE_S = 3;
var TYPE_Z = 4;
var TYPE_J = 5;
var TYPE_L = 6;

// Shapes
var I_TETRIMINO_R0 = [
	[0,0,0,0],
	[1,1,1,1],
	[0,0,0,0],
	[0,0,0,0]
];

var I_TETRIMINO_R1 = [
	[0,0,1,0],
	[0,0,1,0],
	[0,0,1,0],
	[0,0,1,0]
];

var I_TETRIMINO_R2 = [
	[0,0,0,0],
	[0,0,0,0],
	[1,1,1,1],
	[0,0,0,0]
];

var I_TETRIMINO_R3 = [
	[0,1,0,0],
	[0,1,0,0],
	[0,1,0,0],
	[0,1,0,0]
];

var O_TETRIMINO = [
	[1,1]
	[1,1]
];

var T_TETRIMINO_R0 = [
	[0,1,0],
	[1,1,1],
	[0,0,0]
];

var T_TETRIMINO_R1 = [
	[0,1,0],
	[0,1,1],
	[0,1,0]
];

var T_TETRIMINO_R2 = [
	[0,0,0],
	[1,1,1],
	[0,1,0]
];

var T_TETRIMINO_R3 = [
	[0,1,0],
	[1,1,0],
	[0,1,0]
];

var S_TETRIMINO_R0 = [
	[0,1,1],
	[1,1,0],
	[0,0,0]
];

var S_TETRIMINO_R1 = [
	[0,1,0],
	[0,1,1],
	[0,0,1]
];

var S_TETRIMINO_R2 = [
	[0,0,0],
	[0,1,1],
	[1,1,0]
];

var S_TETRIMINO_R3 = [
	[1,0,0],
	[1,1,0],
	[0,1,0]
];

var Z_TETRIMINO_R0 = [
	[1,1,0],
	[0,1,1],
	[0,0,0]
];

var Z_TETRIMINO_R1 = [
	[0,0,1],
	[0,1,1],
	[0,1,0]
];

var Z_TETRIMINO_R2 = [
	[0,0,0],
	[1,1,0],
	[0,1,1],
];

var Z_TETRIMINO_R3 = [
	[0,1,0],
	[1,1,0],
	[1,0,0]
];

var J_TETRIMINO_R0 = [
	[1,0,0],
	[1,1,1],
	[0,0,0]
];

var J_TETRIMINO_R1 = [
	[0,1,1],
	[0,1,0],
	[0,1,0]
];

var J_TETRIMINO_R2 = [
	[0,0,0],
	[1,1,1],
	[0,0,1]
];

var J_TETRIMINO_R3 = [
	[0,1,0],
	[0,1,0],
	[1,1,0]
];

var L_TETRIMINO_R0 = [
	[0,0,1],
	[1,1,1],
	[0,0,0]
];

var L_TETRIMINO_R1 = [
	[0,1,0],
	[0,1,0],
	[0,1,1]
];

var L_TETRIMINO_R2 = [
	[0,0,0],
	[1,1,1],
	[1,0,0]
];

var L_TETRIMINO_R3 = [
	[1,1,0],
	[0,1,0],
	[0,1,0]
];

// It will always from the top, and each type will has it's color
function Tetrimino(type, rotation){
	this.type = type;
	this.rotation = rotation;
}

function GenerateTetrimino(type, rotation){
	if(rotation > 3){
		return;
	}
	
}

function GenerateRandomTetrimino(){
}

