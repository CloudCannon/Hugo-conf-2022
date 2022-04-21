import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
Alpine.plugin(intersect);

window.Alpine = Alpine;

Alpine.start();

// Animate hexagons
let animationContainers = document.getElementsByClassName("js-hex-animation-container");
let windowSize;
const maxMoveDistance = 35;
const movementSpeed = 1500;
const maxRotation = 180;
const depthsLevels = 3;
const depthTable = [];
const noAnimationSpaceWidth = 1100;
const hexSize = {
  w: 48,
  h: 54,
};

const genScalingTable = (depthsLevels, elSize) => {
  for (let i = 0; i < depthsLevels; i++) {
    const level = {
      w: elSize.w / (i + 1),
      h: elSize.h / (i + 1),
    };
    depthTable.push(level);
  }
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomMinMaxInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getPageDimensions = () => {
  let bodyEl = document.body;
  let htmlEl = document.documentElement;
  windowSize = {
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

let leftBlockDimentions = {};
const lefBlockAllowed = () => {
  const sideDimentions = (windowSize.width - noAnimationSpaceWidth) / 2;
  leftBlockDimentions = {
    width: {
      min: 0,
      max: sideDimentions,
    },
    height: {
      min: 0,
      max: windowSize.height - hexSize.h,
    },
  };
};

let rightBlockDimentions = {};
const rightBlockAllowed = () => {
  const sideDimentions = (windowSize.width - noAnimationSpaceWidth) / 2;
  rightBlockDimentions = {
    width: {
      min: sideDimentions + noAnimationSpaceWidth,
      max: windowSize.width - hexSize.w,
    },
    height: {
      min: 0,
      max: windowSize.height - hexSize.h,
    },
  };
};

genScalingTable(depthsLevels, hexSize);

window.addEventListener("resize", getPageDimensions);

const initElements = () => {
  let count = 0;
  rightBlockAllowed();
  lefBlockAllowed();
  console.log(rightBlockDimentions);
  console.log(leftBlockDimentions);
  let allowedBlockDimentions;
  for (const key in hexagonsEl) {
    if (Object.hasOwnProperty.call(hexagonsEl, key)) {
      const element = hexagonsEl[key];
      if (count <= hexagonsEl.length / 2) {
        allowedBlockDimentions = rightBlockDimentions;
      } else {
        allowedBlockDimentions = leftBlockDimentions;
      }
      let elPosistion = {
        x: getRandomMinMaxInt(
          allowedBlockDimentions.width.min,
          allowedBlockDimentions.width.max
        ),
        y: getRandomMinMaxInt(
          allowedBlockDimentions.height.min,
          allowedBlockDimentions.height.max
        ),
      };
      element.style.transitionDuration = movementSpeed + "ms";
      genNewPosistion(element, elPosistion); //TODO: don't fetch from DOM keep track of elements in memory
      setNewPosistion(element, allowedBlockDimentions);
      setRotate(element);
      setDepth(element);
      count++;
    }
  }
};

const genNewPosistion = (element, elPosistion) => {
  element.style.left = elPosistion.x + "px";
  element.style.top = elPosistion.y + "px";
};

const calcMove = (cord, allowedArea) => {
  // console.log(allowedArea);
  if (cord >= allowedArea.max - maxMoveDistance) {
    return cord - maxMoveDistance;
  }
  if (cord <= allowedArea.min + maxMoveDistance) {
    return cord + maxMoveDistance;
  }
  if (getRandomInt(2) == 1) {
    return cord + getRandomInt(maxMoveDistance);
  }
  return cord - getRandomInt(maxMoveDistance);
};

const setNewPosistion = (element, allowedArea) => {
  let pos = getElPosition(element);
  pos = {
    x: calcMove(pos.x, allowedArea.width),
    y: calcMove(pos.y, allowedArea.height),
  };
  genNewPosistion(element, pos);
};

const moveAllEl = (elements) => {
  let count = 0;
  let allowedBlockDimentions;
  for (const key in elements) {
    if (Object.hasOwnProperty.call(elements, key)) {
      const element = elements[key];
      if (count <= hexagonsEl.length / 2) {
        allowedBlockDimentions = rightBlockDimentions;
      } else {
        allowedBlockDimentions = leftBlockDimentions;
      }
      setNewPosistion(element, allowedBlockDimentions);
      setRotate(element);
      const depth = genDepth();
      setDepth(element, depth);
      scaleElement(element, depth);
      setBrightness(element, depth);
    }
    count++;
  }
};

const getElPosition = (element) => {
  //TODO: dont fetch from DOM
  return {
    x: parseInt(element.style.left),
    y: parseInt(element.style.top),
  };
};

const setRotate = (element) => {
  element.style.rotate = getRandomInt(maxRotation) + "deg";
};

const genDepth = () => {
  return -1 * getRandomInt(depthsLevels);
};

const setDepth = (element, depth) => {
  element.style.zIndex = depth;
};

const setBrightness = (element, depth) => {
  element.style.filter = "brightness(" + 100 / (depth * -1 + 1) + "%)";
};

const scaleElement = (element, depth) => {
  depth = depth * -1; //correct negative value
  element.style.width = depthTable[depth].w + "px";
  element.style.height = depthTable[depth].h + "px";
};

window.addEventListener("resize", initElements);

getPageDimensions();
initElements();

console.log(animationContainers);

// setInterval(async () => {
	
//   await moveAllEl(hexagonsEl);
// }, movementSpeed);
