let images: p5.Image[];
let backgroundImage: p5.Image;
let themeSong: p5.SoundFile;

let dance: Move[];
let speed = 30;

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
    // Create canvas
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

    const index = floor(frameCount / speed) % (dance.length); 

    const ratio =  images[0].height / images[0].width;
    const w = Math.min(width, height),
        h = w * ratio;

    const img = images[dance[index]];

    imageMode(CENTER);
    image(img, floor(width / 2), floor(height / 2), w, h);
}