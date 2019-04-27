import { Board, BoardCase, MoveContext, Vector } from "../types";

const kingVectors: Vector[] = [
  { x: -1, y: -1 },
  { x: -1, y: 0 },
  { x: -1, y: 1 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 0 },
  { x: 1, y: 1 }
];

const kingLegalVectors = (move: MoveContext): Vector[] => {
  return kingVectors;
};

export default kingLegalVectors;
