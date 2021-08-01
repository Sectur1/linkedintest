import React from 'react';

import { networkZone1, networkZone2 } from "./networknodes"
import { NetworkZone, UserType } from "./types"

const user1: UserType = {

  id: "1",
  data: {
    label: (
      <h3>User 1</ h3 >
    ),
    get networkZone():NetworkZone{
      return networkZone1
    }
  },
  type: "input",

  position: { x: 0, y:0  }
}


const user2: UserType = {

  id: "2",
  data: {
    label: (
      <h3>User 2</ h3 >
    ),
    get networkZone(){
      return networkZone2
    }
  },
  type: "input",

  position: { x:0, y: 250 }
}

export { user1, user2 }