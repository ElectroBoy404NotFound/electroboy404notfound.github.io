var canvas, video, song, ly = 0, ry = 0, ls = 0, rs = 0, rx = 0, lx = 0;

function preload() {
    song = loadSound("music.mp3");
    console.log(song);
    song.rate(1);
    song.setVolume(1);
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    pn = ml5.poseNet(video, () => console.log("\"Pose net: The largest Network of poses\" has been loaded!"));
    pn.on('pose', (r) => {
        console.log(r);
        if(r.length > 0) {
            ly = r[0].pose.leftWrist.y;
            ry = r[0].pose.rightWrist.y;

            lx = r[0].pose.leftWrist.x;
            rx = r[0].pose.rightWrist.x;

            ls = r[0].pose.keypoints[9].score;
            rs = r[0].pose.keypoints[10].score;
        }
    });
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill('#ff0000');
    stroke('#ff0000');

    circle(lx, ly, 20);
    circle(rx, ry, 20);

    if(ls > 0.2) {
        volume = (floor(Number(ly)) / 500) * 2;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        song.setVolume(volume);
    }

    if(rs > 0.2) {
        if(ry > 0 && ry <= 100) {
            document.getElementById("speed").innerHTML = "Speed = 0.5x";
            song.rate(0.5);
        } else if(ry > 100 && ry <= 200) {
            document.getElementById("speed").innerHTML = "Speed = 1.0x";
            song.rate(1.0);
        } else if(ry > 200 && ry <= 300) {
            document.getElementById("speed").innerHTML = "Speed = 1.5x";
            song.rate(1.5);
        } else if(ry > 300 && ry <= 400) {
            document.getElementById("speed").innerHTML = "Speed = 2.0x";
            song.rate(2.0);
        } else {
            document.getElementById("speed").innerHTML = "Speed = 2.5x";
            song.rate(2.5);
        }
    }
}

function play() {
    song.play();
}