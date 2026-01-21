import { useState, useEffect } from 'react';
import './App.css';
import { initialPlayer } from './const';
import { initialMap } from './utils/initialMap';
import { useGameControls } from './hooks/useGameControls';
import GameMap from './components/GameMap';

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
      <GameMap map={map} player={player} />
      <p className="info">Score: {score}</p>
      <p className="info">Use arrow keys or WASD to move</p>
    </div>
  );
}

export default App;
