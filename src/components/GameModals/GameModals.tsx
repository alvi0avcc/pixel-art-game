import React from 'react';
import type { GameState } from '../../types/types';
import GameResultModal from './GameResultModal';

interface GameModalsProps {
  gameState: GameState;
  totalDiamonds: number;
  onRestart: () => void;
}

const GameModals: React.FC<GameModalsProps> = ({
  gameState,
  totalDiamonds,
  onRestart,
}) => {
  return (
    <>
      <GameResultModal
        isOpen={gameState === 'gameOver'}
        title="Game Over"
        buttonText="Restart"
        onRestart={onRestart}
      />
      <GameResultModal
        isOpen={gameState === 'win'}
        title="You Win!"
        message={`Collected all ${totalDiamonds} diamonds!`}
        buttonText="Play Again"
        onRestart={onRestart}
      />
    </>
  );
};

export default GameModals;
