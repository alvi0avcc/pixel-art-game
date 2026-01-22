import { useState, useEffect, useRef } from 'react';
import './App.css';
import { initialPlayer } from './const';
import { initialMap } from './utils/initialMap';
import { useGameControls } from './hooks/useGameControls';
import GameMap from './components/GameMap';

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
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const winButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useGameControls({
    player,
    map,
    score,
    gameOver,
    collectedDiamonds,
    totalDiamonds,
    setPlayer,
    setMap,
    setScore,
    setAnimatedItems,
    setExploding,
    setGameOver,
    setCollectedDiamonds,
    setWin,
  });

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () =>
      window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (gameOver) {
      buttonRef.current?.focus();
    }
  }, [gameOver]);

  useEffect(() => {
    if (win) {
      winButtonRef.current?.focus();
    }
  }, [win]);

  return (
    <div className="game-container">
      <h1>Pixel Art Game: Collect the items!</h1>
      <GameMap
        map={map}
        player={player}
        animatedItems={animatedItems}
        exploding={exploding}
      />
      <div
        className={`game-result ${gameOver ? 'show' : ''}`}
      >
        <h2>Game Over</h2>
        <button
          ref={buttonRef}
          onClick={() => window.location.reload()}
        >
          Restart
        </button>
      </div>
      <div className={`game-result ${win ? 'show' : ''}`}>
        <h2>You Win!</h2>
        <p>Collected all {totalDiamonds} diamonds!</p>
        <button
          ref={winButtonRef}
          onClick={() => window.location.reload()}
        >
          Play Again
        </button>
      </div>
      <p className="info">
        Diamonds: {collectedDiamonds}/{totalDiamonds}
      </p>
      <p className="info">Score: {score}</p>
      <p className="info">Use arrow keys or WASD to move</p>
      <p className="info">
        Use "SPACE" to destroy walls around you
      </p>
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
