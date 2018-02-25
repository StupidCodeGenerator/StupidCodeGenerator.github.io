var frameCount = 0;
var currentValue = 0;

var randomArray;

var randomResultArray;

var X_OFFSET = 50;

function init(){
    randomResultArray = new Array();
    for(var i = -100 ; i < 100; i ++){
        randomResultArray[i] = 0;
    }
}

function update(){

    var TIMES = canvas.width / 2;

    randomArray = new Array();

    for(var i = 0 ; i < TIMES; i ++){
        var random = GetRandom11();
        currentValue += random;
        randomArray.push(currentValue);
    }

    if(currentValue > -100 && currentValue < 100){
        randomResultArray[currentValue] ++;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();

    context.lineWidth = 1;

    context.strokeStyle = "black";
    context.fillStyle = "black";

    for(var i = 0 ; i < randomArray.length && i < canvas.width ; i ++){
        context.rect(i + X_OFFSET, canvas.height / 2 - randomArray[i], 1, 1);
    }

    context.textAlign = "start"
    context.fillStyle = "#369"
    context.font = "12px 微软雅黑";
    
    context.moveTo(0,canvas.height / 2);  
    context.lineTo(canvas.width, canvas.height / 2); 

    for(var i = -100 ; i < 100 ; i ++){
        if(randomResultArray[i] > 0){
            context.moveTo(TIMES + X_OFFSET, i + canvas.height / 2);
            context.lineTo(TIMES + X_OFFSET - randomResultArray[i], i + canvas.height / 2);
        }
    }

    context.fillText(randomArray[randomArray.length - 1], 30, canvas.height / 2 - currentValue);
    context.fillText("Steps = " + frameCount, 30 , 30);

    context.fill();
    context.stroke();
    
    currentValue = 0;

    frameCount ++;
}

function GetRandom11(){
    if(Math.random() < 0.5){
        return -1;
    } else {
        return 1;
    }
}
