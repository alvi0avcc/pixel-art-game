import React from 'react';

interface ScoreCounterProps {
  score: number;
}

const ScoreCounter: React.FC<ScoreCounterProps> = ({
  score,
}) => {
  return <p className="info">Score 🧮: {score}</p>;
};

export default ScoreCounter;
