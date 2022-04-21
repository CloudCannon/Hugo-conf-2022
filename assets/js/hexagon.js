const a = 2 * Math.PI / 6;
const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

const getRandomIntAroundZero = (max) => {
	return getRandomInt(max) - (max / 2);
};

const randomSize = () => {
	return getRandomInt(10);
}

const randomX = () => {
	return getRandomInt(10);
}

const randomY = () => {
	return getRandomInt(10);
}

const bound = (value, min, max) => {
	return Math.max(Math.min(value, max), min)
}


export default class Hexagon {
	constructor({colour, size, x, y, maxX, minX, maxY, minY}) {
		this.colour = colour;
		this.size = size || randomSize();
		this.x = x || randomX(minX, maxX);
		this.y = y || randomY(minY, maxY);
		this.maxX = maxX;
		this.minX = minX;
		this.maxY = maxY;
		this.minY = minY;
	}

	draw(ctx) {
		ctx.lineWidth = 5;
		ctx.strokeStyle = this.colour;

		ctx.beginPath();
		for (var i = 0; i < 6; i++) {
		  ctx.lineTo(this.x + this.size * Math.cos(a * i), this.y + this.size * Math.sin(a * i));
		}
		ctx.closePath();
		ctx.stroke();
	}

	update(delta) {
		const velocity = 100;
		this.x = bound(this.x + (getRandomIntAroundZero(100) / velocity * delta), this.minX, this.maxX);
		this.y = bound(this.y + (getRandomIntAroundZero(100) / velocity * delta), this.minY, this.maxY);
		this.size = bound(this.size + (getRandomIntAroundZero(100) / velocity * delta), 0, 20);
	}
}
  