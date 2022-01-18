class Point {
	constructor(x,y,genesisPoint) {
		this.x = x - genesisPoint.x;
		this.y = y - genesisPoint.y;
		this.genesisPoint = genesisPoint;
	}

	draw() {
		ellipse(this.x + this.genesisPoint.x, this.y + this.genesisPoint.y, POINT_MID, POINT_MID);
		console.log("Drawing at: " + (this.x + this.genesisPoint.x) + " " + (this.y + this.genesisPoint.y));
	}

	connect(otherPoint) {
		line(this.x + this.genesisPoint.x,
			this.y + this.genesisPoint.y, 
			otherPoint.x + this.genesisPoint.x, 
			otherPoint.y + this.genesisPoint.y);
	}

}
