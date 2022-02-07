var i = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    
    storke("#FF0000");
    rect(30, 40, 450, 350);
}