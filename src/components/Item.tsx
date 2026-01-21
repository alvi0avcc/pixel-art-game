import React from 'react';
import { GameConfig } from '../const';

interface ItemProps {
  x: number;
  y: number;
  emoji: string;
}

const Item: React.FC<ItemProps> = ({ x, y, emoji }) => {
  return (
    <div
      className="item"
      style={{
        left: x * GameConfig.TileSize,
        top: y * GameConfig.TileSize,
        width: GameConfig.TileSize,
        height: GameConfig.TileSize,
      }}
    >
      {emoji}
    </div>
  );
};

export default Item;
