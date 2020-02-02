let cat: Cat;

let catImage: p5.Image;
let pupilImage: p5.Image;
let backgroundImage: p5.Image;
let catSurprised: p5.Image;
let themeSong: p5.SoundFile;

function preload() {
    catImage = loadImage('../assets/eyecat.png');
    pupilImage = loadImage('../assets/pupil.png');
    backgroundImage = loadImage('../assets/background.jpg');
    catSurprised = loadImage('../assets/eyecatsurprise.png');
    themeSong = loadSound('../assets/Theme.mp3');
}

function setup() {
    // Create canvas
    let canvas = createCanvas(600, 600);
    
    // Intialize universe
    cat = new Cat(
        createVector(width / 2, height - 250)
    );


    themeSong.loop();
}
  
function main() {
    cat.showYourself();
    cat.lookAt(mouseX, mouseY);

    if (mouseIsPressed)
        cat.surprised = true;
}

function draw() {
    background('white');

    imageMode(CORNER);
    background(backgroundImage);

    cat.reset();
    main();

    if (!cat.isHidden) 
        cat.draw();
}
