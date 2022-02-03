var objectDetectorr;

objects = [];
var status = "", video;

function preload(){
  video = createCapture(VIDEO);
  video.hide();
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();  
  console.log(ml5);
  objectDetectorr = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


var ii = 0;

function draw() {
  if(ii == 0) {
    objectDetectorr.detect(video, gotResult);
  }
  ii++;
  if(ii >= 60) ii = 0;
  image(video, 0, 0, 640, 420);

    if(status != "")
    {
      for (var i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Object Detected";
  
        fill(255, 0, 0);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(255, 0, 0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
}
