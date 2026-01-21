import React from 'react';
import { GameConfig } from '../const';
import { type PlayerType } from '../types/types';

interface PlayerProps {
  player: PlayerType;
}

const Player: React.FC<PlayerProps> = ({ player }) => {
  return (
    <div
      className="player"
      style={{
        left: player.x * GameConfig.TileSize,
        top: player.y * GameConfig.TileSize,
        width: GameConfig.TileSize,
        height: GameConfig.TileSize,
      }}
    >
      🚶
    </div>
  );
};

export default Player;
