import {
  Board,
  BoardCase,
  Move,
  MoveContext,
  MoveResult,
  OrNull,
  Piece,
  PieceColor,
  Vector
} from "./types";
import { fenToObject, objectToFen } from "./fen";
import { areVectorsEqual, toVector, vectorDiff } from "./vector";
import pawnLegalVectors from "./vectors/pawnLegalVectors";
import knightLegalVectors from "./vectors/knightLegalVectors";
import {
  createErrorMoveResult,
  illegalMove,
  noStartingPiece,
  notYourTurn
} from "./moveResultUtils";
import rookLegalVectors from "./vectors/rookLegalVectors";
import bishopLegalVectors from "./vectors/bishopLegalVectors";
import kingLegalVectors from "./vectors/kingLegalVectors";
import queenLegalVectors from "./vectors/queenLegalVectors";

class ChessEngine {
  private fen: string;
  private board: Board;
  private turn: PieceColor;

  constructor(
    fen?: string,
    conf?: {
      turn?: PieceColor;
    }
  ) {
    this.fen = fen || "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
    this.board = fenToObject(this.fen);

    conf = conf || {};
    this.turn = conf.turn || "w";
  }

  load(fen: string) {
    this.fen = fen;
  }

  getPieceAt(x: number, y: number) {
    return this.board[y][x];
  }

  buildLegalVectors(boardCase: BoardCase, x: number, y: number): Vector[] {
    const context: MoveContext = {
      board: this.board,
      case: boardCase,
      x,
      y
    };

    // A vector is legal if :
    // - The move is a valid move for the piece
    if (boardCase.piece === "p") {
      return pawnLegalVectors(context);
    } else if (boardCase.piece === "n") {
      return knightLegalVectors(context);
    } else if (boardCase.piece === "r") {
      return rookLegalVectors(context);
    } else if (boardCase.piece === "b") {
      return bishopLegalVectors(context);
    } else if (boardCase.piece === "k") {
      return kingLegalVectors(context);
    } else if (boardCase.piece === "q") {
      return queenLegalVectors(context);
    }

    return [];
  }

  move(move: Move): MoveResult {
    const from = toVector(move.from);
    const to = toVector(move.to);

    const startingPiece = this.getPieceAt(from.x, from.y);
    if (!startingPiece) {
      return createErrorMoveResult(move, noStartingPiece());
    }

    if (startingPiece.color !== this.turn) {
      return createErrorMoveResult(move, notYourTurn());
    }

    const diff = vectorDiff(from, to);
    const legalVectors = this.buildLegalVectors(startingPiece, from.x, from.y);
    const isLegal = legalVectors.some(areVectorsEqual(diff));

    if (!isLegal) {
      return createErrorMoveResult(move, illegalMove());
    }

    const pieceAtDest = this.board[to.y][to.x];
    if (pieceAtDest !== null) {
      if (pieceAtDest.color === this.turn) {
        return createErrorMoveResult(move, illegalMove());
      } else {
        // It's an attack
      }
    }

    this.board[to.y][to.x] = this.board[from.y][from.x];
    this.board[from.y][from.x] = null;

    return {
      done: true,
      from: move.from,
      to: move.to,
      reason: null
    };
  }

  toFEN() {
    return objectToFen(this.board);
  }

  getTurn() {
    return this.turn;
  }
}

export default ChessEngine;
