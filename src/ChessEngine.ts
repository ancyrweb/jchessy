import { Board, BoardCase, Move, OrNull, Piece, Vector } from "./types";
import { fenToObject, objectToFen } from "./fen";
import { areVectorsEqual, toVector, vectorDiff } from "./vector";

const pawnLegalVectors = (
  board: Board,
  boardCase: BoardCase,
  x: number,
  y: number
): Vector[] => {
  if (boardCase.color === "w") {
    return [{ x: 0, y: -1 }];
  } else {
    return [{ x: 0, y: 1 }];
  }
};

class ChessEngine {
  private fen: string;
  private board: Board;

  constructor() {
    this.fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
    this.board = fenToObject(this.fen);
  }

  load(fen: string) {
    this.fen = fen;
  }

  getPieceAt(x: number, y: number) {
    return this.board[y][x];
  }

  buildLegalVectors(boardCase: BoardCase, x: number, y: number): Vector[] {
    if (boardCase.piece === "p") {
      return pawnLegalVectors(this.board, boardCase, x, y);
    }
    return [];
  }

  move(move: Move) {
    const from = toVector(move.from);
    const to = toVector(move.to);

    const startingPiece = this.getPieceAt(from.x, from.y);
    if (!startingPiece) {
      throw new Error("no");
    }

    const diff = vectorDiff(from, to);
    const legalVectors = this.buildLegalVectors(startingPiece, from.x, from.y);
    const isLegal = legalVectors.some(areVectorsEqual(diff));

    if (!isLegal) {
      return false;
    }

    this.board[to.y][to.x] = this.board[from.y][from.x];
    this.board[from.y][from.x] = null;

    return true;
  }

  toFEN() {
    return objectToFen(this.board);
  }
}

export default ChessEngine;
