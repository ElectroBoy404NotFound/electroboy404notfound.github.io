var canvas, video, posenet, clownnose, x = 0, y = 0;

function preload() {}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    clownnose = loadImage("https://i.postimg.cc/BvLM8L07/pngfind-com-realistic-mustache-png-145189-1.png");

    posenet = ml5.poseNet(video, () => console.log("Loaded model!"));
    posenet.on('pose', (results) => {
        console.log(results);
        if(results.length > 0) {
            x = results[0].pose.nose.x - 25;
            y = results[0].pose.nose.y + 12;
        }
    });
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clownnose, x, y, 50, 30);
}
function takeSnap() {
    save("im-a-cat-" + Math.random() + ".jpg");
}