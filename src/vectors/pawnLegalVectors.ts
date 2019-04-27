import { MoveContext, Vector } from "../types";

const pawnLegalVectors = (move: MoveContext): Vector[] => {
  // TODO : check same-color pieces in the various positions
  if (move.case.color === "w") {
    return [{ x: 0, y: -1 }];
  } else {
    return [{ x: 0, y: 1 }];
  }
};

export default pawnLegalVectors;
