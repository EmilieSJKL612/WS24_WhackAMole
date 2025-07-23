

// RQ2
import React, { createContext, useContext, useReducer, useCallback } from 'react';

const GameContext = createContext();

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state, // RQ4
        isPlaying: true,
        score: 0,
        molePosition: Math.floor(Math.random() * 9) //Em: try 9 holes like the provided PNG
      };
    case 'WHACK_MOLE':
      return {
        ...state, // RQ4
        score: state.score + 1,
        molePosition: Math.floor(Math.random() * 9)
      };
    case 'RESTART_GAME':
      return {
        ...state, // RQ4
        isPlaying: false,
        score: 0,
        molePosition: 0
      };
    default:
      return state;
  }
};


const initialState = {
  isPlaying: false,
  score: 0,
  molePosition: 0
};

// RQ3
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // RQ2
  const startGame = useCallback(() => {
    dispatch({ type: 'START_GAME' });
  }, []);

  const whackMole = useCallback(() => {
    dispatch({ type: 'WHACK_MOLE' }); 
  }, []);

  const restartGame = useCallback(() => {
    dispatch({ type: 'RESTART_GAME' });
  }, []);

  return (
    <GameContext.Provider value={{
      ...state,
      startGame,
      whackMole,
      restartGame
    }}>
      {children}
    </GameContext.Provider>
  );
};


// RQ3
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
