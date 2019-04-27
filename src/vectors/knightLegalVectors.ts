import { MoveContext, Vector } from "../types";

const knightVectors: Vector[] = [
  { x: -1, y: 2 },
  { x: 1, y: 2 },
  { x: -2, y: 1 },
  { x: 2, y: 1 },
  { x: -1, y: -2 },
  { x: 1, y: -2 },
  { x: -2, y: -1 },
  { x: 2, y: -1 }
];

const knightLegalVectors = (move: MoveContext): Vector[] => {
  return knightVectors;
};

export default knightLegalVectors;
