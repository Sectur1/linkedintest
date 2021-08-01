import React from 'react';
import { module1, module2 } from "./modulenodes"
import { NetworkZone, UserType } from "./types"
import { user1, user2 } from './usernodes';

const networkZone1: NetworkZone = {
    x: 10, 
    y:110,
    id: "network1",
    data: {
        label: (
            "Network 1"
        ),
        get module() {
            return module1
        },
        get parent() {
            return user1
        },
        
    },
    type: "input",
    get position() {
        return ({ x: this.x, y: this.y })
    },
    set position( pos) {
        this.x = pos.x;
        this.y = pos.y;
        this.position.x = pos.x;
        this.position.y = pos.y;
    },
    
}


const networkZone2: NetworkZone = {
    x: 0, 
    y:100,
    id: "network2",
    data: {
        label: (
            "Network 2"
        ),
        get module() {
            return module2
        },
        get parent() {
            return user2
        },
    },
    type: "input",
    get position() {
        return ({ x: this.x, y: this.y })
    },
    set position( pos) {
        this.x = pos.x;
        this.y = pos.y;
        this.position.x = pos.x;
        this.position.y = pos.y;
    },
    
}

export { networkZone1, networkZone2 }