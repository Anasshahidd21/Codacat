var Cat = (function () {
    function Cat(location, isHidden, lookingAt, surprised) {
        if (isHidden === void 0) { isHidden = false; }
        if (lookingAt === void 0) { lookingAt = undefined; }
        if (surprised === void 0) { surprised = false; }
        this.location = location;
        this.isHidden = isHidden;
        this.lookingAt = lookingAt;
        this.surprised = surprised;
    }
    Cat.prototype.reset = function () {
        this.isHidden = true;
        this.lookingAt = undefined;
        this.surprised = false;
    };
    Cat.prototype.showYourself = function () {
        this.isHidden = false;
    };
    Cat.prototype.lookAt = function (x, y) {
        this.lookingAt = createVector(x, y);
    };
    Cat.prototype.draw = function () {
        noStroke();
        fill('red');
        imageMode('center');
        var img = this.surprised
            ? catSurprised
            : catImage;
        var ratio = img.height / img.width;
        var w = 500, h = w * ratio;
        image(img, this.location.x, this.location.y, w, h);
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
        if (!this.surprised)
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
var backgroundImage;
var catSurprised;
var themeSong;
function preload() {
    catImage = loadImage('../assets/eyecat.png');
    pupilImage = loadImage('../assets/pupil.png');
    backgroundImage = loadImage('../assets/background.jpg');
    catSurprised = loadImage('../assets/eyecatsurprise.png');
    themeSong = loadSound('../assets/Theme.mp3');
}
function setup() {
    var canvas = createCanvas(600, 600);
    cat = new Cat(createVector(width / 2, height - 250));
    themeSong.loop();
}
function main() {
    cat.showYourself();
    cat.lookAt(mouseX, mouseY);
    if (mouseIsPressed)
        cat.surprised = true;
}
function draw() {
    background('white');
    imageMode(CORNER);
    background(backgroundImage);
    cat.reset();
    main();
    if (!cat.isHidden)
        cat.draw();
}
//# sourceMappingURL=build.js.map