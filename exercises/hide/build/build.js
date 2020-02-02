var Move;
(function (Move) {
    Move[Move["Cheer"] = 0] = "Cheer";
    Move[Move["Dab"] = 1] = "Dab";
    Move[Move["Fancy"] = 2] = "Fancy";
    Move[Move["Yeah"] = 3] = "Yeah";
})(Move || (Move = {}));
var images;
var dance;
function preload() {
    images = [];
    images.push(loadImage('../assets/cheer.png'));
    images.push(loadImage('../assets/dab.png'));
    images.push(loadImage('../assets/fancy.png'));
    images.push(loadImage('../assets/yeah!.png'));
}
function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    if (document.getElementById('canvas'))
        canvas.parent('canvas');
    imageMode(CENTER);
    dance = [
        Move.Cheer,
        Move.Dab,
        Move.Cheer
    ];
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background('white');
    var speed = 30;
    var index = floor(frameCount / speed) % (images.length - 1);
    var ratio = images[0].height / images[0].width;
    var w = Math.min(width, height), h = w * ratio;
    var img = images[dance[index]];
    image(img, floor(width / 2), floor(height / 2), w, h);
}
//# sourceMappingURL=build.js.map