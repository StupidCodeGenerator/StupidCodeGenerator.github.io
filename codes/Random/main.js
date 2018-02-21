var frameCount = 0;
var currentValue = 0;
var randomArray = new Array();

var FRAMES = 1000;

function init(){
}

function update(){
    if(frameCount > FRAMES){
        return;
    }

    var random = GetRandom11();
    currentValue += random;
    randomArray.push(currentValue);

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();

    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "black";

    for(var i = 0 ; i < randomArray.length ; i ++){
        context.rect(i + 50, canvas.height / 2 + randomArray[i], 1, 1);
    }

    context.textAlign = "start"
    context.fillStyle = "#369"
    context.font = "12px 微软雅黑";

    context.fillText(frameCount + "," + randomArray[randomArray.length - 1], 50, 50);

    context.fill();
    context.stroke();
    
    frameCount ++;
}

function GetRandom11(){
    if(Math.random() < 0.5){
        return -1;
    } else {
        return 1;
    }
}
