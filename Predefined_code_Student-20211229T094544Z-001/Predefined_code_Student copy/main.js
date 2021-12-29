var x, y, cir = "", rectt = "", canvas, rec = new window.webkitSpeechRecognition(), i, cls = 0;

rec.onresult = (event) => {
    console.log(event);
    var dat = 
        event.results[0][0]
        .transcript;
    if(dat == "clear") { cls = 1; } else { cir = "d"; i = parseInt(dat); document.getElementById("status").innerHTML = "You drew " + dat + " cicles"; }
};

function start() {
    document.getElementById("status").innerHTML = "Tech is listening";
    rec.start();
}

function setup() {
    canvas = createCanvas(900, 600);
}
function draw() {
    if(cir == "d") {
        for(var ii = 0; ii < i; ii++) { x = Math.floor(Math.random() * 900); y = Math.floor(Math.random() * 600); circle(x, y, Math.floor(Math.random() * 100)); }
        cir = "";
    } else if(cls) { canvas.clear(); cls = 0;}
}