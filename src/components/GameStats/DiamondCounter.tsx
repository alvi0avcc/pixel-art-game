import React from 'react';

interface DiamondCounterProps {
  collectedDiamonds: number;
  totalDiamonds: number;
}

const DiamondCounter: React.FC<DiamondCounterProps> = ({
  collectedDiamonds,
  totalDiamonds,
}) => {
  return (
    <p className="info">
      Diamonds 💎: {collectedDiamonds}/{totalDiamonds}
    </p>
  );
};

export default DiamondCounter;
