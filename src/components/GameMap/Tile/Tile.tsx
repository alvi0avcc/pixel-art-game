import React from 'react';
import Wall from '../Wall/Wall';
import Item from '../Items/Item';
import Explosion from '../Explosion/Explosion';

interface TileProps {
  cell: number;
  x: number;
  y: number;
  animated: boolean;
  exploding: boolean;
}

const Tile: React.FC<TileProps> = ({
  cell,
  x,
  y,
  animated,
  exploding,
}) => {
  if (exploding) return <Explosion x={x} y={y} />;
  if (cell === 1) {
    return <Wall x={x} y={y} />;
  }
  if (cell === 2) {
    return (
      <Item x={x} y={y} emoji="💎" animated={animated} />
    );
  }
  if (cell === 3) {
    return (
      <Item x={x} y={y} emoji="💀" animated={animated} />
    );
  }
  return null;
};

export default Tile;
