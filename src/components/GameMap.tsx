import React from 'react';
import { GameConfig } from '../const';
import { type PlayerType } from '../types/types';
import Tile from './Tile';
import Player from './Player';

interface GameMapProps {
  map: number[][];
  player: PlayerType;
}

const GameMap: React.FC<GameMapProps> = ({
  map,
  player,
}) => {
  return (
    <div
      className="game-map"
      style={{
        width: GameConfig.TileSize * GameConfig.MapWidth,
        height: GameConfig.TileSize * GameConfig.MapHeight,
        fontSize: GameConfig.TileSize,
      }}
    >
      {map.flatMap((row, y) =>
        row.map((cell, x) => (
          <Tile
            key={`tile-${x}-${y}`}
            cell={cell}
            x={x}
            y={y}
          />
        )),
      )}
      <Player player={player} />
    </div>
  );
};

export default GameMap;
