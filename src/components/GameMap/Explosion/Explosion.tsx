import styles from './Explosion.module.css';
import React from 'react';
import { GameConfig } from '../../../const';

interface ExplosionProps {
  x: number;
  y: number;
}

const Explosion: React.FC<ExplosionProps> = ({ x, y }) => {
  return (
    <div
      className={styles.explosion}
      style={{
        left: x * GameConfig.TileSize,
        top: y * GameConfig.TileSize,
        width: GameConfig.TileSize,
        height: GameConfig.TileSize,
      }}
    >
      💥
    </div>
  );
};

export default Explosion;
