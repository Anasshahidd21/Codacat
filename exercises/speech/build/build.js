var Cat = (function () {
    function Cat(location, isHidden, lookingAt, spooked, text, speech) {
        if (isHidden === void 0) { isHidden = false; }
        if (lookingAt === void 0) { lookingAt = undefined; }
        if (spooked === void 0) { spooked = false; }
        if (text === void 0) { text = false; }
        if (speech === void 0) { speech = ''; }
        this.location = location;
        this.isHidden = isHidden;
        this.lookingAt = lookingAt;
        this.spooked = spooked;
        this.text = text;
        this.speech = speech;
    }
    Cat.prototype.reset = function () {
        this.isHidden = true;
        this.lookingAt = undefined;
        this.spooked = false;
        this.text = false;
        this.speech = '';
    };
    Cat.prototype.show = function () {
        this.isHidden = false;
    };
    Cat.prototype.lookAt = function (x, y) {
        this.lookingAt = createVector(x, y);
    };
    Cat.prototype.say = function (input) {
        this.text = true;
        this.speech = input;
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
                .mult(0.15)
                .limit(width * 0.025);
            location.add(t);
        }
        this.drawupil(location);
    };
    Cat.prototype.drawupil = function (location) {
        var ratio = 0.9852941176470589;
        var h = width * 0.1, w = h * ratio;
        fill('black');
        image(pupilImage, location.x, location.y, w, h);
    };
    Cat.prototype.drawSpeech = function (x, y) {
        var input = this.speech;
        image(speechImage, x, y, 600, 600);
        if (input.length > 15) {
            input = input.substring(0, 16);
            input = input + '...';
        }
        text(input, x - 100, y - 100, 250, 80);
        textSize(32);
    };
    return Cat;
}());
var cat;
var catImage;
var pupilImage;
var speechImage;
function preload() {
    catImage = loadImage('../assets/eyecat.png');
    pupilImage = loadImage('../assets/pupil.png');
    speechImage = loadImage('../assets/speech.png');
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
    cat.drawSpeech(width / 2, 0.25 * height);
    cat.draw();
}
function main() {
    cat.show();
    cat.lookAt(mouseX, mouseY);
    cat.say('Hello World!');
    if (mouseIsPressed)
        cat.spooked = true;
}
//# sourceMappingURL=build.js.map