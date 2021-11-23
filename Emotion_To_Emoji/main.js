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

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_alcR98bG/model.json', () => console.log("model ready!"));

function check() {
    var img = document.getElementById("image");
    classifier.classify(img, (res, err) => {
        if(err) throw err;

        document.getElementById("result_emotion_name").innerHTML = res[0].label;
        document.getElementById("result_emotion_name2").innerHTML = res[1].label;

        dpre(res[0].label, document.getElementById("update_emoji"));
        dpre(res[1].label, document.getElementById("update_emoji2"));
    });
}

function dpre(lab, emo) {
    switch(lab) {
        case "up":
            emo.innerHTML = "👆";
            break;
        case "left":
            emo.innerHTML = "👈";
            break;
        case "down":
            emo.innerHTML = "👇";
            break;
        default:
            emo.innerHTML = "I dont know :("
            break;
    }
}

function speak() {
    var synth = window.SpeechSynthesis;
    var d1 = "The first predition is " + p1;
    var d2 = "The second predition is " + p2;
    var speaker = new SpeechSynthesisUtterance(d1 + d2);
    speaker.rate = .5;
    synth.speak(speaker);
}

