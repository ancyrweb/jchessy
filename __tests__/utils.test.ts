import { Piece, PieceColor } from "../src/types";
import { getColorFromPiece } from "../src/utils";

describe("getColorFromPiece", () => {
  const testColor = (name: Piece, color: PieceColor) => {
    return it(
      "should return " + (color === "b" ? "black" : "white") + " for " + name,
      () => {
        expect(getColorFromPiece(name)).toEqual(color);
      }
    );
  };

  testColor("r", "b");
  testColor("p", "b");
  testColor("k", "b");
  testColor("q", "b");
  testColor("n", "b");
  testColor("R", "w");
  testColor("P", "w");
  testColor("K", "w");
  testColor("Q", "w");
  testColor("N", "w");
});
