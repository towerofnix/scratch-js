import { Project } from "../scratch-js/index.mjs";

import Stage from "./Stage/Stage.mjs";
import Dog from "./Dog/Dog.mjs";
import Cat from "./Cat/Cat.mjs";

const stage = new Stage({ costumeNumber: 1 }, { myGlobalVar: "hello" });

const sprites = {
  cat: new Cat({
    x: -150,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  dog: new Dog({
    x: 50,
    y: -100,
    direction: 45,
    costumeNumber: 1,
    size: 300,
    visible: true
  })
};

const project = new Project(stage, sprites);

project.attach("#project");

document.querySelector("#greenFlag").addEventListener("click", () => {
  project.greenFlag();
});

// Play on load
project.greenFlag();

const projElement = document.querySelector("#project");
document.querySelector("#stage-size").addEventListener("input", event => {
  const stageWidth = event.target.value;
  const stageHeight = stageWidth * 0.75;

  projElement.style.width = stageWidth + "px";
  projElement.style.height = stageHeight + "px";
});
