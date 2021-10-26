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

function check() {
    classifier.classify(document.getElementById('image'), (err, result) => {
        if(err) throw err;
        document.getElementById("o").innerHTML = results[0].label;
        document.getElementById("a").innerHTML = results[0].confidence.toFixed(3);
    });
}
