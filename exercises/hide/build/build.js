var Cat = (function () {
    function Cat(spot, img) {
        if (img === void 0) { img = images[floor(random(images.length - 1))]; }
        this.spot = spot;
        this.img = img;
        this.hidden = true;
        this.size = {
            width: 100,
            height: 100
        };
    }
    Object.defineProperty(Cat.prototype, "x", {
        get: function () {
            return this.spot.location.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "y", {
        get: function () {
            return this.spot.location.y;
        },
        enumerable: true,
        configurable: true
    });
    Cat.prototype.showYourself = function () {
        this.hidden = false;
        setTimeout(hide, 1000);
    };
    Cat.prototype.found = function () {
        founds.push(this);
        hidingSpots.splice(hidingSpots.indexOf(this.spot), 1);
    };
    Cat.prototype.isAt = function (x, y) {
        return this.spot.location.x - this.size.width / 2 < x
            && this.spot.location.x + this.size.width / 2 > x
            && this.spot.location.y - this.size.height / 2 < y
            && this.spot.location.y + this.size.height / 2 > y;
    };
    Cat.prototype.draw = function () {
        if (this.hidden)
            return;
        push();
        translate(this.spot.location.x, this.spot.location.y);
        rotate(this.spot.angle);
        image(this.img, 0, 0, 100, 100);
        pop();
    };
    return Cat;
}());
var HidingSpot = (function () {
    function HidingSpot(location, angle) {
        this.location = location;
        this.angle = angle;
    }
    return HidingSpot;
}());
var images;
var layers;
var meows;
var hidingSpots;
var cat;
var founds;
function preload() {
    images = [];
    images.push(loadImage('../assets/hideandseek12.png'));
    images.push(loadImage('../assets/hideandseek22.png'));
    images.push(loadImage('../assets/hideandseek32.png'));
    images.push(loadImage('../assets/hideandseek42.png'));
    images.push(loadImage('../assets/hideandseek52.png'));
    layers = [];
    layers.push(loadImage('../assets/back2.png'));
    layers.push(loadImage('../assets/mid2.png'));
    layers.push(loadImage('../assets/fore2.png'));
    meows = [];
    for (var n = 1; n < 10; n++)
        meows.push(loadSound("../sounds/" + n + ".mp3"));
    for (var n = 1; n < 83; n++)
        meows.push(loadSound("../sounds/" + n + ".m4a"));
}
function setup() {
    var canvas = createCanvas(1200, 729);
    imageMode(CENTER);
    hidingSpots = [
        new HidingSpot(createVector(611, 203), PI / 2),
        new HidingSpot(createVector(521, 82), .4),
        new HidingSpot(createVector(306, 85), -.2),
        new HidingSpot(createVector(460, 332), -PI),
        new HidingSpot(createVector(772, 239), -.2),
        new HidingSpot(createVector(700, 336), -PI / 2),
        new HidingSpot(createVector(306, 467), 0),
        new HidingSpot(createVector(717, 679), -.3),
        new HidingSpot(createVector(445, 525), .1),
        new HidingSpot(createVector(862, 499), -PI / 2 - .1)
    ];
    founds = [];
    hide();
}
function hide() {
    if (hidingSpots.length > 0) {
        var hidingSpot = hidingSpots[floor(random(hidingSpots.length))];
        cat = new Cat(hidingSpot);
    }
}
function mousePressed() {
    if (hidingSpots.length == 0)
        return;
    if (cat.isAt(mouseX, mouseY)) {
        cat.found();
        cat.showYourself();
    }
    var distance = dist(cat.x, cat.y, mouseX, mouseY);
    meow(1 / distance * 30);
}
function meow(volume) {
    var meow = meows[floor(random(meows.length))];
    meow.setVolume(volume);
    meow.play();
}
function draw() {
    drawLayer(layers[0]);
    if (cat)
        cat.draw();
    for (var _i = 0, founds_1 = founds; _i < founds_1.length; _i++) {
        var found = founds_1[_i];
        found.draw();
    }
    drawLayer(layers[1]);
    drawLayer(layers[2]);
}
function drawLayer(layer) {
    var ratio = layer.height / layer.width;
    var w = Math.min(width, height), h = w * ratio;
    image(layer, width / 2, height / 2, w, h);
}
//# sourceMappingURL=build.js.map