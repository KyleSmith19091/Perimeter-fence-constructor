class ConvexHull {
	constructor() {
		this.hull = [];
	}

	// Find left most point for gift wrapping algorithm
	findLeftMostPoint(points) {
		let minX = Number.POSITIVE_INFINITY;
		let minY = 0;
		let minIdx = 0;

		// O(n) where  n is the number of points to find leftmost point
		points.forEach((point, idx) => {
			if (point.x <= minX) {
				minY = point.y;
				minX = point.x;
				minIdx = idx;
			}
		});

		return { x: minX, y: minY, idx: minIdx }
	}

	orient(p, q, r) {
		const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
		if (val == 0) return 0; 	 // colinear
		return (val > 0) ? 1 : 2; 	// clock or counterclock wise
	}

	jarvisWalk(points) {
        // Convex hull
		this.hull = [];

        // Number of points
		const n = points.length;

        // Only work with more than 2 points
		if (n < 3) { return; }

        // Leftmost point using the cartesian plane relative to the genesis point
		const leftmostPoint = this.findLeftMostPoint(points);
		let p = leftmostPoint.idx, q;

		do {
			this.hull.push(points[p]);
			q = (p + 1) % n;

			for (let i = 0; i < n; i++) {
				if (this.orient(points[p], points[i], points[q]) === 2) {
					q = i;
				}
			}

            // Connect the points
			points[p].connect(points[q]);

			p = q;
		} while (p !== leftmostPoint.idx);
	}

	removePointsInHull(points) {
		return points.filter(value => this.hull.includes(value));
	}
}
