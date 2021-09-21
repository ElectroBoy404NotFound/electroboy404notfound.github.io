canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 

var backgroundIMGPath = "mars.jpg";
var roverIMGPath      =  "rover.png";

var backgroungIMG;
var roverIMG;

var roverWidth        = 100;
var roverHeight       = 90;

var roverX            = 10;
var roverY            = 10;   

function add() {   
    backgroungIMG = new Image();
    roverIMG      = new Image();

    backgroungIMG.onload = function() {
        ctx.drawImage(backgroungIMG, 0, 0, canvas.width, canvas.height);
    };
    backgroungIMG.src = backgroundIMGPath;

    roverIMG.onload = function() {
        ctx.drawImage(roverIMG, roverX, roverY, roverWidth, roverHeight);
    };
    roverIMG.src = roverIMGPath;
}

window.addEventListener("keydown", keyDown);
function keyDown(e) {
    var key = e.keyCode;
    console.log(key);
    switch(key) {
        case 38:
            up();
            console.log("Im going up!"); 
            break;
        case 40:
            down();
            console.log("Im going down!");
            break;
        case 37:
            left();
            console.log("Im going left!"); 
            break;
        case 39:
            right();
            console.log("Im going right!");             
            break;
    }
}

function up() {
    roverY-=10;

    if(roverY < 0) roverY = 0;

    ctx.drawImage(backgroungIMG, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(roverIMG, roverX, roverY, roverWidth, roverHeight);
}
function down() {
    roverY+=10;
    
    if(roverY > (600 - roverHeight)) roverY = (600 - roverHeight);

    ctx.drawImage(backgroungIMG, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(roverIMG, roverX, roverY, roverWidth, roverHeight);0;
}
function left() {
    roverX-=10;

    if(roverX < 0) roverX = 0;

    ctx.drawImage(backgroungIMG, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(roverIMG, roverX, roverY, roverWidth, roverHeight);
}
function right() {
    roverX+=10;

    if(roverX > (800 - roverWidth)) roverX = (800 - roverWidth);

    ctx.drawImage(backgroungIMG, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(roverIMG, roverX, roverY, roverWidth, roverHeight);
}