const GameInstructions = () => {
  return (
    <div className="rules-container">
      <h2>Game rules</h2>
      <p>Collect all the diamonds on the map</p>
      <p>Avoid mines</p>
      <p>Use bombs to destroy walls</p>
      <p className="info">Use arrow keys or WASD to move</p>
      <p className="info">Use "SPACE" to destroy walls around you</p>
    </div>
  );
};

export default GameInstructions;
