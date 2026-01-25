import styles from './SoundOnOf.module.css';
import { type FC } from 'react';

interface SoundOnOfProps {
  soundOn: boolean;
}

const SoundOnOf: FC<SoundOnOfProps> = ({ soundOn }) => {
  return (
    <button className={styles.SoundOnOfButton} disabled title="Sound On/Of">
      {soundOn ? '🔈' : '🔇'}
    </button>
  );
};

export default SoundOnOf;
