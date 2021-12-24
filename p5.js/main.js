function preload() {}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tc = "";
}
function draw() {
    image(video, 0, 0, 640, 480);
    tint(tc);
}

function take_snapshot() {
    save("C++.icecream." + Math.random() + ".jpg");
}

function flti() {
    tc = document.getElementById("cname").value;
}