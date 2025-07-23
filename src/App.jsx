
import React from 'react';
import { GameProvider } from './context/GameContext';
import WelcomeScreen from './components/WelcomeScreen';
import GameScreen from './components/GameScreen';
import { useGame } from './context/GameContext';


function AppContent() {
  const { isPlaying } = useGame();

  return (
    <div className="app">
      {/* RQ5, 6 */}
      {isPlaying ? <GameScreen /> : <WelcomeScreen />}
    </div>
  );
}


export default function App() {
  return (
    <GameProvider>
      <div className="app-container">
        <AppContent />
      </div>
    </GameProvider>
  );
}

