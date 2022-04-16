import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
Alpine.plugin(intersect);

window.Alpine = Alpine;

Alpine.start();

// Animate hexagons
let hexagonsEl = document.getElementsByClassName("js-hex");
let windowSize;
const maxMoveDistance = 40;
const movementSpeed = 1000
const hexSize = {
  w: 48,
  h: 54,
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getPageDimensions = () => {
  let bodyEl = document.body;
  let htmlEl = document.documentElement;
  windowSize = {
    width: (Math.max(
      bodyEl.scrollWidth,
      bodyEl.offsetWidth,
      htmlEl.clientWidth,
      htmlEl.scrollWidth,
      htmlEl.offsetWidth
    ))/2 - 450,
    height: Math.max(
      bodyEl.scrollHeight,
      bodyEl.offsetHeight,
      htmlEl.clientHeight,
      htmlEl.scrollHeight,
      htmlEl.offsetHeight
    ),
  };
};

window.addEventListener("resize", getPageDimensions);

const initElements = () => {
  for (const key in hexagonsEl) {
    if (Object.hasOwnProperty.call(hexagonsEl, key)) {
      const element = hexagonsEl[key];
      let elPosistion = {
        y: getRandomInt(windowSize.width - hexSize.h),
        x: getRandomInt(windowSize.height - hexSize.w),
      };
      placeEl(element, elPosistion);
    }
  }
};

const placeEl = (element, elPosistion) => {
  element.style.left = elPosistion.y + "px";
  element.style.top = elPosistion.x + "px";
};

const calcMove = (cord) => {
  if (getRandomInt(2) == 1) {
    return cord + getRandomInt(maxMoveDistance);
  }
  return cord - getRandomInt(maxMoveDistance);
};

const moveEl = (element) => {
  let pos = getElPosition(element);
  pos = {
    x: calcMove(pos.x),
    y: calcMove(pos.y),
  };
  placeEl(element, pos);
};

const moveAllEl = (elements) => {
  for (const key in elements) {
    if (Object.hasOwnProperty.call(elements, key)) {
      const element = elements[key];
      moveEl(element);
      rotateRandom(element);
    }
  }
};

const getElPosition = (element) => {
  return {
    x: parseInt(element.style.top),
    y: parseInt(element.style.left),
  };
};

const rotateRandom = (element) => {
  element.style.rotate = getRandomInt(100) + "deg";
}


window.addEventListener("resize", initElements);

getPageDimensions();
initElements();

setInterval(() => {
  moveAllEl(hexagonsEl);
}, movementSpeed);
