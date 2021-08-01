import React from 'react';
import { brick1, brick2 } from './bricknodes';
import { networkZone1, networkZone2 } from './networknodes';
import { Brick, Module, NetworkZone } from './types';

const module1: Module = {
  x: 200,
  y: 130,
  id: "module1",
  data: {
    label: (
      "Module 1"
    ),
    get brick():Brick {
      return brick1
    },
    get parent():NetworkZone {
      return networkZone1
    },

  },
  type: "input",
  get position() {
    return ({ x: this.x, y: this.y })
  },
  set position(pos) {
    this.x = pos.x;
    this.y = pos.y;
    this.position.x = pos.x + 10;
    this.position.y = pos.y + 10;
  },
}
const module2: Module = {
  x: 0,
  y: 100,
  id: "module2",
  data: {
    label: (
      "Module 2"
    ),
    get brick() {
      return brick2
    },
    get parent() {
      return networkZone2
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

export { module1, module2 }