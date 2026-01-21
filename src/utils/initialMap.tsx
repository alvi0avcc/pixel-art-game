import { GameConfig, initialPlayer } from '../const';

// 0 - пусто; 1 - стена; 2 - предмет для сбора
export const initialMap: number[][] = Array.from(
  { length: GameConfig.MapHeight },
  (_, y) =>
    Array.from({ length: GameConfig.MapWidth }, (_, x) => {
      if (
        y === 0 ||
        y === GameConfig.MapHeight - 1 ||
        x === 0 ||
        x === GameConfig.MapWidth - 1
      )
        return 1;
      if (x !== initialPlayer.x && y !== initialPlayer.y) {
        const cell = Math.random();
        if (cell < 0.1) return 1;
        if (cell > 0.9) {
          if (cell < 0.95) return 2;
          if (cell >= 0.95) return 3;
        }
      }

      return 0;
    }),
);
