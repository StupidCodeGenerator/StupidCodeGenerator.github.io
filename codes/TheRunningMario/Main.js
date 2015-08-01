var canvas;
var context;

var images;
var map;

var mario;

function Main(){
    // create canvas and set width/height
    canvas = document.createElement("canvas");

    width = window.innerWidth;
    height = window.innerHeight;
    if (width >= 500) {
        width  = 320;
        height = 480;
        canvas.style.border = "1px solid #000";
    }

    canvas.width = width;
    canvas.height = height;
    if (!(!!canvas.getContext && canvas.getContext("2d"))) {
            alert("Your browser doesn't support HTML5, please update to latest version");
    }

    context = canvas.getContext('2d');
    document.body.appendChild(canvas);
	
    Init();
}

function Init(){
	LoadImages({mapTile:"./res/maptile.png", spriteImage:"./res/Sprites.png"}, LoadImageComplete);
}

function LoadImages(sources, callback) {
    images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
        numImages++;
    }
    for(var src in sources) {
        images[src] = new Image();
        images[src].onload = function() {
            if(++loadedImages >= numImages) {
              callback();
            }
        };
        images[src].src = sources[src];
    }
}

function LoadImageComplete(){
    map = new Map(images.mapTile, TileMaps["MapData"]);
    map.y = canvas.height - (map.mapData.layers[0].height * map.mapData.tileheight);
    mario = new Mario(100, 300, 0, 0, 0, images.spriteImage);
    Run();
}

function Run() {
    var loop = function() {
        Update();
        Render();
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

function Update(){
    map.x -= 3
}

function Render(){
    map.Draw(context, canvas.width);
}