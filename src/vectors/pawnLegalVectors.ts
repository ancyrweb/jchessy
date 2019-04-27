import { Board, BoardCase, MoveContext, Vector } from "../types";

const pawnLegalVectors = (move: MoveContext): Vector[] => {
  if (move.case.color === "w") {
    return [{ x: 0, y: -1 }];
  } else {
    return [{ x: 0, y: 1 }];
  }
};

export default pawnLegalVectors;
