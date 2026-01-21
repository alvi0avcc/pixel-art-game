import React from 'react';
import { GameConfig } from '../const';

interface WallProps {
  x: number;
  y: number;
}

const Wall: React.FC<WallProps> = ({ x, y }) => {
  return (
    <div
      className="wall"
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
