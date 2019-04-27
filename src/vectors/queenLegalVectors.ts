import { MoveContext, Vector } from "../types";
import bishopLegalVectors from "./bishopLegalVectors";
import rookLegalVectors from "./rookLegalVectors";

const queenLegalVectors = (move: MoveContext): Vector[] => {
  // Basically ... :D
  return [...bishopLegalVectors(move), ...rookLegalVectors(move)];
};

export default queenLegalVectors;
