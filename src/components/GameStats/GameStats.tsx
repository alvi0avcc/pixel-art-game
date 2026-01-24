import styles from './GameStats.module.css';
import React from 'react';
import DiamondCounter from './DiamondCounter';
import BombCounter from './BombCounter';
import ScoreCounter from './ScoreCounter';

interface GameStatsProps {
  collectedDiamonds: number;
  totalDiamonds: number;
  bombs: number;
  score: number;
}

const GameStats: React.FC<GameStatsProps> = ({
  collectedDiamonds,
  totalDiamonds,
  bombs,
  score,
}) => {
  return (
    <section className={styles.gameStats}>
      <DiamondCounter
        collectedDiamonds={collectedDiamonds}
        totalDiamonds={totalDiamonds}
      />
      <BombCounter bombs={bombs} />
      <ScoreCounter score={score} />
    </section>
  );
};

export default GameStats;
