import { Edge, Node } from "react-flow-renderer";


// interface NetworkChild extends Module, Brick {

// }

interface NetworkZone extends Node {
    x: number, y: number
}

interface Module extends Node {
    x: number, y: number
}

interface Brick extends Node {
    x: number, y: number
}

interface UserType extends  Node {
}

export type { NetworkZone, UserType, Module, Brick }