import styles from './GameStats.module.css';
import React from 'react';
import DiamondCounter from './DiamondCounter';
import BombCounter from './BombCounter';
import ScoreCounter from './ScoreCounter';
import ReloadGame from '../reloadGame/reloadGame';
import SoundOnOf from '../soundOnOf/soundOnOf';

interface GameStatsProps {
  collectedDiamonds: number;
  totalDiamonds: number;
  bombs: number;
  score: number;
  onRestart: () => void;
}

const GameStats: React.FC<GameStatsProps> = ({
  collectedDiamonds,
  totalDiamonds,
  bombs,
  score,
  onRestart,
}) => {
  return (
    <section className={styles.gameStats}>
      <DiamondCounter
        collectedDiamonds={collectedDiamonds}
        totalDiamonds={totalDiamonds}
      />
      <BombCounter bombs={bombs} />
      <ScoreCounter score={score} />
      <ReloadGame onRestart={onRestart} />
      <SoundOnOf soundOn={false} />
    </section>
  );
};

export default GameStats;
