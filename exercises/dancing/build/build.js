var Move;
(function (Move) {
    Move[Move["Cheer"] = 0] = "Cheer";
    Move[Move["Dab"] = 1] = "Dab";
    Move[Move["Fancy"] = 2] = "Fancy";
    Move[Move["Yeah"] = 3] = "Yeah";
})(Move || (Move = {}));
var images;
var backgroundImage;
var themeSong;
var dance;
var speed = 30;
function preload() {
    images = [];
    images.push(loadImage('../assets/cheer.png'));
    images.push(loadImage('../assets/dab.png'));
    images.push(loadImage('../assets/fancy.png'));
    images.push(loadImage('../assets/yeah!.png'));
    backgroundImage = loadImage('../assets/backgroundalt.jpg');
    themeSong = loadSound('../assets/Theme.mp3');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    themeSong.loop();
    createDance();
}
function createDance() {
    speed = 32;
    dance = [
        Move.Yeah,
        Move.Cheer,
        Move.Dab,
        Move.Fancy
    ];
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    imageMode(CORNER);
    background(backgroundImage);
    var index = floor(frameCount / speed) % (dance.length);
    var ratio = images[0].height / images[0].width;
    var w = Math.min(width, height), h = w * ratio;
    var img = images[dance[index]];
    imageMode(CENTER);
    image(img, floor(width / 2), floor(height / 2), w, h);
}
//# sourceMappingURL=build.js.map