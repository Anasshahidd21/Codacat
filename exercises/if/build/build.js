var Cat = (function () {
    function Cat(location, isHidden, lookingAt, spooked, isWearingGlasses) {
        if (isHidden === void 0) { isHidden = false; }
        if (lookingAt === void 0) { lookingAt = undefined; }
        if (spooked === void 0) { spooked = false; }
        if (isWearingGlasses === void 0) { isWearingGlasses = false; }
        this.location = location;
        this.isHidden = isHidden;
        this.lookingAt = lookingAt;
        this.spooked = spooked;
        this.isWearingGlasses = isWearingGlasses;
    }
    Cat.prototype.reset = function () {
        this.isHidden = true;
        this.lookingAt = undefined;
    };
    Cat.prototype.show = function () {
        this.isHidden = false;
    };
    Cat.prototype.ifCatShow = function () {
        this.isWearingGlasses = true;
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
    };
    Cat.prototype.level1If = function (x, y) {
        if (this.isWearingGlasses == false) {
            var h = width;
            var w = 0.9116684841875682 * h;
            this.isHidden = true;
            image(catGlasses, this.location.x, this.location.y, w, h);
        }
    };
    return Cat;
}());
var cat;
var catImage;
var pupilImage;
var speechImage;
var catGlasses;
function preload() {
    catImage = loadImage('../assets/hideandseek1.png');
    pupilImage = loadImage('../assets/pupil.png');
    catGlasses = loadImage('../assets/hideandseek4.png');
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
    cat.location.y = height * 0.4375;
    cat.draw();
    cat.level1If(this.location.x, this.location.y);
}
function main() {
    if (mouseIsPressed)
        cat.spooked = true;
    cat.level1If(cat.location.x, cat.location.y);
}
//# sourceMappingURL=build.js.map