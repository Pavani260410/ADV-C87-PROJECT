var canvas = new fabric.Canvas('canvas');

 block_y = 1;
 block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object;

function new_image(get_image){

fabric.Image.fromURL(get_image, function(Img){
block_image_object = Img;
block_image_object.scaleToWidth = block_image_width;
block_image_object.scaleToHeight = block_image_height;

block_image_object.set({
top: block_y,
left: block_x
});

});

canvas.add(block_image_object);
}
window.addEventListener('keydown', my_keydown);
function my_keydown(e){
keypressed = e.keyCode;

if (keypressed == 82) {
new_image('rr1.png');
console.log('R');
}if (keypressed == 71) {
	new_image('gr.png');
	console.log('G');
	}
if (keypressed == 89) {
	new_image('yr.png');
	console.log('Y');
	}
if (keypressed == 80) {
	new_image('pr.png');
	console.log('P');
	}
if (keypressed == 66) {
	new_image('br.png');
	console.log('B');
	}
}