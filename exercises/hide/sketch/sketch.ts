let images: p5.Image[];
let layers: p5.Image[];
let meows: p5.SoundFile[];

let hidingSpots: HidingSpot[];
let cat: Cat;
let founds: Cat[];

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
    for (let n = 1; n < 10; n++)
        meows.push(loadSound(`../sounds/${n}.mp3`));
    for (let n = 1; n < 83; n++)
        meows.push(loadSound(`../sounds/${n}.m4a`));
}

function setup() {
    // Create canvas
    let canvas = createCanvas(1200, 729);

    // Config
    imageMode(CENTER);

    // Initialize hiding spots
    hidingSpots = [
        new HidingSpot(createVector(611, 203), PI / 2),
        new HidingSpot(createVector(521, 82), .4),
        new HidingSpot(createVector(306, 85), -.2),
        new HidingSpot(createVector(460, 332), -PI),
        new HidingSpot(createVector(772, 239), -.2),
        new HidingSpot(createVector(700, 336), -PI /2),
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
        // Initialize new cat
        let hidingSpot = hidingSpots[floor(random(hidingSpots.length))];
        cat = new Cat(hidingSpot);
    }
}

function mousePressed() {
    if (hidingSpots.length == 0)
        // All cats found
        return;

    if (cat.isAt(mouseX, mouseY)) {
        // We found you!
        cat.found();
        cat.showYourself();
    }
    
    let distance = dist(cat.x, cat.y, mouseX, mouseY);
    meow(1 / distance * 30);
}

function meow(volume: number) {
    let meow = meows[floor(random(meows.length))];
    meow.setVolume(volume);
    meow.play();
}

function draw() {
    // Draw background
    drawLayer(layers[0]);

    // Draw cats
    if (cat)
        cat.draw();
    
    for (let found of founds)
        found.draw();

    // Draw foreground
    drawLayer(layers[1]);
    drawLayer(layers[2]);
}

function drawLayer(layer: p5.Image) {
    const ratio = layer.height / layer.width;
    const w = Math.min(width, height),
          h = w * ratio;

    image(layer, width / 2, height /2, w, h);
}