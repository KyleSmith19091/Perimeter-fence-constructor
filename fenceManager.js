// Fence Manager
class FenceManager {

	constructor() {
        // Points represent fence posts
		this.points = [];

        // First post/point to be place
		this.genesisPoint = undefined;

        // Convex hull / Perimeter created by fences
		this.convexHull = new ConvexHull();
	}

    // Setup the genesis point
	setGenesisPoint(x,y) {
		this.genesisPoint = new GenesisPoint(x,y);
	}

    // Create virtual plane from genesis point if set
	setupVirtualPlane() {
		if(this.genesisPoint) {
			line(0, this.genesisPoint.y, WIDTH, this.genesisPoint.y); // line (y = 0)
			line(this.genesisPoint.x, 0, this.genesisPoint.x, HEIGHT); // line (x = 0)
		} 
	}

    // Create the Fence Boundary 
	constructFenceBoundary() {
		if(this.points.length > 2) {
			this.setupVirtualPlane();
			this.convexHull.jarvisWalk(this.points);
			this.points = this.convexHull.removePointsInHull(this.points);
		}
	}

    // Adds fence post to the post collection
	addFencePost(x,y) {
		if(this.points.length === 0) {
			console.log("Added Gensis Point");
			this.setGenesisPoint(x,y);
		} 

		this.points.push(new Point(x,y,this.genesisPoint));
	}

}
