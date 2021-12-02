var canvas, video, posenet, x = 0, y = 0;

function preload() {}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, () => console.log("Loaded model!"));
    posenet.on('pose', (results) => {
        if(results.length > 0) {
            x = results[0].pose.nose.x;
            y = results[0].pose.nose.y;
        }
    });
}
function draw() {
    image(video, 0, 0, 300, 300);
    /*stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(x, y, 25);*/
}
function takeSnap() {
    save("im-a-cat-" + Math.random() + ".jpg");
}