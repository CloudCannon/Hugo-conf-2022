const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

const getRandomMinMaxInt = (min, max) => {
	return getRandomInt(max - min) + min;
};

const randomRotation = () => {
	return getRandomInt(180);
}

const bound = (value, min, max) => {
	return Math.max(Math.min(value, max), min)
}

const calculatePercentageThrough = (from, to, percentageComplete) => {
	return from + ((to - from) * percentageComplete);
}

function easing(x) {
	return -(Math.cos(Math.PI * x) - 1) / 2;
}

const maxDistance = 200;
const maxDistanceTravelled = Math.sqrt(maxDistance ** 2 * 2);

export default class Actor {
	constructor({colour, rotation, size, x, y, maxX, minX, maxY, minY, minSize, maxSize}) {
		this.colour = colour;
		this.position = {
			opacity: 0,
			rotation: rotation || randomRotation(),
			size: size || getRandomMinMaxInt(minSize, maxSize),
			x: x || getRandomMinMaxInt(minX, maxX),
			y: y || getRandomMinMaxInt(minY, maxY)
		};
		
		this.minSize = minSize;
		this.maxSize = maxSize;
		this.maxX = maxX;
		this.minX = minX;
		this.maxY = maxY;
		this.minY = minY;
	}

	depth() {
		return this.position.size;
	}

	draw(ctx) {
		throw new Error("NYI")
	}

	update(delta) {
		if (this.nextPosition) {
			this.nextPosition.elapsed += delta;
		}

		if (!this.nextPosition || this.nextPosition.duration <= this.nextPosition.elapsed) {
			const constSizeBound = (this.maxSize - this.minSize) / 2;
			const constXBound = Math.min((this.maxX - this.minX) / 4, maxDistance);
			const constYBound = Math.min((this.maxY - this.minY) / 4, maxDistance);
			this.nextPosition = {
				...this.position,
				duration: this.position.opacity === 0
					? getRandomMinMaxInt(2000, 5000)
					: getRandomMinMaxInt(800, 2000),
				elapsed: 0,
				newOpacity: 1,
				newX: bound(this.position.x + (getRandomMinMaxInt(constXBound * -1, constXBound)), this.minX, this.maxX),
				newY: bound(this.position.y + (getRandomMinMaxInt(constYBound * -1, constYBound)), this.minY, this.maxY),
				newSize: bound(this.position.size + (getRandomMinMaxInt(constSizeBound * -1, constSizeBound)), this.minSize, this.maxSize)
			};

			const distanceTravelled = Math.sqrt((this.position.x - this.nextPosition.newX) ** 2 + (this.position.y - this.nextPosition.newY) ** 2);
			const rotationPercentage = distanceTravelled / maxDistanceTravelled;
			this.nextPosition.newRotation = this.nextPosition.rotation + calculatePercentageThrough(0, 180, rotationPercentage) * (getRandomMinMaxInt(-1, 1) >= 0 ? 1 : -1)
		}

		const {opacity, newOpacity, x, newX, y, newY, size, newSize, rotation, newRotation} = this.nextPosition;
		const percentageComplete = easing(this.nextPosition.elapsed / this.nextPosition.duration);

		this.position = {
			opacity: calculatePercentageThrough(opacity, newOpacity, percentageComplete),
			x: calculatePercentageThrough(x, newX, percentageComplete),
			y: calculatePercentageThrough(y, newY, percentageComplete),
			size: calculatePercentageThrough(size, newSize, percentageComplete),
			rotation: calculatePercentageThrough(rotation, newRotation, percentageComplete)
		};
	}
}
  