import { MoveContext, Vector } from "../types";
import { hasPieceAt } from "../utils";

const rookLegalVectors = (move: MoveContext): Vector[] => {
  let vectors: Vector[] = [];

  for (let i = move.x - 1; i >= 0; i--) {
    if (hasPieceAt(move.board, i, move.y)) {
      break;
    }

    vectors.push({ x: i - move.x, y: 0 });
  }

  for (let i = move.x + 1; i < 8; i++) {
    if (hasPieceAt(move.board, i, move.y)) {
      break;
    }

    vectors.push({ x: i - move.x, y: 0 });
  }

  for (let j = move.y - 1; j >= 0; j--) {
    if (hasPieceAt(move.board, move.x, j)) {
      break;
    }

    vectors.push({ x: 0, y: j - move.y });
  }

  for (let j = move.y + 1; j < 8; j++) {
    if (hasPieceAt(move.board, move.x, j)) {
      break;
    }

    vectors.push({ x: 0, y: j - move.y });
  }

  return vectors;
};

export default rookLegalVectors;
