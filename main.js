var image = fabric.canvas("myCanvas")

block_image_width = 30;
block_image_hieght = 30;

player_x = 10;
player_y = 10;

var player_objects "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromUrl("player.png", function(img) {
        player_objects = img;

        player_objects.scaletowidth(150);
        player_objects.scaletohieght(140);
        player_objects.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}


functionnew_image(get_image) {
    fabric.Image.fromUrl(get_image, function(img) {
        block_image_object = img;

        block_image_object.scaletowidth(block_image_object);
        block_image_object.scaletohieght(block_image_object);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}