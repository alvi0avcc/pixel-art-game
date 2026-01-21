export type PlayerType = { x: number; y: number };

export type GameControlsProps = {
  player: PlayerType;
  map: number[][];
  score: number;
  setPlayer: (player: PlayerType) => void;
  setMap: (map: number[][]) => void;
  setScore: (score: number) => void;
};
