import { useCallback } from 'react';
import type { GameControlsProps } from '@appTypes/types';

export const useGameControls = ({
  player,
  map,
  score,
  setPlayer,
  setMap,
  setScore,
  setAnimatedItems,
  setExploding,
  gameState,
  setGameState,
  totalDiamonds,
  setCollectedDiamonds,
  bombs,
  setBombs,
}: GameControlsProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (gameState !== 'none') return;

      const key = e.key.toLowerCase();
      let dx = 0,
        dy = 0;

      switch (key) {
        case 'arrowup':
        case 'w':
        case 'ц':
          dy = -1;
          break;
        case 'arrowdown':
        case 's':
        case 'ы':
          dy = 1;
          break;
        case 'arrowleft':
        case 'a':
        case 'ф':
          dx = -1;
          break;
        case 'arrowright':
        case 'd':
        case 'в':
          dx = 1;
          break;
        case ' ':
          break;
        default:
          return;
      }

      e.preventDefault();

      if (dx === 0 && dy === 0) {
        if (bombs <= 0) return;
        setBombs((prev) => prev - 1);
        let positions: { x: number; y: number }[] = [];
        if (player.x - 1 > 0) positions.push({ x: player.x - 1, y: player.y });
        if (player.x + 1 < map[0].length - 1)
          positions.push({ x: player.x + 1, y: player.y });
        if (player.y - 1 > 0) positions.push({ x: player.x, y: player.y - 1 });
        if (player.y + 1 < map.length - 1)
          positions.push({ x: player.x, y: player.y + 1 });
        if (player.y - 1 > 0 && player.x - 1 > 0)
          positions.push({
            x: player.x - 1,
            y: player.y - 1,
          });
        if (player.y - 1 > 0 && player.x + 1 < map[0].length - 1)
          positions.push({
            x: player.x + 1,
            y: player.y - 1,
          });
        if (player.y + 1 < map.length - 1 && player.x - 1 > 0)
          positions.push({
            x: player.x - 1,
            y: player.y + 1,
          });
        if (player.y + 1 < map.length - 1 && player.x + 1 < map[0].length - 1)
          positions.push({
            x: player.x + 1,
            y: player.y + 1,
          });

        positions = positions.filter((pos) => map[pos.y][pos.x] !== 2);

        const explodingState: { [key: string]: boolean } = {};
        positions.forEach(
          (pos) => (explodingState[`${pos.x}-${pos.y}`] = true),
        );
        setExploding((prev) => ({
          ...prev,
          ...explodingState,
        }));

        setTimeout(() => {
          setExploding((prev) => {
            const newState = { ...prev };
            positions.forEach((pos) => delete newState[`${pos.x}-${pos.y}`]);
            return newState;
          });
          const newMap = map.map((row) => row.slice());
          positions.forEach((pos) => (newMap[pos.y][pos.x] = 0));
          setMap(newMap);
        }, 300);
        return;
      }

      const nx = player.x + dx;
      const ny = player.y + dy;

      if (ny < 0 || ny >= map.length || nx < 0 || nx >= map[0].length) return;
      if (map[ny][nx] === 1) return;

      const newMap = map.map((row) => row.slice());
      let newScore = score;

      if (map[ny][nx] === 2) {
        newScore++;
        setCollectedDiamonds((prev) => {
          const newCount = prev + 1;
          if (newCount === totalDiamonds) setGameState('win');
          return newCount;
        });
      }

      if (map[ny][nx] === 3) {
        newScore = 0;
        setAnimatedItems((prev) => ({
          ...prev,
          [`${nx}-${ny}`]: true,
        }));
        setGameState('gameOver');
      }

      if (map[ny][nx] === 2 || map[ny][nx] === 3) {
        setAnimatedItems((prev) => ({
          ...prev,
          [`${nx}-${ny}`]: true,
        }));
        setTimeout(() => {
          setAnimatedItems((prev) => {
            const newState = { ...prev };
            delete newState[`${nx}-${ny}`];
            return newState;
          });
          newMap[ny][nx] = 0;
          setMap(newMap);
        }, 300);
      }

      setPlayer({
        x: nx,
        y: ny,
        direction: dx !== 0 ? (dx < 0 ? 'left' : 'right') : player.direction,
      });
      setScore(newScore);
    },
    [
      player,
      map,
      score,
      gameState,
      totalDiamonds,
      bombs,
      setPlayer,
      setMap,
      setScore,
      setAnimatedItems,
      setExploding,
      setGameState,
      setCollectedDiamonds,
      setBombs,
    ],
  );

  return handleKeyDown;
};
