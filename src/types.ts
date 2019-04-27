export type OrNull<T> = T | null;

export type Piece =
  | "r"
  | "n"
  | "b"
  | "k"
  | "q"
  | "p"
  | "R"
  | "N"
  | "B"
  | "K"
  | "Q"
  | "P";
export type PieceColor = "w" | "b";

export type BoardCase = {
  piece: Piece;
  color: PieceColor;
};

export type NullableBoardCase = OrNull<BoardCase>;

export type Board = [
  [
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase
  ],
  [
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase
  ],
  [
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase
  ],
  [
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase
  ],
  [
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase
  ],
  [
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase
  ],
  [
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase
  ],
  [
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase,
    NullableBoardCase
  ]
];

export type Move = {
  from: string;
  to: string;
};

export type MoveReason = {
  code: number;
  text: string;
};

export type MoveResult = {
  done: boolean;
  from: string;
  to: string;
  reason: OrNull<MoveReason>;
};

export type MoveContext = {
  board: Board;
  case: BoardCase;
  x: number;
  y: number;
};

export type Vector = { x: number; y: number };
