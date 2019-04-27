import { Board, BoardCase, Piece, PieceColor } from "./types";

export const getColorFromPiece = (piece: Piece): PieceColor =>
  piece.charCodeAt(0) <= 90 ? "w" : "b";

export const createPiece = (piece: Piece): BoardCase => ({
  // @ts-ignore
  piece: piece.toLowerCase(),
  color: getColorFromPiece(piece)
});

export const hasPieceAt = (board: Board, x: number, y: number): boolean => {
  if (x < 0 || x > 8 || y < 0 || y > 8) {
    throw new Error("Out of bounds");
  }

  return board[y][x] !== null;
};
