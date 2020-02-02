let images: p5.Image[];
let family: Cat[];

function preload() {
    images = [];
    images.push(loadImage('../assets/yarn.png'));
    images.push(loadImage('../assets/sort1.png'));
    images.push(loadImage('../assets/sort2.png'));
    images.push(loadImage('../assets/sort3.png'));
    images.push(loadImage('../assets/sort4.png'));
    images.push(loadImage('../assets/sort5.png'));
}

function setup() {
    // Create canvas
    createCanvas(windowWidth, windowHeight);

    // Initialize family
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
  
function draw() {
    background('white');
}