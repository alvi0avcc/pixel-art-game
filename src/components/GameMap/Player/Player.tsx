import styles from './Player.module.css';
import React from 'react';
import { GameConfig } from '@const/const';
import { type PlayerType } from '@appTypes/types';

interface PlayerProps {
  player: PlayerType;
}

const Player: React.FC<PlayerProps> = ({ player }) => {
  const transform = player.direction === 'left' ? 'scaleX(1)' : 'scaleX(-1)';

  return (
    <div
      className={styles.player}
      style={{
        left: player.x * GameConfig.TileSize,
        top: player.y * GameConfig.TileSize,
        width: GameConfig.TileSize,
        height: GameConfig.TileSize,
        transform,
      }}
    >
      🚶
    </div>
  );
};

export default Player;
