var Cat = (function () {
    function Cat(location, isHidden, lookingAt, spooked) {
        if (isHidden === void 0) { isHidden = false; }
        if (lookingAt === void 0) { lookingAt = undefined; }
        if (spooked === void 0) { spooked = false; }
        this.location = location;
        this.isHidden = isHidden;
        this.lookingAt = lookingAt;
        this.spooked = spooked;
    }
    Cat.prototype.reset = function () {
        this.isHidden = true;
        this.lookingAt = undefined;
        this.spooked = false;
    };
    Cat.prototype.show = function () {
        this.isHidden = false;
    };
    Cat.prototype.lookAt = function (x, y) {
        this.lookingAt = createVector(x, y);
    };
    Cat.prototype.draw = function () {
        noStroke();
        fill('red');
        ellipse(this.location.x, this.location.y, 300);
        this.drawEye(createVector(this.location.x - 60, this.location.y - 50));
        this.drawEye(createVector(this.location.x + 60, this.location.y - 50));
    };
    Cat.prototype.drawEye = function (location) {
        if (this.spooked)
            fill('black');
        else
            fill('white');
        ellipse(location.x, location.y, 50);
        if (this.lookingAt) {
            var t = p5.Vector.sub(this.lookingAt, location)
                .mult(.15)
                .limit(15);
            location.add(t);
        }
        fill('black');
        ellipse(location.x, location.y, 15, 20);
    };
    return Cat;
}());
var cat;
function setup() {
    var canvas = createCanvas(800, 800);
    if (document.getElementById('canvas'))
        canvas.parent('canvas');
    cat = new Cat(createVector(width / 2, height / 2));
}
function draw() {
    background('white');
    cat.reset();
    main();
    var speed = 5;
    cat.location.y = cat.isHidden
        ? Math.min(height + 100, cat.location.y + speed)
        : Math.max(height / 2, cat.location.y - speed);
    cat.draw();
}
function main() {
    cat.show();
    cat.lookAt(mouseX, mouseY);
    if (mouseIsPressed)
        cat.spooked = true;
}
//# sourceMappingURL=build.js.map