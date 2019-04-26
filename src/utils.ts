import { BoardCase, Piece, PieceColor } from "./types";

export const getColorFromPiece = (piece: Piece): PieceColor =>
  piece.charCodeAt(0) <= 90 ? "w" : "b";
export const createPiece = (piece: Piece): BoardCase => ({
  // @ts-ignore
  piece: piece.toLowerCase(),
  color: getColorFromPiece(piece)
});
