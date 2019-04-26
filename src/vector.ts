import { curry } from "ramda";
import { Vector } from "./types";

export const toVector = (move: string): Vector => {
  return {
    x: move[0].charCodeAt(0) - 97,
    y: 7 - (parseInt(move[1]) - 1)
  };
};

export const vectorDiff = (a: Vector, b: Vector): Vector => {
  return {
    x: b.x - a.x,
    y: b.y - a.y
  };
};

export const areVectorsEqual = curry(
  (a: Vector, b: Vector) => a.x === b.x && a.y === b.y
);
