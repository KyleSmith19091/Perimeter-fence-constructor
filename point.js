class Point {
	constructor(x,y,genesisPoint) {
		this.x = x - genesisPoint.x;
		this.y = y - genesisPoint.y;
		this.X = x;
		this.Y = y;
		this.genesisPoint = genesisPoint;
		this.endpoint = undefined;
	}

	draw() {
		ellipse(this.x + this.genesisPoint.x, this.y + this.genesisPoint.y, POINT_MID, POINT_MID);
	}

	connect(otherPoint) {
		line(this.x + this.genesisPoint.x,
			this.y + this.genesisPoint.y, 
			otherPoint.x + this.genesisPoint.x, 
			otherPoint.y + this.genesisPoint.y);
		this._setEndPoint(otherPoint);
	}

	_setEndPoint(otherPoint) {
		this.endpoint = otherPoint;
	}


}
