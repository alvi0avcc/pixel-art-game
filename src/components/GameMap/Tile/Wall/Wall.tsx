import styles from './Wall.module.css';
import React from 'react';
import { GameConfig } from '@const/const';

interface WallProps {
  x: number;
  y: number;
}

const Wall: React.FC<WallProps> = ({ x, y }) => {
  return (
    <div
      className={styles.wall}
      style={{
        left: x * GameConfig.TileSize,
        top: y * GameConfig.TileSize,
        width: GameConfig.TileSize,
        height: GameConfig.TileSize,
      }}
    />
  );
};

export default Wall;
