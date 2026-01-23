import { GameConfig, initialPlayer } from '../const';

// 0 - пусто; 1 - стена; 2 - предмет для сбора; 3 - мина
export const initialMap = (): number[][] => {
  const map: number[][] = [];
  for (let y = 0; y < GameConfig.MapHeight; y++) {
    map[y] = [];
    for (let x = 0; x < GameConfig.MapWidth; x++) {
      if (
        y === 0 ||
        y === GameConfig.MapHeight - 1 ||
        x === 0 ||
        x === GameConfig.MapWidth - 1
      ) {
        map[y][x] = 1;
      } else if (x !== initialPlayer.x && y !== initialPlayer.y) {
        const cell = Math.random();
        let value = 0;
        if (cell < 0.5) {
          value = 1;
        } else if (cell > 0.9) {
          // Проверяем предыдущие клетки слева и сверху
          if (
            (x > 0 && (map[y][x - 1] === 2 || map[y][x - 1] === 3)) ||
            (y > 0 && (map[y - 1][x] === 2 || map[y - 1][x] === 3))
          ) {
            value = 0;
          } else {
            if (cell < 0.95) value = 2;
            else value = 3;
          }
        }
        map[y][x] = value;
      } else {
        map[y][x] = 0;
      }
    }
  }

  // Проверяем, есть ли хотя бы один diamond (2)
  const hasDiamond = map.some((row) => row.includes(2));
  if (!hasDiamond) map[1][1] = 2;

  return map;
};
