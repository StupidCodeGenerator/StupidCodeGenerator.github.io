var frameCount = 0;
var currentValue = 0;

var randomArray;

var randomResultArray;

var X_OFFSET = 50;
var TIMES = 10000;
var RESULT_WIDTH = 1000;

function init(){
    randomResultArray = new Array();
    for(var i = -RESULT_WIDTH ; i < RESULT_WIDTH; i ++){
        randomResultArray[i] = 0;
    }
}

function update(){

    randomArray = new Array();

    for(var i = 0 ; i < TIMES; i ++){
        var random = GetRandom11();
        currentValue += random;
        randomArray.push(currentValue);
    }

    if(currentValue > -RESULT_WIDTH && currentValue < RESULT_WIDTH){
        randomResultArray[currentValue] ++;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();

    context.lineWidth = 1;

    context.strokeStyle = "black";
    context.fillStyle = "black";

    var startIndex = randomArray.length - canvas.width + 2* X_OFFSET;

    for(
        var i = startIndex; 
        i < randomArray.length;
        i ++
    ){
        context.rect(i - startIndex + X_OFFSET, canvas.height / 2 - randomArray[i], 1, 1);
    }

    context.textAlign = "start"
    context.fillStyle = "#369"
    context.font = "12px 微软雅黑";
    
    context.moveTo(0,canvas.height / 2);  
    context.lineTo(canvas.width, canvas.height / 2); 

    for(var i = -RESULT_WIDTH ; i < RESULT_WIDTH ; i ++){
        if(randomResultArray[i] > 0){
            context.moveTo(canvas.width - X_OFFSET, i + canvas.height / 2);
            context.lineTo(canvas.width - X_OFFSET - randomResultArray[i], i + canvas.height / 2);
        }
    }

    context.fillText(randomArray[randomArray.length - 1], canvas.width - X_OFFSET, canvas.height / 2 - currentValue);
    context.fillText("FRAMES = " + frameCount, 30 , 30);

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
