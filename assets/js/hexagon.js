import Actor from './actor'

function mixWithBackground(colorDef, percentage) {
	return `rgb(${[colorDef.r * percentage, colorDef.g * percentage, colorDef.b * percentage].join(',')})`;
}

const a = 2 * Math.PI / 6;
export default class Hexagon extends Actor {
	draw(ctx) {
		const {x, y, size, rotation, opacity} = this.position;
		const percentageOfMaxSize = size / this.maxSize;
		ctx.lineWidth = 5 * percentageOfMaxSize;
		ctx.strokeStyle = mixWithBackground(this.colour, percentageOfMaxSize);
		ctx.globalAlpha = opacity;
		ctx.lineJoin = 'round';

		const radians = rotation * Math.PI / 180; 

		ctx.beginPath();
		for (var i = 0; i < 6; i++) {
		  ctx.lineTo(x + size * Math.cos(a * i + radians), y + size * Math.sin(a * i + radians));
		}
		ctx.closePath();
		ctx.stroke();
	}
}
