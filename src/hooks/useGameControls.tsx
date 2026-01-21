import { useCallback, useRef, useEffect } from 'react';
import type { GameControlsProps } from '../types/types';

export const useGameControls = ({
  player,
  map,
  score,
  setPlayer,
  setMap,
  setScore,
}: GameControlsProps) => {
  // Используем ref для хранения актуальных значений
  const gameStateRef = useRef({ player, map, score });

  // Обновляем ref при изменении состояния
  useEffect(() => {
    gameStateRef.current = { player, map, score };
  }, [player, map, score]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const { player, map, score } = gameStateRef.current;

      let dx = 0,
        dy = 0;
      if (e.key === 'ArrowUp' || e.key === 'w') dy = -1;
      else if (e.key === 'ArrowDown' || e.key === 's')
        dy = 1;
      else if (e.key === 'ArrowLeft' || e.key === 'a')
        dx = -1;
      else if (e.key === 'ArrowRight' || e.key === 'd')
        dx = 1;
      else return;

      e.preventDefault();

      const nx = player.x + dx;
      const ny = player.y + dy;

      if (
        ny < 0 ||
        ny >= map.length ||
        nx < 0 ||
        nx >= map[0].length
      )
        return;
      if (map[ny][nx] === 1) return;

      const newMap = map.map((row) => row.slice());
      let newScore = score;

      if (map[ny][nx] === 2) {
        newMap[ny][nx] = 0;
        newScore++;
      }

      if (map[ny][nx] === 3) {
        newMap[ny][nx] = 0;
        newScore = 0;
      }

      setPlayer({ x: nx, y: ny });
      setMap(newMap);
      setScore(newScore);
    },
    [setPlayer, setMap, setScore],
  );

  return handleKeyDown;
};
