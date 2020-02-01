class Cat {
    constructor(
        public location: p5.Vector,
        public isHidden: boolean = false,
        public lookingAt: p5.Vector = undefined,
        public spooked: boolean = false
    ) {}

    reset() {
        this.isHidden = true;
        this.lookingAt = undefined;
        this.spooked = false;
    }

    show() {
        this.isHidden = false;
    }

    lookAt(x: number, y: number) {
        this.lookingAt = createVector(x, y);
    }

    draw() {
        noStroke();
        fill('red');
        ellipse(this.location.x, this.location.y, 300);

        this.drawEye(createVector(this.location.x - 60, this.location.y - 50));
        this.drawEye(createVector(this.location.x + 60, this.location.y - 50));
    }

    drawEye(location: p5.Vector) {
        if (this.spooked)
            fill('black');
        else
            fill('white');  
            
        ellipse(location.x, location.y, 50);
      
        if (this.lookingAt) {
            let t = p5.Vector.sub(this.lookingAt, location)
                .mult(.15)
                .limit(15);
            location.add(t);
        }
        
        fill('black');
        ellipse(location.x, location.y, 15, 20);
    }
}