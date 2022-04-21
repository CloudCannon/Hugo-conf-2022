import Hexagon from './hexagon'
const getPageDimensions = () => {
	let bodyEl = document.body;
	let htmlEl = document.documentElement;
	return {
	  width: Math.max(
		bodyEl.scrollWidth,
		bodyEl.offsetWidth,
		htmlEl.clientWidth,
		htmlEl.scrollWidth,
		htmlEl.offsetWidth
	  ),
	  height: Math.max(
		bodyEl.scrollHeight,
		bodyEl.offsetHeight,
		htmlEl.clientHeight,
		htmlEl.scrollHeight,
		htmlEl.offsetHeight
	  ),
	};
  };

export default class Stage {
	constructor(element) {
		this.element = element;
		this.colours = JSON.parse(element.getAttribute('data-colours'));
		this.actorCount = parseInt(element.getAttribute('data-numbers'), 10);

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
		this.actors.forEach((actor) => {
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
		// TODO use this.pageDimensions
		this.actors = [];

		let minX = 0
		let maxX = this.pageDimensions.width / 2;
		const minY = 0
		const maxY = this.pageDimensions.height;
		for (let j = 0; j < this.actorCount / 2; j++) {

			this.actors.push(new Hexagon({
				colour: this.colours[j % this.colours.length],
				x: 0,
				y: j * 30,
				minX, maxX,
				minY, maxY
			}));
		}

		minX = maxX
		maxX = this.pageDimensions.width;
		for (let j = 0; j < this.actorCount / 2; j++) {

			this.actors.push(new Hexagon({
				colour: this.colours[j % this.colours.length],
				x: 0,
				y: j * 30,
				minX, maxX,
				minY, maxY
			}));
		}
	}
  }
  