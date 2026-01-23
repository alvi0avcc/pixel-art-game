const GameInstructions = () => {
  return (
    <div className="rules-container">
      <h2>Game rules</h2>
      <ul>
        <li>Collect all the diamonds on the map</li>
        <li>Avoid mines</li>
        <li>Use bombs to destroy walls</li>
      </ul>
      <p className="info">Use arrow keys or WASD to move</p>
      <p className="info">Use "SPACE" to destroy walls around you</p>
    </div>
  );
};

export default GameInstructions;
