Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach(document.getElementById("camera"));

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Za2eM6etF/model.json", () => console.log("Ready"))

function takeSnap() {
   Webcam.snap((data) => document.getElementById("result").innerHTML = "<img id=\"image\" src=\"" + data + "\"/>");
}
