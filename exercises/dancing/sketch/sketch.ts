let images: p5.Image[];
let dance: Move[];

function preload() {
    images = [];
    images.push(loadImage('../assets/cheer.png'));
    images.push(loadImage('../assets/dab.png'));
    images.push(loadImage('../assets/fancy.png'));
    images.push(loadImage('../assets/yeah!.png'));
}

function setup() {
    // Create canvas
    let canvas = createCanvas(windowWidth, windowHeight);
    if (document.getElementById('canvas')) canvas.parent('canvas');

    // Config
    imageMode(CENTER);

    // Initialize dance
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

    const speed = 30;
    const index = floor(frameCount / speed) % (images.length - 1);    

    const ratio =  images[0].height / images[0].width;
    const w = Math.min(width, height),
        h = w * ratio;

    const img = images[dance[index]];

    image(img, floor(width / 2), floor(height / 2), w, h);
}