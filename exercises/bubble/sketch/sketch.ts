let cat: Cat;

let catImage: p5.Image;
let pupilImage: p5.Image;
let speechImage: p5.Image;

function preload() {
	catImage = loadImage('../assets/eyecat.png');
	pupilImage = loadImage('../assets/pupil.png');
	speechImage = loadImage('../assets/speech.png');
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
	cat.location.y = cat.isHidden
		? Math.min(height - height * 0.3125, cat.location.y + speed)
		: Math.max(height * 0.4375, cat.location.y - speed);
	cat.drawSpeech(width / 2, 0.25 * height);
	cat.draw();
}
