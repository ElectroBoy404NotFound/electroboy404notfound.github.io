var canvas, synth, classifier, pmx, pmy, mx, my, mouseIsPressed;

function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(() => {
        console.log("\"");
        classifier.classify(
            canvas,
            (err, result) => {
                if(err) throw err;
                console.log(result);
                document.getElementById("label").innerHTML = "Label: " + result[0].label;
                document.getElementById("confidence").innerHTML = "Confidence: " + Math.round(result[0].confidence * 100) + "%";
            }
        );
    });
    canvas.mouseMoved((event) => { mouseIsPressed = event.buttons == 1 ? true : false; pmx = mx; pmy = my; mx = event.layerX; my = event.layerY; })
    synth = window.speechSynthesis;
}
function draw() {
    strokeWeight(9);
    stroke(0);
    if(mouseIsPressed) line(pmx, pmy, mx, my);
}
function clearCanvas() {
    background("white");
}