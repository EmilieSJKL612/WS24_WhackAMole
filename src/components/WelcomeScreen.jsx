// RQ1
import React from "react";
import { useGame } from "../context/GameContext";

// RQ1, 5
const WelcomeScreen = () => {
  const { startGame } = useGame();

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <h1>🦫 Whack-a-Mole 🦫</h1>
        <div className="instructions">
          <h2>How to Play:</h2>{" "}
          {/* Em: try1 - provide some simple instructions for better playing experience */}
          <p>• Click on the mole when it appears</p>
          <p>• Each successful hit scores 1 point</p>
          <p>• The mole will move to a new hole after each hit</p>
          <p>• Try to get the highest score possible!</p>
        </div>
        {/* RQ6 */}
        <button className="play-button" onClick={startGame}>
          🎮 Start Playing
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
