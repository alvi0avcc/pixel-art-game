import React from 'react';

const GameInstructions: React.FC = () => {
  return (
    <>
      <p className="info">Use arrow keys or WASD to move</p>
      <p className="info">
        Use "SPACE" to destroy walls around you
      </p>
    </>
  );
};

export default GameInstructions;
