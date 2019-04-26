import { compose, split, map, reduce, filter, join } from "ramda";
import { Board, NullableBoardCase, OrNull, Piece } from "./types";
import { createPiece } from "./utils";
import { flatten, isDefined, throwIf, twoDimensional } from "./fp";

const isASCIINumber = (c: string) =>
  c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57;

const extractFENString = (fen: string): string => {
  const arrFen = fen.split(" ");
  return arrFen[0];
};

const safeCreatePiece = (piece: string) => {
  if (isASCIINumber(piece)) {
    // @ts-ignore
    return Array(parseInt(piece)).fill(null);
  } else if (piece === "/") {
    return undefined;
  }

  return createPiece(piece as Piece);
};

export const fenToObject: (fen: string) => Board = compose(
  twoDimensional(8),
  throwIf(
    (val: any[]) => val.length !== 64,
    "The FEN you provided is invalid."
  ),
  flatten,
  filter(isDefined),
  map(safeCreatePiece),
  split(""), // breaks FEN to an array
  // @ts-ignore
  extractFENString
);

// reduce ["p",null,null, ..., "p"] FEN rows to "p6p"
const reduceRowToString = (acc: string, cur: OrNull<string>): string => {
  if (cur === null) {
    // We accumulate the nulls
    if (isASCIINumber(acc.charAt(acc.length - 1))) {
      let number = parseInt(acc.charAt(acc.length - 1)) + 1;
      return acc.substr(0, acc.length - 1) + number;
    }

    return acc + "1";
  }

  return acc + cur;
};

// convert a case to it's FEN representation
const caseToFEN = (boardCase: NullableBoardCase) => {
  if (!boardCase) return null;

  return boardCase.color === "w"
    ? boardCase.piece.toUpperCase()
    : boardCase.piece.toLowerCase();
};

// convert a whole row to its FEN representation
export const rowToFEN = compose(
  // @ts-ignore
  reduce(reduceRowToString, ""),
  map(caseToFEN)
);

// convert a board to a FEN representation
export const objectToFen: (board: Board) => string = compose(
  join("/"),
  map(rowToFEN)
);
