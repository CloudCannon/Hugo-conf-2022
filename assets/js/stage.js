import Hexagon from './hexagon'
const getPageDimensions = () => {
	const width  = window.innerWidth || document.documentElement.clientWidth || 
	document.body.clientWidth;
	const height = window.innerHeight|| document.documentElement.clientHeight|| 
	document.body.clientHeight;

	return { width, height }
  };

function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
	  r: parseInt(result[1], 16),
	  g: parseInt(result[2], 16),
	  b: parseInt(result[3], 16)
	} : null;
}

export default class Stage {
	constructor(element) {
		this.element = element;
		this.colours = JSON.parse(element.getAttribute('data-colours')).map((hexColor) => {
			return hexToRgb(hexColor);
		});

		window.addEventListener("resize", this.updatePageDimensions.bind(this));
		this.updatePageDimensions();
	}

	updatePageDimensions() {
		this.pageDimensions = getPageDimensions();
		this.resetCanvas();
		this.resetActors();
		this.draw();
	}

	update(delta) {
		this.actors.forEach((actor) => {
		  actor.update(delta);
		});
	}

	draw() {
		this.context.clearRect(0, 0, this.pageDimensions.width, this.pageDimensions.height)
		this.actors.sort((a, b) => a.depth() - b.depth()).forEach((actor) => {
		  actor.draw(this.context);
		});
	}

	resetCanvas() {
		this.canvas = document.createElement('canvas');
		this.canvas.width = this.pageDimensions.width;
		this.canvas.height = this.pageDimensions.height;
		this.canvas.style = "position: fixed; left: 0; top: 0; pointer-events: none;"
		this.element.innerHTML = '';
		this.element.appendChild(this.canvas);
		this.context = this.canvas.getContext('2d');
	}

	resetActors() {
		this.actors = [];

		const remainingSpace = this.pageDimensions.width - 1024;
		if (remainingSpace < 0) {
			return;
		}

		const totalSpace = remainingSpace + this.pageDimensions.height;
		const minSize = 10;
		const maxSize = 30;
		const actorPadding = 15;
		const actorsPerSpace = Math.min(totalSpace / (maxSize + actorPadding), 100) / 2;
		let minX = 0
		let maxX = remainingSpace / 2;
		const minY = 0
		const maxY = this.pageDimensions.height;
		for (let j = 0; j < actorsPerSpace; j++) {
			this.actors.push(new Hexagon({
				y: maxY / actorsPerSpace * j,
				colour: this.colours[j % this.colours.length],
				minX, maxX,
				minY, maxY,
				minSize, maxSize
			}));
		}

		maxX = this.pageDimensions.width;
		minX = maxX - remainingSpace / 2;
		for (let j = 0; j < actorsPerSpace; j++) {
			this.actors.push(new Hexagon({
				y: maxY / actorsPerSpace * j,
				colour: this.colours[j % this.colours.length],
				minX, maxX,
				minY, maxY,
				minSize, maxSize
			}));
		}
	}
  }
  