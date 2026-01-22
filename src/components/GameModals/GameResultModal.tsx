import React from 'react';
import { createPortal } from 'react-dom';

interface GameResultModalProps {
  isOpen: boolean;
  title: string;
  message?: string;
  buttonText: string;
  onRestart: () => void;
}

const GameResultModal: React.FC<GameResultModalProps> = ({
  isOpen,
  title,
  message,
  buttonText,
  onRestart,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="game-result show">
      <h2>{title}</h2>
      {message && <p>{message}</p>}
      <button autoFocus onClick={onRestart}>
        {buttonText}
      </button>
    </div>,
    document.body,
  );
};

export default GameResultModal;
