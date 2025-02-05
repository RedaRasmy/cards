import { Coordinates, Direction } from "./types";

export default function getInitialPos(direction: Direction):Coordinates {
    if (direction === "left") {
        return { x: -300 , y: 0};
    } else if (direction === "top") {
        return { x:0 ,y: -300 };
    } else if (direction === "right") {
        return { x: 300 ,y: 0};
    }
    return { x: 0 ,y: 300}
}