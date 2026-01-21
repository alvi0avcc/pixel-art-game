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
  const [animatedItems, setAnimatedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const [exploding, setExploding] = useState<{
    [key: string]: boolean;
  }>({});

  const handleKeyDown = useGameControls({
    player,
    map,
    score,
    setPlayer,
    setMap,
    setScore,
    setAnimatedItems,
    setExploding,
  });

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () =>
      window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="game-container">
      <h1>Pixel Art Game: Collect the items!</h1>
      <GameMap
        map={map}
        player={player}
        animatedItems={animatedItems}
        exploding={exploding}
      />
      <p className="info">Score: {score}</p>
      <p className="info">Use arrow keys or WASD to move</p>
      <p className="info">
        Use "SPACE" to destroy walls around you
      </p>
    </div>
  );
}

export default App;
