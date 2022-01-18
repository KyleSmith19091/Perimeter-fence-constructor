let fenceManager;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	fenceManager = new FenceManager();
}

function draw() {
	background(0);
	stroke(255);
	fill(255);

	textSize(32);
	text('Points: ' + fenceManager.points.length, 10, 30);

	// Attempt to Render Cartesian Plane from point
	fenceManager.setupVirtualPlane();

	// Render points
	fenceManager.points.forEach((point) => {
		point.draw(fenceManager.genesisPoint);
	});

    // Calculate the convex hull
	fenceManager.constructFenceBoundary();
}

function mousePressed() {

	if(mouseX < 0 || mouseX >= WIDTH || mouseY < 0 || mouseY >= HEIGHT) {
		console.log("Out of bounds!");
		return;
	}

	fenceManager.addFencePost(mouseX, mouseY);

}
