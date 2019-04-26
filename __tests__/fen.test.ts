import { fenToObject } from "../src/fen";
import { createPiece } from "../src/utils";

const cp = createPiece;

describe("fen to object", () => {
  it("should create an empty board", () => {
    expect(fenToObject("8/8/8/8/8/8/8/8 w KQkq -")).toEqual([
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ]);
  });

  it("should create a board with 1 pawn moved by black and 2 by whites", () => {
    expect(
      fenToObject("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -")
    ).toEqual([
      [cp("r"), cp("n"), cp("b"), cp("q"), cp("k"), cp("b"), cp("n"), cp("r")],
      [cp("p"), cp("p"), cp("p"), cp("p"), cp("p"), cp("p"), cp("p"), cp("p")],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [cp("P"), cp("P"), cp("P"), cp("P"), cp("P"), cp("P"), cp("P"), cp("P")],
      [cp("R"), cp("N"), cp("B"), cp("Q"), cp("K"), cp("B"), cp("N"), cp("R")]
    ]);
  });

  it("should create a board with 1 pawn moved by black and 2 by whites", () => {
    expect(
      fenToObject("rnbqkbnr/p1pppppp/1p6/8/8/5PP1/PPPPP2P/RNBQKBNR w KQkq -")
    ).toEqual([
      [cp("r"), cp("n"), cp("b"), cp("q"), cp("k"), cp("b"), cp("n"), cp("r")],
      [cp("p"), null, cp("p"), cp("p"), cp("p"), cp("p"), cp("p"), cp("p")],
      [null, cp("p"), null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, cp("P"), cp("P"), null],
      [cp("P"), cp("P"), cp("P"), cp("P"), cp("P"), null, null, cp("P")],
      [cp("R"), cp("N"), cp("B"), cp("Q"), cp("K"), cp("B"), cp("N"), cp("R")]
    ]);
  });

  it("should create a board without complete FEN", () => {
    expect(
      fenToObject("rnbqkbnr/p1pppppp/1p6/8/8/5PP1/PPPPP2P/RNBQKBNR")
    ).toEqual([
      [cp("r"), cp("n"), cp("b"), cp("q"), cp("k"), cp("b"), cp("n"), cp("r")],
      [cp("p"), null, cp("p"), cp("p"), cp("p"), cp("p"), cp("p"), cp("p")],
      [null, cp("p"), null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, cp("P"), cp("P"), null],
      [cp("P"), cp("P"), cp("P"), cp("P"), cp("P"), null, null, cp("P")],
      [cp("R"), cp("N"), cp("B"), cp("Q"), cp("K"), cp("B"), cp("N"), cp("R")]
    ]);
  });

  it("should throw when the amount of pieces in the board exceed 64", () => {
    expect(() => {
      fenToObject("rnbqkbnr/p1pppppp/1p7/8/8/5PP1/PPPPP2P/RNBQKBNR w KQkq -");
    }).toThrow("The FEN you provided is invalid.");
  });
});
