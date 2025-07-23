// RQ1
import React from "react";
import { useGame } from "../context/GameContext";
import Hole from "./Hole";

// RQ7
const GameScreen = () => {
  const { score, molePosition, whackMole, restartGame } = useGame();

  return (
    <div className="game-screen">
      <div className="game-header">
        {/* RQ6 */}
        <div className="score">Score: {score}</div>
        {/* RQ9 */}
        <button className="restart-button" onClick={restartGame}>
          🔄 Restart
        </button>
      </div>
      <div className="game-board">
        {/* RQ6 - single mole in one of the holes */}
        {Array.from({ length: 9 }, (_, index) => (
          <Hole
            key={index}
            index={index}
            hasMole={index === molePosition}
            onMoleClick={whackMole}
          />
        ))}
      </div>
    </div>
  );
};

export default GameScreen;
