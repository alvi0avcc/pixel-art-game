import React from 'react';

interface BombCounterProps {
  bombs: number;
}

const BombCounter: React.FC<BombCounterProps> = ({
  bombs,
}) => {
  return <p className="info">Bombs ☢: {bombs}</p>;
};

export default BombCounter;
