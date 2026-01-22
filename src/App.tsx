import { useState, useEffect } from 'react';
import './App.css';
import { initialPlayer } from './const';
import { initialMap } from './utils/initialMap';
import { useGameControls } from './hooks/useGameControls';
import type { GameState } from './types/types';
import GameMap from './components/GameMap';
import GameStats from './components/GameStats/GameStats';
import GameModals from './components/GameModals/GameModals';

function App() {
  const totalDiamonds = initialMap
    .flat()
    .filter((cell) => cell === 2).length;
  const [map, setMap] = useState<number[][]>(initialMap);
  const [player, setPlayer] = useState(initialPlayer);
  const [score, setScore] = useState(0);
  const [collectedDiamonds, setCollectedDiamonds] =
    useState(0);
  const [animatedItems, setAnimatedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const [exploding, setExploding] = useState<{
    [key: string]: boolean;
  }>({});
  const [bombs, setBombs] = useState(3);
  const [gameState, setGameState] =
    useState<GameState>('none');

  const handleKeyDown = useGameControls({
    player,
    map,
    score,
    gameState,
    collectedDiamonds,
    totalDiamonds,
    setPlayer,
    setMap,
    setScore,
    setAnimatedItems,
    setExploding,
    setGameState,
    setCollectedDiamonds,
    bombs,
    setBombs,
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
      <GameModals
        gameState={gameState}
        totalDiamonds={totalDiamonds}
        onRestart={() => window.location.reload()}
      />
      <GameStats
        collectedDiamonds={collectedDiamonds}
        totalDiamonds={totalDiamonds}
        bombs={bombs}
        score={score}
      />
      <a
        className="info"
        href="https://github.com/alvi0avcc/pixel-art-game"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to repo
      </a>
    </div>
  );
}

export default App;
