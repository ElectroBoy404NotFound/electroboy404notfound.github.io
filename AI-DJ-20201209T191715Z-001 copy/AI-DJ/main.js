var canvas, video, song, lx = 0, ly = 0, rx = 0, ry = 0;

function preload() {
    song = loadSound("music.mp3");
    console.log(song);
    song.rate(1);
    song.setVolume(1);

    pn = ml5.poseNet('video', () => console.log("\"Pose net: The largest Network of poses\" has been loaded!"));
    pn.on('pose', (r) => {
        if(r.length > 0) {
            lx = r[0].pose.leftWrist.x;
            ly = r[0].pose.leftWrist.y;

            rx = r[0].pose.rightWrist.x;
            ry = r[0].pose.rightWrist.y;
        }
    });
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}