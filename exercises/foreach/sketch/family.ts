class Family {
    constructor(
        private cats: p5.Image[] = []
    ){}

    add() {
        let i = floor(random(images.length));
        this.cats.push(images[i]);
    }

    draw() {
        if (this.cats.length == 0)
            return;

        let ratio = images[0].height / images[0].width;
        let w = width / (this.cats.length),
            h = w * ratio;
        if (h > height) {
            ratio = images[0].width / images[0].height;
            h = height;
            w = h * ratio;
        }
            
        for (let index = 0; index < this.cats.length; index++) {
            let x = w * index,
                y = height - h;

            image(this.cats[index], x, y, w, h);
        }
    }
}