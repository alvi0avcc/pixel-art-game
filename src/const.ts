import type { PlayerType } from './types/types';

export const GameConfig = {
  TileSize: 32,
  MapWidth: 15,
  MapHeight: 10,
} as const;

export const initialPlayer: PlayerType = { x: 2, y: 2 };
