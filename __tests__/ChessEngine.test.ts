import ChessEngine from "../src/ChessEngine";

describe("playing", () => {
  it("should accept to move pawn", () => {
    let engine = new ChessEngine();
    engine.move({
      from: "c2",
      to: "c3"
    });
  });
});
