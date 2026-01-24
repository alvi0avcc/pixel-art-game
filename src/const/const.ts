import type { PlayerType } from '@appTypes/types';

export const GameConfig = {
  TileSize: 32,
  MapWidth: 15,
  MapHeight: 11,
} as const;

export const initialPlayer: PlayerType = {
  x: Math.trunc(GameConfig.MapWidth / 2),
  y: Math.trunc(GameConfig.MapHeight / 2),
  direction: 'left',
};
