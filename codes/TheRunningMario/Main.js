var canvas;
var context;

var images;

var mario;

var mapX = 0;

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
	LoadImages({map:"./res/map.png", spriteImage:"./res/Sprites.png"}, LoadImageComplete);
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
}

function Render(){
    context.drawImage(images.map, mapX-=3, 0);
}