class FenceManager {
	constructor() {
		this.points = [];
		this.genesisPoint = undefined;
		this.convexHull = new ConvexHull();
	}

	setGenesisPoint(x,y) {
		this.genesisPoint = new GenesisPoint(x,y);
	}

	setupVirtualPlane() {
		if(this.genesisPoint) {
			line(0, this.genesisPoint.y, WIDTH, this.genesisPoint.y); // line (y = 0)
			line(this.genesisPoint.x, 0, this.genesisPoint.x, HEIGHT); // line (x = 0)
		} 
	}

	constructFenceBoundary() {
		if(this.points.length > 2) {
			this.setupVirtualPlane();
			this.convexHull.jarvisWalk(this.points);
			this.points = this.convexHull.removePointsInHull(this.points);
		}
	}

	addFencePost(x,y) {
		if(this.points.length === 0) {
			console.log("Added Gensis Point");
			this.setGenesisPoint(x,y);
		} 

		this.points.push(new Point(x,y,this.genesisPoint));
	}

}
