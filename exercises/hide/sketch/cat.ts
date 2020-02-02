class Cat {
    public hidden: boolean = true;
    size = {
        width: 100,
        height: 100
    };

    public get x() {
        return this.spot.location.x;
    }
    public get y() {
        return this.spot.location.y;
    }

    constructor(
        public spot: HidingSpot,
        private img: p5.Image = images[floor(random(images.length - 1))]
    ) {}

    showYourself() {
        this.hidden = false;
        setTimeout(hide, 1000);
    }

    found() {
        founds.push(this);
        hidingSpots.splice(hidingSpots.indexOf(this.spot), 1);
    }

    isAt(x: number, y:number) {
        return this.spot.location.x - this.size.width / 2 < x
            && this.spot.location.x + this.size.width / 2 > x
            && this.spot.location.y - this.size.height / 2 < y
            && this.spot.location.y + this.size.height / 2 > y
    }

    draw() {
        // rect(this.spot.location.x, this.spot.location.y, this.size.width, this.size.height);

        if (this.hidden)
            return;

        push();
        translate(this.spot.location.x, this.spot.location.y);
        rotate(this.spot.angle);
        image(this.img, 0, 0, 100, 100);
        pop();
    }
}