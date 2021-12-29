var x, y, cir = "", rectt = "", canvas, rec = new window.webkitSpeechRecognition();

rec.onresult = (event) => {
    console.log(event);
    var dat = 
        event.results[0][0]
        .transcript;
    document.getElementById("status").innerHTML = "You spoke: " + dat;
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    if(dat == "circle") cir = "d";
    if(dat == "rectangle") rectt = "d";
};

function start() {
    document.getElementById("status").innerHTML = "Java is listening";
    rec.start();
}

function setup() {
    canvas = createCanvas(900, 600);
}
function draw() {
    if(cir == "d") {
        circle(x, y, Math.floor(Math.random() * 100));
        cir = "";
    } if(rectt == "d") {
        rect(x, y, 70, 50);
        rectt = "";
    }
}