var canvas = new fabric.Canvas("myCanvas");

var block_image_width = 30;
var block_image_height = 30;

var block_image_object = "";

var player_x = 10;
var player_y = 10;

var player_object = "";

player_update();

function player_update() {
    fabric.Image.fromURL("player.png", function(img) {
        player_object = img;
        player_object.scaleToWidth(150); 
        player_object.scaleToHeight(140); 
        player_object.set({ top:player_y, left:player_x }); 
        canvas.add(player_object); 
    });
}

function new_image(get_image) { 
    fabric.Image.fromURL(get_image, function(Img) { 
        block_image_object = Img; 
        block_image_object.scaleToWidth(block_image_width); 
        block_image_object.scaleToHeight(block_image_height); 
        block_image_object.set({ top:player_y, left:player_x }); 
        canvas.add(block_image_object); 
    }); 
}

window.addEventListener("keydown", function(e) {
    var key = e.keyCode;
    
    console.log("Pressed key: " + key + ", is shift key pressed: " + e.shiftKey);

    if(e.shiftKey && key == '80') {
        block_image_width += 10;
        block_image_height += 10;

        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }

    if(e.shiftKey && key == '77') {
        block_image_width -= 10;
        block_image_height -= 10;

        if(block_image_width <= 10) block_image_width = 10;
        if(block_image_height <= 10) block_image_height = 10;

        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }

    if(key == '40') down();
    if(key == '39') right();
    if(key == '38') up();
    if(key == '37') left();

    if(key == '87') new_image("wall.jpg");
    else if(key == '71') new_image("ground.png");
    else if(key == '76') new_image("light_green.png");
    else if(key == '84') new_image("trunk.jpg");
    else if(key == '82') new_image("roof.jpg");
    else if(key == '89') new_image("yellow_wall.png");
    else if(key == '68') new_image("dark_green.png");
    else if(key == '85') new_image("unique.png");
    else if(key == '67') new_image("cloud.jpg");
});

function up() {
    player_y -= 10;
    if(player_y <= -10) player_y = 0;
    canvas.remove(player_object);
    player_update(); 
}

function down() {
    player_y += 10;
    if(player_y >= 480) player_y = 480;
    canvas.remove(player_object);
    player_update();
}

function right() {
    player_x += 10;
    if(player_x >= 880) player_x = 880;
    canvas.remove(player_object);
    player_update();
}

function left() {
    player_x -= 10;
    if(player_x <= -50) player_x = -50;
    canvas.remove(player_object);
    player_update();
}