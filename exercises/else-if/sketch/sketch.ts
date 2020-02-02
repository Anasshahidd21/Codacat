let cat: Cat;

let catImage: p5.Image;
let pupilImage: p5.Image;
let speechImage: p5.Image;
let catGlasses: p5.Image;
let catWink: p5.Image;

function preload() {
	catImage = loadImage('../assets/hideandseek1.png');
	pupilImage = loadImage('../assets/pupil.png');
	catGlasses = loadImage('../assets/hideandseek4.png');
	catWink = loadImage('../assets/hideandseek5.png');
}

function setup() {
	// Create canvas
	let canvas = createCanvas(800, 800);
	if (document.getElementById('canvas')) canvas.parent('canvas');

	// Intialize universe
	cat = new Cat(createVector(width / 2, height - width * 0.3125));
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background('white');

	cat.reset();
	main();

	const speed = 5;
	cat.location.x = width / 2;
	cat.location.y = height * 0.4375;
	cat.draw();
	cat.level2ElseIf(this.location.x, this.location.y);
}
