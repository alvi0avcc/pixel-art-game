import React from 'react';
import type { GameState } from '../../types/types';
import Modal from './Modal';

interface GameModalsProps {
  gameState: GameState;
  totalDiamonds: number;
  onRestart: () => void;
}

const GameResultModals: React.FC<GameModalsProps> = ({
  gameState,
  totalDiamonds,
  onRestart,
}) => {
  switch (gameState) {
    case 'gameOver':
      return (
        <Modal
          isOpen
          title="Game Over"
          buttonText="Restart"
          onRestart={onRestart}
        />
      );
    case 'win':
      return (
        <Modal
          isOpen
          title="You Win!"
          message={`Collected all ${totalDiamonds} diamonds!`}
          buttonText="Play Again"
          onRestart={onRestart}
        />
      );
    default:
      return null;
  }
};

export default GameResultModals;
