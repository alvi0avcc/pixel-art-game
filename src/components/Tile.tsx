import React from 'react';
import Wall from './Wall';
import Item from './Item';

interface TileProps {
  cell: number;
  x: number;
  y: number;
}

const Tile: React.FC<TileProps> = ({ cell, x, y }) => {
  if (cell === 1) {
    return <Wall x={x} y={y} />;
  }
  if (cell === 2) {
    return <Item x={x} y={y} emoji="💎" />;
  }
  if (cell === 3) {
    return <Item x={x} y={y} emoji="💀" />;
  }
  return null;
};

export default Tile;
