class Enemy {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.xoff = x;
		this.yoff = y;
		this.alive = true;
	}

	draw() {
		if(this.alive) {
			fill(ENEMY_COLOR);
			ellipse(this.x, this.y, ENEMY_POINT_MID, ENEMY_POINT_MID);	
			this.update();
		}
	}

	update() {
		this.x = noise(this.xoff) * WIDTH; 
		this.y = noise(this.yoff) * HEIGHT;
		this.xoff += 0.01;
		this.yoff += 0.01;
	}

	inBoundary(convexHullPoints) {
		let trueCount = 0;
		convexHullPoints.forEach((point) => {
			this._isLeft(point,point.endpoint,this) ? trueCount += 1 : trueCount += 0;
		});
		
		if(trueCount === convexHullPoints.length) {
			this.alive = false;
			this.x = -1;
			this.y = -1;
			return true;
		}
		return false;
	}

	_isLeft(a,b,c) {
		return ((b.X - a.X) 
		* (c.y - a.Y) 
		- (b.Y - a.Y) 
		* (c.x - a.X)) 
		> 0;
	}

}