class Cat {
	constructor(
		public location: p5.Vector,
		public isHidden: boolean = false,
		public lookingAt: p5.Vector = undefined,
		public spooked: boolean = false,
		public isWearingGlasses: boolean = false,
		public isWinking: boolean = false
	) {}

	reset() {
		this.isHidden = true;
		this.lookingAt = undefined;
	}

	show() {
		this.isHidden = false;
	}

	ifCatShow() {
		this.isWearingGlasses = true;
	}
	lookAt(x: number, y: number) {
		this.lookingAt = createVector(x, y);
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
	}

	level2ElseIf(x: number, y: number) {
		if (this.isWearingGlasses) {
		} else if (!this.isWinking) {
			const h = width;
			const w = 0.9116684841875682 * h;
			this.isHidden = true;
			image(catWink, this.location.x, this.location.y, w, h);
		}
	}
}
