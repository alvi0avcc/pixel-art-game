export type Player = { x: number; y: number };

export type GameControlsProps = {
  player: Player;
  map: number[][];
  score: number;
  setPlayer: (player: Player) => void;
  setMap: (map: number[][]) => void;
  setScore: (score: number) => void;
};
