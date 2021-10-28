Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

var camera = document.getElementById("camera");

var p1, p2;

Webcam.attach('#camera');

function takeSnap() {
    Webcam.snap((dataurl) => {
        document.getElementById("result").innerHTML = "<img id='image' width='350' height='300' src='" + dataurl + "'>"
    });
}

console.log("ML5 v" + ml5.version);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zo8HEwUew/model.json', () => console.log("model ready!"));

function check() { speak(); }

function speak() {
    var synth = window.SpeechSynthesis;
    var d1 = "The first predition is " + p1;
    var d2 = "The second predition is " + p2;
    var speaker = new SpeechSynthesisUtterance(d1 + d2);
    synth.speak(speaker);
}