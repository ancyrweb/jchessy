import { MoveContext, Vector } from "../types";
import { hasPieceAt } from "../utils";

const bishopLegalVectors = (move: MoveContext): Vector[] => {
  let vectors: Vector[] = [];

  // To the higher-left corner
  for (let i = 1; move.x - i >= 0 && move.y - i >= 0; i++) {
    if (hasPieceAt(move.board, move.x - i, move.y - i)) {
      break;
    }

    vectors.push({ x: -i, y: -i });
  }

  // To the higher-right corner
  for (let i = 1; move.x + i < 8 && move.y - i >= 0; i++) {
    if (hasPieceAt(move.board, move.x + i, move.y - i)) {
      break;
    }
    vectors.push({ x: i, y: -i });
  }

  // To the lower-left corner
  for (let i = 1; move.x - i >= 0 && move.y + i < 8; i++) {
    if (hasPieceAt(move.board, move.x - i, move.y + i)) {
      break;
    }

    vectors.push({ x: -i, y: i });
  }

  // To the lower-right corner
  for (let i = 1; move.x + i < 8 && move.y + i < 8; i++) {
    if (hasPieceAt(move.board, move.x + i, move.y + i)) {
      break;
    }

    vectors.push({ x: i, y: i });
  }

  return vectors;
};

export default bishopLegalVectors;
