import { useState, useEffect } from 'react';
import './App.css';
import { GameConfig, initialPlayer } from './const';
import { initialMap } from './utils/initialMap';
import { useGameControls } from './hooks/useGameControls';

function App() {
  const [map, setMap] = useState<number[][]>(initialMap);
  const [player, setPlayer] = useState(initialPlayer);
  const [score, setScore] = useState(0);

  const handleKeyDown = useGameControls({
    player,
    map,
    score,
    setPlayer,
    setMap,
    setScore,
  });

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () =>
      window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="game-container">
      <h1>Pixel Art Game: Collect the items!</h1>
      <div
        className="game-map"
        style={{
          width: GameConfig.TileSize * GameConfig.MapWidth,
          height:
            GameConfig.TileSize * GameConfig.MapHeight,
          position: 'relative',
          margin: '0 auto',
          border: '8px solid #444',
          background: '#1d1d1d',
          imageRendering: 'pixelated',
        }}
      >
        {map.flatMap((row, y) =>
          row.map((cell, x) => {
            if (cell === 1)
              return (
                <div
                  key={`wall-${x}-${y}`}
                  className="wall"
                  style={{
                    left: x * GameConfig.TileSize,
                    top: y * GameConfig.TileSize,
                    width: GameConfig.TileSize,
                    height: GameConfig.TileSize,
                  }}
                />
              );
            if (cell === 2)
              return (
                <div
                  key={`item-${x}-${y}`}
                  className="item"
                  style={{
                    left: x * GameConfig.TileSize + 6,
                    top: y * GameConfig.TileSize + 6,
                    width: GameConfig.TileSize - 12,
                    height: GameConfig.TileSize - 12,
                  }}
                >
                  💎
                </div>
              );

            if (cell === 3)
              return (
                <div
                  key={`item-${x}-${y}`}
                  className="item"
                  style={{
                    left: x * GameConfig.TileSize + 6,
                    top: y * GameConfig.TileSize + 6,
                    width: GameConfig.TileSize - 12,
                    height: GameConfig.TileSize - 12,
                  }}
                >
                  💀
                </div>
              );

            return null;
          }),
        )}
        <div
          className="player"
          style={{
            left: player.x * GameConfig.TileSize,
            top: player.y * GameConfig.TileSize,
            width: GameConfig.TileSize,
            height: GameConfig.TileSize,
          }}
        >
          🚶
        </div>
      </div>
      <p className="info">Score: {score}</p>
      <p className="info">Use arrow keys or WASD to move</p>
    </div>
  );
}

export default App;
