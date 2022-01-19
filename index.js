let fenceManager;

const RIGHT_MOUSE_BUTTON = 3;

let enemies = [];
let killCount = 0;
let xoff = 0;
let yoff = 10000;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	fenceManager = new FenceManager();
}

function draw() {
	background(0);

	stroke(TEXT_COLOR);
	fill(TEXT_COLOR);

	textSize(32);
	text('Points: ' + fenceManager.points.length, 10, 30);
	text('Enemies Zapped ⚡️: ' + killCount, 180, 30);

	stroke(PRIMARY_COLOR);
	fill(color(SECONDARY_COLOR));

	// Attempt to Render Cartesian Plane from point
	fenceManager.setupVirtualPlane();

	// Render points
	fenceManager.points.forEach((point) => {
		point.draw(fenceManager.genesisPoint);
	});

    // Calculate the convex hull
	fenceManager.constructFenceBoundary();

	// Render enemies
	enemies.length > 0 && enemies.forEach((enemy) => {
		enemy.draw();
		enemy.inBoundary(fenceManager.points) ? killCount += 1 : killCount += 0;
	});

}

function mousePressed(event) {

	if(mouseX < 0 || mouseX >= WIDTH || mouseY < 0 || mouseY >= HEIGHT) {
		console.log("Out of bounds!");
		return;
	}

	if(event && event.which !== RIGHT_MOUSE_BUTTON) {
		fenceManager.addFencePost(mouseX, mouseY);
	} else {
	}
}

function keyTyped() {
	if(key === 'e') {
		enemies.push(new Enemy(mouseX, mouseY));
	}
}
