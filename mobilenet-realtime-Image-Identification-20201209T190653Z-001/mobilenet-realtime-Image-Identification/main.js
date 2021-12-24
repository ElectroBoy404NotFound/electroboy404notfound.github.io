var canvas, video, classifier, lastResult;

function setup() {
  canvas = createCanvas(210, 210);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', () => console.log("Model loaded"));
}

function draw() {
  image(video, 0, 0, 210, 210);
  classifier.classify(video, (err, res) => {
    if(err) throw err;
    if(res[0].confidence > 0.5 && res[0].label != lastResult) {
      console.log(res);
      lastResult = res[0].label;
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Object detected is " + lastResult));
      document.getElementById("result_object_name").innerHTML = lastResult;
      document.getElementById("result_object_accuracy").innerHTML = Math.round(res[0].confidence * 100) + "%";
    }
  });
}