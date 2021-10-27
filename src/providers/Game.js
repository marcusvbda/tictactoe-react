import React, { useState } from "react";
import { processWinner } from "../helpers/gameHelpers";
export const GameContext = React.createContext({});

export const GameProvider = ({ children }) => {
  const [winner, setWinner] = useState(null);

  const [matrix, setMatrix] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const players = ["⭕", "✖️"];
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const getCurrentPlayer = () => {
    if (currentPlayer === null) {
      setCurrentPlayer(Math.floor(Math.random() * 2));
    }
    return players[currentPlayer];
  };

  const setValue = (row, col) => {
    if (!matrix[row][col]) {
      let newMatrix = matrix;
      newMatrix[row][col] = getCurrentPlayer();
      setMatrix(newMatrix);
      if (currentPlayer === 0) {
        setCurrentPlayer(1);
      } else {
        setCurrentPlayer(0);
      }
      setWinner(processWinner(matrix));
    }
  };

  const getIsCompleted = () => {
    let counter = 0;
    matrix.forEach((row) => {
      row.forEach((cell) => {
        if (cell !== null) {
          counter++;
        }
      });
    });
    return 9 === counter;
  };

  return (
    <GameContext.Provider
      value={{
        matrix,
        setMatrix,
        setValue,
        players,
        currentPlayer,
        setCurrentPlayer,
        getCurrentPlayer,
        winner,
        getIsCompleted,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
