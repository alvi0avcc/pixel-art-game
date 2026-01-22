export type PlayerType = { x: number; y: number };

export type GameState = 'none' | 'win' | 'gameOver';

export type GameControlsProps = {
  player: PlayerType;
  map: number[][];
  score: number;
  gameState: GameState;
  setPlayer: (player: PlayerType) => void;
  setMap: (map: number[][]) => void;
  setScore: (score: number) => void;
  setAnimatedItems: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  setExploding: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  setGameState: React.Dispatch<
    React.SetStateAction<GameState>
  >;
  collectedDiamonds: number;
  totalDiamonds: number;
  setCollectedDiamonds: React.Dispatch<
    React.SetStateAction<number>
  >;
  bombs: number;
  setBombs: React.Dispatch<React.SetStateAction<number>>;
};
