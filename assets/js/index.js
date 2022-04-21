import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";

import Stage from './stage'
Alpine.plugin(intersect);

window.Alpine = Alpine;

Alpine.start();

function resetContainers() {
  const containers = document.getElementsByClassName("js-hex-animation-container");

  const stages = [];
  for (let i = 0; i < containers.length; i++) {
    const element = containers[i];

    stages.push(new Stage(element));
  }

  let lastTime = new Date().getTime();
  const animate = () => {
    const currentTime = new Date().getTime();
    stages.forEach((stage) => {
      stage.update(currentTime - lastTime);
      stage.draw();
    });
    lastTime = currentTime;
    window.requestAnimationFrame(animate);
  }

  window.requestAnimationFrame(animate);
}
resetContainers();