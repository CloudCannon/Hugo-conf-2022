import Alpine from "alpinejs";
import intersect from '@alpinejs/intersect'
Alpine.plugin(intersect)
 
window.Alpine = Alpine;

Alpine.start();


// Animate hexagons
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const sizeOfPage = 1000;

const getElements = () => {
  let hexagonsEl = document.getElementsByClassName("js-hex");
  for (const key in hexagonsEl) {
    if (Object.hasOwnProperty.call(hexagonsEl, key)) {
      const element = hexagonsEl[key];
      element.style.left = getRandomInt(sizeOfPage) + "px";
      element.style.top = getRandomInt(sizeOfPage) + "px";
    }
  }
}


getElements();