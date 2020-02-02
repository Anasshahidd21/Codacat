var Family = (function () {
    function Family(cats) {
        if (cats === void 0) { cats = []; }
        this.cats = cats;
    }
    Family.prototype.add = function () {
        var i = floor(random(images.length));
        this.cats.push(images[i]);
    };
    Family.prototype.draw = function () {
        if (this.cats.length == 0)
            return;
        var ratio = images[0].height / images[0].width;
        var w = width / (this.cats.length), h = w * ratio;
        if (h > height) {
            ratio = images[0].width / images[0].height;
            h = height;
            w = h * ratio;
        }
        for (var index = 0; index < this.cats.length; index++) {
            var x = w * index, y = height - h;
            image(this.cats[index], x, y, w, h);
        }
    };
    return Family;
}());
var images;
var family;
function preload() {
    images = [];
    images.push(loadImage('../assets/friend2sit.png'));
    images.push(loadImage('../assets/friend2yay.png'));
    images.push(loadImage('../assets/friend3sit.png'));
    images.push(loadImage('../assets/friend3yay.png'));
    images.push(loadImage('../assets/friendsit.png'));
}
function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    if (document.getElementById('canvas'))
        canvas.parent('canvas');
    family = new Family();
    for (var n = 0; n < 5; n++)
        family.add();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background('white');
    family.draw();
}
//# sourceMappingURL=build.js.map