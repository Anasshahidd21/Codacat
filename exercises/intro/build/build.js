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
        imageMode('center');
        var h = width;
        var w = 0.9116684841875682 * h;
        image(catImage, this.location.x, this.location.y, w, h);
        this.drawEye(createVector(this.location.x - width * 0.14, this.location.y + width * 0.0625));
        this.drawEye(createVector(this.location.x + width * 0.14, this.location.y + width * 0.0625));
    };
    Cat.prototype.drawEye = function (location) {
        if (this.lookingAt) {
            var t = p5.Vector.sub(this.lookingAt, location)
                .mult(.15)
                .limit(width * 0.025);
            location.add(t);
        }
        this.drawupil(location);
    };
    Cat.prototype.drawupil = function (location) {
        var ratio = 0.9852941176470589;
        var h = width * .1, w = h * ratio;
        fill('black');
        image(pupilImage, location.x, location.y, w, h);
    };
    return Cat;
}());
var cat;
var catImage;
var pupilImage;
function preload() {
    catImage = loadImage('../assets/eyecat.png');
    pupilImage = loadImage('../assets/pupil.png');
}
function setup() {
    var canvas = createCanvas(800, 800);
    if (document.getElementById('canvas'))
        canvas.parent('canvas');
    cat = new Cat(createVector(width / 2, height - width * 0.3125));
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background('white');
    cat.reset();
    main();
    var speed = 5;
    cat.location.x = width / 2;
    cat.location.y = cat.isHidden
        ? Math.min(height - height * 0.3125, cat.location.y + speed)
        : Math.max(height * 0.4375, cat.location.y - speed);
    cat.draw();
}
function main() {
    cat.show();
    cat.lookAt(mouseX, mouseY);
    if (mouseIsPressed)
        cat.spooked = true;
}
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
        imageMode('center');
        var h = width;
        var w = 0.9116684841875682 * h;
        image(catImage, this.location.x, this.location.y, w, h);
        this.drawEye(createVector(this.location.x - width * 0.14, this.location.y + width * 0.0625));
        this.drawEye(createVector(this.location.x + width * 0.14, this.location.y + width * 0.0625));
    };
    Cat.prototype.drawEye = function (location) {
        if (this.lookingAt) {
            var t = p5.Vector.sub(this.lookingAt, location)
                .mult(.15)
                .limit(width * 0.025);
            location.add(t);
        }
        this.drawupil(location);
    };
    Cat.prototype.drawupil = function (location) {
        var ratio = 0.9852941176470589;
        var h = width * .1, w = h * ratio;
        fill('black');
        image(pupilImage, location.x, location.y, w, h);
    };
    return Cat;
}());
var cat;
var catImage;
var pupilImage;
function preload() {
    catImage = loadImage('../assets/eyecat.png');
    pupilImage = loadImage('../assets/pupil.png');
}
function setup() {
    var canvas = createCanvas(800, 800);
    if (document.getElementById('canvas'))
        canvas.parent('canvas');
    cat = new Cat(createVector(width / 2, height - width * 0.3125));
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background('white');
    cat.reset();
    main();
    var speed = 5;
    cat.location.x = width / 2;
    cat.location.y = cat.isHidden
        ? Math.min(height - height * 0.3125, cat.location.y + speed)
        : Math.max(height * 0.4375, cat.location.y - speed);
    cat.draw();
}
function main() {
    cat.show();
    cat.lookAt(mouseX, mouseY);
    if (mouseIsPressed)
        cat.spooked = true;
}
//# sourceMappingURL=build.js.map