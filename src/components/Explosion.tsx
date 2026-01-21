import React from 'react';
import { GameConfig } from '../const';

interface ExplosionProps {
  x: number;
  y: number;
}

const Explosion: React.FC<ExplosionProps> = ({ x, y }) => {
  return (
    <div
      style={{
        left: x * GameConfig.TileSize,
        top: y * GameConfig.TileSize,
        width: GameConfig.TileSize,
        height: GameConfig.TileSize,
        position: 'absolute',
        backgroundColor: 'orange',
        borderRadius: '50%',
        animation: 'explode 0.3s ease-out',
      }}
    >
      💥
    </div>
  );
};

export default Explosion;
