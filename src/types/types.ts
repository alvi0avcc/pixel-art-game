export type PlayerType = { x: number; y: number };

export type GameControlsProps = {
  player: PlayerType;
  map: number[][];
  score: number;
  gameOver: boolean;
  setPlayer: (player: PlayerType) => void;
  setMap: (map: number[][]) => void;
  setScore: (score: number) => void;
  setAnimatedItems: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  setExploding: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  setGameOver: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};
