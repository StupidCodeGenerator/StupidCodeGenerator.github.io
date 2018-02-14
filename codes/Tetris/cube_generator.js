// I O T S Z J L
var TYPE_I = 0;
var TYPE_O = 1;
var TYPE_T = 2;
var TYPE_S = 3;
var TYPE_Z = 4;
var TYPE_J = 5;
var TYPE_L = 6;

var I_CUBE_R0 = [
	[0,0,0,0],
	[1,1,1,1],
	[0,0,0,0],
	[0,0,0,0]
];

var I_CUBE_R1 = [
	[0,0,1,0],
	[0,0,1,0],
	[0,0,1,0],
	[0,0,1,0]
];

var I_CUBE_R2 = [
	[0,0,0,0],
	[0,0,0,0],
	[1,1,1,1],
	[0,0,0,0]
];

var I_CUBE_R3 = [
	[0,1,0,0],
	[0,1,0,0],
	[0,1,0,0],
	[0,1,0,0]
];

var O_CUBE = [
	[1,1]
	[1,1]
];

var T_CUBE_R0 = [
	[0,1,0],
	[1,1,1],
	[0,0,0]
];

var T_CUBE_R1 = [
	[0,1,0],
	[0,1,1],
	[0,1,0]
];

var T_CUBE_R2 = [
	[0,0,0],
	[1,1,1],
	[0,1,0]
];

var T_CUBE_R3 = [
	[0,1,0],
	[1,1,0],
	[0,1,0]
];

var S_CUBE_R0 = [
	[0,1,1],
	[1,1,0],
	[0,0,0]
];

var S_CUBE_R1 = [
	[0,1,0],
	[0,1,1],
	[0,0,1]
];

var S_CUBE_R2 = [
	[0,0,0],
	[0,1,1],
	[1,1,0]
];

var S_CUBE_R3 = [
	[1,0,0],
	[1,1,0],
	[0,1,0]
];

var Z_CUBE_R0 = [
	[1,1,0],
	[0,1,1],
	[0,0,0]
];

var Z_CUBE_R1 = [
	[0,0,1],
	[0,1,1],
	[0,1,0]
];

var Z_CUBE_R2 = [
	[0,0,0],
	[1,1,0],
	[0,1,1],
];

var Z_CUBE_R3 = [
	[0,1,0],
	[1,1,0],
	[1,0,0]
];

var J_CUBE_R0 = [
	[1,0,0],
	[1,1,1],
	[0,0,0]
];

var J_CUBE_R1 = [
	[0,1,1],
	[0,1,0],
	[0,1,0]
];

var J_CUBE_R2 = [
	[0,0,0],
	[1,1,1],
	[0,0,1]
];

var J_CUBE_R3 = [
	[0,1,0],
	[0,1,0],
	[1,1,0]
];

var L_CUBE_R0 = [
	[0,0,1],
	[1,1,1],
	[0,0,0]
];

var L_CUBE_R1 = [
	[0,1,0],
	[0,1,0],
	[0,1,1]
];

var L_CUBE_R2 = [
	[0,0,0],
	[1,1,1],
	[1,0,0]
];

var L_CUBE_R3 = [
	[1,1,0],
	[0,1,0],
	[0,1,0]
];


function GenerateCube(type, rotation){
	if(rotation > 3){
		return;
	}
}

function GenerateRandomCube(type){
	
}

