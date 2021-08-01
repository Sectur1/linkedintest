import { module1, module2 } from "./modulenodes";
import { Brick, Module } from "./types";

const brick1: Brick = {
  x: 0,
  y: 100,
  id: "brick1",
  data: {
    label: (
      "Brick 1"
    ),
    get parent():Module {
      return module1
    },

  },
  type: "input",
  get position() {
    return ({ x: this.x, y: this.y })
  },
  set position(pos) {
    this.x = pos.x;
    this.y = pos.y;
    this.position.x = pos.x;
    this.position.y = pos.y;
  },
}

const brick2: Brick = {
  x: 0,
  y: 100,
  id: "brick2",
  data: {
    label: (
      "Brick 2"
    ),
    get parent() {
      return module2
    },

  },
  type: "input",
  get position() {
    return ({ x: this.x, y: this.y })
  },
  set position(pos) {
    this.x = pos.x;
    this.y = pos.y;
    this.position.x = pos.x;
    this.position.y = pos.y;
  },
}


export { brick1,brick2 }