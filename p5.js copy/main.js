function preload() {}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 240 - 110, 250 - 240, 400, 240);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(0, 0, 60);
    circle(640, 0, 60);
    circle(0, 480, 60);
    circle(640, 480, 60);
    rect(0, 0, 640, 5);
    rect(0, 0, 5, 480);
    rect(640 - 5, 0, 5, 480);
    rect(0, 480 - 5, 640, 5);
    rect(240 - 110, 250, 400, 10);
}

function take_snapshot() {
    save("Happy birthday C++.icecream." + Math.random() + "!.jpg");
}