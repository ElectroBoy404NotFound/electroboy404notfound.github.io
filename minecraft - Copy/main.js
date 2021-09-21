var canvas = new fabric.Canvas("myCanvas");

fabric.Image.fromURL("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1058094626.jpg?crop=1xw:1xh;center,top&resize=980:*", function(img) {
        player_object = img;
        player_object.scaleToWidth(1000); 
        player_object.scaleToHeight(600); 
        player_object.set({ top:0, left:0 }); 
        canvas.add(player_object); 
});