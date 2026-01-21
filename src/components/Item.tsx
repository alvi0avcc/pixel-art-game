import React from 'react';
import { GameConfig } from '../const';

interface ItemProps {
  x: number;
  y: number;
  emoji: string;
  animated: boolean;
}

const Item: React.FC<ItemProps> = ({
  x,
  y,
  emoji,
  animated,
}) => {
  return (
    <div
      className="item"
      style={{
        left: x * GameConfig.TileSize + 6,
        top: y * GameConfig.TileSize + 6,
        width: GameConfig.TileSize - 12,
        height: GameConfig.TileSize - 12,
        transform: animated ? 'scale(3)' : 'scale(1)',
        transition: 'transform 0.3s ease',
      }}
    >
      {emoji}
    </div>
  );
};

export default Item;
