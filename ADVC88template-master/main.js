var canvas = new fabric.Canvas("imacanvas");

var hx = 0;
var hy = 0;

var bx = 100;
var by = 100;

var b;

var hole_y=400;
var hole_x=800;

var hole_obj;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
		});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
	b = Img;
	b.scaleToWidth(50);
	b.scaleToHeight(50);
	b.set({
	top:by,
	left:bx
	});
	canvas.add(b);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed == 38) up();
	if(keyPressed == 40) down();
	if(keyPressed == 37) left();
	if(keyPressed == 39) right();
}

function up()
	{
		if(by >=5)
		{
			by = by - 50;
			console.log("block image height = " + 50);
			console.log("When Up arrow key is pressed, X =  " + bx + " , Y = "+by);
			canvas.remove(b);
			new_image();
		}
	}

	function down()
	{
		if(by <=450)
		{
			by = by + 50;
			console.log("block image height = " + 50);
			console.log("When Down arrow key is pressed, X =  " + bx + " , Y = "+by);
			canvas.remove(b);
			new_image();
		}
	}

	function left()
	{
		if(bx >5)
		{
			bx = bx - 50;
			console.log("block image width = " + 50);
			console.log("When Left arrow key is pressed, X =  " + bx + " , Y = "+by);
			canvas.remove(b);
			new_image();
		}
	}

	function right()
	{
		if(bx <=1050)
		{
			bx = bx + 50;
			console.log("block image width = " + 50);
			console.log("When Right arrow key is pressed, X =  " + bx + " , Y = "+by);
			canvas.remove(b);
			new_image();
		}
	}

