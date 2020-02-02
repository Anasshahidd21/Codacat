class Cat {
    constructor(
        public location: p5.Vector,
        public isHidden: boolean = false,
        public lookingAt: p5.Vector = undefined,
        public surprised: boolean = false
    ) {}

    reset() {
        this.isHidden = true;
        this.lookingAt = undefined;
        this.surprised = false;
    }

    showYourself() {
        this.isHidden = false;
    }

    lookAt(x: number, y: number) {
        this.lookingAt = createVector(x, y);
    }

    draw() {
        noStroke();
        fill('red');
        imageMode('center');

        let img = this.surprised
            ? catSurprised
            : catImage;
        let ratio = img.height / img.width;
        let w = 500,
            h = w * ratio;
        image(img, this.location.x, this.location.y, w, h);

        this.drawEye(createVector(this.location.x - width * 0.14, this.location.y + width * 0.0625));
        this.drawEye(createVector(this.location.x + width * 0.14, this.location.y + width * 0.0625));
    }

    drawEye(location: p5.Vector) {    
        if (this.lookingAt) {
            let t = p5.Vector.sub(this.lookingAt, location)
                .mult(.15)
                .limit(width * 0.025);
            location.add(t);
        }
        
        if (!this.surprised)
            this.drawupil(location);
    }

    drawupil(location: p5.Vector) {
        let ratio = 0.9852941176470589;
        let h = width * .1,
            w = h * ratio;

        fill('black');
        image(pupilImage, location.x, location.y, w, h);
\    }
}