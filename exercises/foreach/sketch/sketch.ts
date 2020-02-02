let images: p5.Image[];
let family: Family;

function preload() {
    images = [];
    images.push(loadImage('../assets/friend2sit.png'));
    images.push(loadImage('../assets/friend2yay.png'));
    images.push(loadImage('../assets/friend3sit.png'));
    images.push(loadImage('../assets/friend3yay.png'));
    images.push(loadImage('../assets/friendsit.png'));
}

function setup() {
    // Create canvas
    let canvas = createCanvas(windowWidth, windowHeight);
    if (document.getElementById('canvas')) canvas.parent('canvas');

    // Initialize family
    family = new Family();

    for (let n = 0; n < 5; n++)
        family.add();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
  
function draw() {
    background('white');
    family.draw();
}