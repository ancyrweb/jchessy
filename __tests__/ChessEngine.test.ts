import ChessEngine from "../src/ChessEngine";
import { illegalMove } from "../src/moveResultUtils";

describe("Moves", () => {
  describe("Pawns", () => {
    it("should move white pawn down to up", () => {
      let engine = new ChessEngine();
      const result = engine.move({ from: "c2", to: "c3" });
      expect(result.done).toBe(true);
      expect(result.from).toBe("c2");
      expect(result.to).toBe("c3");
      expect(result.reason).toBe(null);
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/8/8/8/2P5/PP1PPPPP/RNBQKBNR"
      );
    });
    it("should move black pawn up to down", () => {
      let engine = new ChessEngine("", {
        turn: "b"
      });

      const result = engine.move({ from: "c7", to: "c6" });
      expect(result.done).toBe(true);
      expect(result.from).toBe("c7");
      expect(result.to).toBe("c6");
      expect(result.reason).toBe(null);
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pp1ppppp/2p5/8/8/8/PPPPPPPP/RNBQKBNR"
      );
    });
    it("should NOT move black pawn down to up", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/1ppppppp/p7/8/8/8/PPPPPPPP/RNBQKBNR",
        {
          turn: "b"
        }
      );

      const result = engine.move({ from: "a6", to: "a7" });
      expect(result.done).toBe(false);
      expect(result.from).toBe("a6");
      expect(result.to).toBe("a7");
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/1ppppppp/p7/8/8/8/PPPPPPPP/RNBQKBNR"
      );
    });
    it("should NOT move white pawn up to down", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR"
      );
      const result = engine.move({ from: "a3", to: "a2" });
      expect(result.done).toBe(false);
      expect(result.from).toBe("a3");
      expect(result.to).toBe("a2");
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR"
      );
    });
    it("should NOT move white pawn to a case where there is a piece", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/pppppppp/8/8/8/P7/PPPPPPPP/RNBQKBNR"
      );
      const result = engine.move({ from: "a2", to: "a3" });
      expect(result.done).toBe(false);
      expect(result.from).toBe("a2");
      expect(result.to).toBe("a3");
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/8/8/8/P7/PPPPPPPP/RNBQKBNR"
      );
    });
    it("should NOT move black pawn over an other black pawn", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/pppppppp/p7/8/8/8/PPPPPPPP/RNBQKBNR",
        {
          turn: "b"
        }
      );

      const result = engine.move({ from: "a7", to: "a6" });
      expect(result.done).toBe(false);
      expect(result.from).toBe("a7");
      expect(result.to).toBe("a6");
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/p7/8/8/8/PPPPPPPP/RNBQKBNR"
      );
    });
  });
  describe("Knights", () => {
    it("should move the knight 2 top 1 right", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR"
      );
      const result = engine.move({ from: "c3", to: "d5" });
      expect(result.done).toBe(true);
      expect(result.reason).toEqual(null);
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/8/3N4/8/8/PPPPPPPP/R1BQKBNR"
      );
    });
    it("should move the knight 2 top 1 left", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR"
      );
      const result = engine.move({ from: "c3", to: "b5" });
      expect(result.done).toBe(true);
      expect(result.reason).toEqual(null);
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/8/1N6/8/8/PPPPPPPP/R1BQKBNR"
      );
    });
    it("should move the knight 1 top 2 right", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR"
      );
      const result = engine.move({ from: "c3", to: "e4" });
      expect(result.done).toBe(true);
      expect(result.reason).toEqual(null);
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/8/8/4N3/8/PPPPPPPP/R1BQKBNR"
      );
    });
    it("should move the knight 1 top 2 left", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR"
      );
      const result = engine.move({ from: "c3", to: "a4" });
      expect(result.done).toBe(true);
      expect(result.reason).toEqual(null);
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/8/8/N7/8/PPPPPPPP/R1BQKBNR"
      );
    });
    it("should move the knight 2 bottom 1 right", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/pppppppp/8/3N4/8/8/PPPPPPPP/R1BQKBNR"
      );
      const result = engine.move({ from: "d5", to: "e3" });
      expect(result.done).toBe(true);
      expect(result.reason).toEqual(null);
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/8/8/8/4N3/PPPPPPPP/R1BQKBNR"
      );
    });
    it("should move the knight 2 bottom 1 left", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/pppppppp/8/3N4/8/8/PPPPPPPP/R1BQKBNR"
      );
      const result = engine.move({ from: "d5", to: "c3" });
      expect(result.done).toBe(true);
      expect(result.reason).toEqual(null);
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR"
      );
    });
    it("should move the knight 1 bottom 2 left", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/pppppppp/8/3N4/8/8/PPPPPPPP/R1BQKBNR"
      );
      const result = engine.move({ from: "d5", to: "b4" });
      expect(result.done).toBe(true);
      expect(result.reason).toEqual(null);
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/8/8/1N6/8/PPPPPPPP/R1BQKBNR"
      );
    });
    it("should move the knight 1 bottom 2 right", () => {
      let engine = new ChessEngine(
        "rnbqkbnr/pppppppp/8/3N4/8/8/PPPPPPPP/R1BQKBNR"
      );
      const result = engine.move({ from: "d5", to: "f4" });
      expect(result.done).toBe(true);
      expect(result.reason).toEqual(null);
      expect(engine.toFEN()).toEqual(
        "rnbqkbnr/pppppppp/8/8/5N2/8/PPPPPPPP/R1BQKBNR"
      );
    });
  });
  describe("rook", () => {
    it("should move the rook to the very right", () => {
      let engine = new ChessEngine("8/8/8/8/3R4/8/8/8");
      const result = engine.move({ from: "d4", to: "h4" });
      expect(result.done).toBe(true);
      expect(engine.toFEN()).toEqual("8/8/8/8/7R/8/8/8");
    });
    it("should move the rook to the very left", () => {
      let engine = new ChessEngine("8/8/8/8/3R4/8/8/8");
      const result = engine.move({ from: "d4", to: "a4" });
      expect(result.done).toBe(true);
      expect(engine.toFEN()).toEqual("8/8/8/8/R7/8/8/8");
    });
    it("should move the rook to the very top", () => {
      let engine = new ChessEngine("8/8/8/8/3R4/8/8/8");
      const result = engine.move({ from: "d4", to: "d8" });
      expect(result.done).toBe(true);
      expect(engine.toFEN()).toEqual("3R4/8/8/8/8/8/8/8");
    });
    it("should move the rook to the very bottom", () => {
      let engine = new ChessEngine("8/8/8/8/3R4/8/8/8");
      const result = engine.move({ from: "d4", to: "d1" });
      expect(result.done).toBe(true);
      expect(engine.toFEN()).toEqual("8/8/8/8/8/8/8/3R4");
    });
    it("should NOT move the rook to the very right since a piece is in the middle", () => {
      let engine = new ChessEngine("8/8/8/8/3Rp3/8/8/8");
      const result = engine.move({ from: "d4", to: "h4" });
      expect(result.done).toBe(false);
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual("8/8/8/8/3Rp3/8/8/8");
    });
    it("should NOT move the rook to the very left since a piece is in the middle", () => {
      let engine = new ChessEngine("8/8/8/8/2pR4/8/8/8");
      const result = engine.move({ from: "d4", to: "a4" });
      expect(result.done).toBe(false);
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual("8/8/8/8/2pR4/8/8/8");
    });
    it("should NOT move the rook to the very bottom since a piece is in the middle", () => {
      let engine = new ChessEngine("8/8/8/8/3R4/3p4/8/8");
      const result = engine.move({ from: "d4", to: "d1" });
      expect(result.done).toBe(false);
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual("8/8/8/8/3R4/3p4/8/8");
    });
    it("should NOT move the rook to the very top since a piece is in the middle", () => {
      let engine = new ChessEngine("8/8/8/3p4/3R4/8/8/8");
      const result = engine.move({ from: "d4", to: "d8" });
      expect(result.done).toBe(false);
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual("8/8/8/3p4/3R4/8/8/8");
    });
  });
  describe("bishop", () => {
    it("should move the bishop to the higher-right corner", () => {
      let engine = new ChessEngine("8/8/8/8/3B4/8/8/8");
      const result = engine.move({ from: "d4", to: "h8" });
      expect(result.done).toBe(true);
      expect(engine.toFEN()).toEqual("7B/8/8/8/8/8/8/8");
    });
    it("should move the bishop to the higher-left corner", () => {
      let engine = new ChessEngine("8/8/8/8/3B4/8/8/8");
      const result = engine.move({ from: "d4", to: "a7" });
      expect(result.done).toBe(true);
      expect(engine.toFEN()).toEqual("8/B7/8/8/8/8/8/8");
    });
    it("should move the bishop to the lower-left corner", () => {
      let engine = new ChessEngine("8/8/8/8/3B4/8/8/8");
      const result = engine.move({ from: "d4", to: "a1" });
      expect(result.done).toBe(true);
      expect(engine.toFEN()).toEqual("8/8/8/8/8/8/8/B7");
    });
    it("should move the bishop to the lower-right corner", () => {
      let engine = new ChessEngine("8/8/8/8/3B4/8/8/8");
      const result = engine.move({ from: "d4", to: "g1" });
      expect(result.done).toBe(true);
      expect(engine.toFEN()).toEqual("8/8/8/8/8/8/8/6B1");
    });

    it("should NOT move the bishop to the higher-right corner because piece in middle", () => {
      let engine = new ChessEngine("8/8/8/4P3/3B4/8/8/8");
      const result = engine.move({ from: "d4", to: "h8" });
      expect(result.done).toBe(false);
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual("8/8/8/4P3/3B4/8/8/8");
    });
    it("should NOT move the bishop to the higher-left corner because piece in middle", () => {
      let engine = new ChessEngine("8/8/8/2P5/3B4/8/8/8");
      const result = engine.move({ from: "d4", to: "a7" });
      expect(result.done).toBe(false);
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual("8/8/8/2P5/3B4/8/8/8");
    });
    it("should NOT move the bishop to the lower-left corner because piece in middle", () => {
      let engine = new ChessEngine("8/8/8/8/3B4/2P5/8/8");
      const result = engine.move({ from: "d4", to: "a1" });
      expect(result.done).toBe(false);
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual("8/8/8/8/3B4/2P5/8/8");
    });
    it("should NOT move the bishop to the lower-left corner because piece in middle", () => {
      let engine = new ChessEngine("8/8/8/8/3B4/4P3/8/8");
      const result = engine.move({ from: "d4", to: "g1" });
      expect(result.done).toBe(false);
      expect(result.reason).toEqual(illegalMove());
      expect(engine.toFEN()).toEqual("8/8/8/8/3B4/4P3/8/8");
    });
  });
  describe("queen", () => {
    it("should move the queen to the lower-right corner", () => {
      let engine = new ChessEngine("8/8/8/8/3Q4/8/8/8");
      const result = engine.move({ from: "d4", to: "g1" });
      expect(result.done).toBe(true);
      expect(result.reason).toEqual(null);
      expect(engine.toFEN()).toEqual("8/8/8/8/8/8/8/6Q1");
    });
    // TODO Should be tested more heavily but too bored ATM
  });
  describe("king", () => {
    // TODO : test king moves
  });
});
