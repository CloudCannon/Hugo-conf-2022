import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
Alpine.plugin(intersect);

window.Alpine = Alpine;

Alpine.start();

// Animate hexagons
let hexagonsEl = document.getElementsByClassName("js-hex");
let windowSize;
const maxMoveDistance = 30;
const movementSpeed = 1500;
const maxRotation = 180;
const depthsLevels = 3;
const depthTable = [];
const hexSize = {
  w: 48,
  h: 54,
};

const genDepthTable = (depthsLevels, elSize) => {
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

const getPageDimensions = () => {
  let bodyEl = document.body;
  let htmlEl = document.documentElement;
  windowSize = {
    width:
      Math.max(
        bodyEl.scrollWidth,
        bodyEl.offsetWidth,
        htmlEl.clientWidth,
        htmlEl.scrollWidth,
        htmlEl.offsetWidth
      ) /
        2 -
      450,
    height: Math.max(
      bodyEl.scrollHeight,
      bodyEl.offsetHeight,
      htmlEl.clientHeight,
      htmlEl.scrollHeight,
      htmlEl.offsetHeight
    ),
  };
};

genDepthTable(depthsLevels, hexSize);

window.addEventListener("resize", getPageDimensions);

const initElements = () => {
  for (const key in hexagonsEl) {
    if (Object.hasOwnProperty.call(hexagonsEl, key)) {
      const element = hexagonsEl[key];
      let elPosistion = {
        y: getRandomInt(windowSize.width - hexSize.h),
        x: getRandomInt(windowSize.height - hexSize.w),
      };
      element.style.transitionDuration = movementSpeed + "ms";
      genNewPosistion(element, elPosistion); //TODO: don't fetch from DOM
      setNewPosistion(element);
      setRotate(element);
      setDepth(element);
    }
  }
};

const genNewPosistion = (element, elPosistion) => {
  element.style.left = elPosistion.y + "px";
  element.style.top = elPosistion.x + "px";
};

const calcMove = (cord) => {
  if (getRandomInt(2) == 1) {
    return cord + getRandomInt(maxMoveDistance);
  }
  return cord - getRandomInt(maxMoveDistance);
};

const setNewPosistion = (element) => {
  let pos = getElPosition(element);
  pos = {
    x: calcMove(pos.x),
    y: calcMove(pos.y),
  };
  genNewPosistion(element, pos);
};

const moveAllEl = (elements) => {
  for (const key in elements) {
    if (Object.hasOwnProperty.call(elements, key)) {
      const element = elements[key];
      setNewPosistion(element);
      setRotate(element);
      const depth = genDepth();
      setDepth(element, depth);
      scaleElement(element, depth);
      setBrightness(element, depth);
    }
  }
};

const getElPosition = (element) => {
  return {
    x: parseInt(element.style.top),
    y: parseInt(element.style.left),
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

setInterval(async () => {
  await moveAllEl(hexagonsEl);
}, movementSpeed);

console.log(depthTable);
