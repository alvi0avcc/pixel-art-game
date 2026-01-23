import styles from './HomePage.module.css';
import { useState, useEffect } from 'react';
import { initialPlayer } from '../../const';
import { initialMap } from '../../utils/initialMap';
import { useGameControls } from '../../hooks/useGameControls';
import type { GameState } from '../../types/types';
import GameMap from '../../components/GameMap/GameMap';
import GameStats from '../../components/GameStats/GameStats';
import GameResultModals from '../../components/Modals/GameResultModals';

const HomePage = () => {
  // const TestError = () => {
  //   throw new Error('Test error for ErrorBoundary');
  // };
  // TestError();
  const [map, setMap] = useState<number[][]>(initialMap());
  const [totalDiamonds, setTotalDiamonds] = useState<number>(
    map.flat().filter((cell) => cell === 2).length,
  );
  const [player, setPlayer] = useState(initialPlayer);
  const [score, setScore] = useState(0);
  const [collectedDiamonds, setCollectedDiamonds] = useState(0);
  const [animatedItems, setAnimatedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const [exploding, setExploding] = useState<{
    [key: string]: boolean;
  }>({});
  const [bombs, setBombs] = useState(3);
  const [gameState, setGameState] = useState<GameState>('none');

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

  const reInitGame = () => {
    setMap(initialMap());
    setPlayer(initialPlayer);
    setScore(0);
    setCollectedDiamonds(0);
    setTotalDiamonds(map.flat().filter((cell) => cell === 2).length);
    setAnimatedItems({});
    setExploding({});
    setBombs(3);
    setGameState('none');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className={styles.gameContainer}>
      <h1>Collect the items!</h1>
      <section className={styles.gameArea}>
        <GameMap
          map={map}
          player={player}
          animatedItems={animatedItems}
          exploding={exploding}
        />
      </section>
      <GameResultModals
        gameState={gameState}
        totalDiamonds={totalDiamonds}
        onRestart={() => reInitGame()}
      />
      <GameStats
        collectedDiamonds={collectedDiamonds}
        totalDiamonds={totalDiamonds}
        bombs={bombs}
        score={score}
      />
    </main>
  );
};

export default HomePage;
