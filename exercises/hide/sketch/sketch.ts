let images: p5.Image[];

function preload() {
    images = [];
    images.push(loadImage('../assets/hideandseek1.png'));
    images.push(loadImage('../assets/hideandseek2.png'));
    images.push(loadImage('../assets/hideandseek3.png'));
    images.push(loadImage('../assets/hideandseek4.png'));
    images.push(loadImage('../assets/hideandseek5.png'));
}

function setup() {
    // Create canvas
    let canvas = createCanvas(windowWidth, windowHeight);
    if (document.getElementById('canvas')) canvas.parent('canvas');

    // Config
    imageMode(CENTER);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
  
function draw() {
    background('white');

    // Hide cat
    // on click
        // if cat reveal
        // if not miaw
}