class Cat {
	constructor(
		public location: p5.Vector,
		public isHidden: boolean = false,
		public lookingAt: p5.Vector = undefined,
		public spooked: boolean = false,
		public text: boolean = false,
		public speech: string = ''
	) {}

	reset() {
		this.isHidden = true;
		this.lookingAt = undefined;
		this.spooked = false;
		this.text = false;
		this.speech = '';
	}

	show() {
		this.isHidden = false;
	}

	lookAt(x: number, y: number) {
		this.lookingAt = createVector(x, y);
	}

	say(input: string) {
		this.text = true;
		this.speech = input;
	}

	draw() {
		noStroke();
		fill('red');
		imageMode('center');

		// 3344 3668
		// 530

		let h = width;
		let w = 0.9116684841875682 * h;
		image(catImage, this.location.x, this.location.y, w, h);

		this.drawEye(createVector(this.location.x - width * 0.14, this.location.y + width * 0.0625));
		this.drawEye(createVector(this.location.x + width * 0.14, this.location.y + width * 0.0625));
	}

	drawEye(location: p5.Vector) {
		if (this.lookingAt) {
			let t = p5.Vector.sub(this.lookingAt, location)
				.mult(0.15)
				.limit(width * 0.025);
			location.add(t);
		}

		this.drawupil(location);
	}

	drawupil(location: p5.Vector) {
		// 402 408
		let ratio = 0.9852941176470589;
		let h = width * 0.1,
			w = h * ratio;

		fill('black');
		image(pupilImage, location.x, location.y, w, h);
		// ellipse(location.x, location.y, 15, 20);
	}

	drawSpeech(x: number, y: number) {
		let input = this.speech;
		image(speechImage, x, y, 600, 600);
		if (input.length > 15) {
			input = input.substring(0, 16);
			input = input + '...';
		}
		text(input, x - 100, y - 100, 250, 80); // Text wraps within text box
		textSize(32);
	}
}
