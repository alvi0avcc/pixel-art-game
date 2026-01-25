import styles from './ReloadGame.module.css';
import { type FC } from 'react';

interface ReloadGameProps {
  onRestart: () => void;
}

const ReloadGame: FC<ReloadGameProps> = ({ onRestart }) => {
  return (
    <button
      className={styles.reloadGameButton}
      title="Restart Game"
      onClick={onRestart}
    >
      👻
    </button>
  );
};

export default ReloadGame;
