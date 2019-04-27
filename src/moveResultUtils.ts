import { Move, MoveReason, MoveResult } from "./types";

export const createErrorMoveResult = (
  move: Move,
  reason: MoveReason
): MoveResult => ({
  done: false,
  from: move.from,
  to: move.to,
  reason
});

export const illegalMove = (): MoveReason => ({
  code: 1,
  text: "Illegal Move"
});
export const notYourTurn = (): MoveReason => ({
  code: 2,
  text: "Not your turn to play"
});
export const noStartingPiece = (): MoveReason => ({
  code: 3,
  text: "There's no piece at this position"
});
