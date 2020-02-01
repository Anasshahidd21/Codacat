let cat: Cat;

function setup() {
    // Create canvas
    let canvas = createCanvas(800, 800);
    if (document.getElementById('canvas')) canvas.parent('canvas');

    // Intialize universe
    cat = new Cat(
        createVector(width / 2, height / 2)
    );
}

function draw() {
    background('white');

    cat.reset();
    main();

    const speed = 5;
    cat.location.y = cat.isHidden
        ? Math.min(height + 100, cat.location.y + speed)
        : Math.max(height / 2, cat.location.y - speed);

    cat.draw();
}
