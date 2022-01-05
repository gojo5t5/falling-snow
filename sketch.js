var drops = [];

function setup() {
    createCanvas(screen.width, screen.height);
    for (var i = 0; i < 1000; i++) {
        drops[i] = new Drop();
    }
}

function draw() {
    background(0, 0, 0);
    for (var drop of drops) {
        drop.fall();
        drop.show();
    }
}