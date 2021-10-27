import "./Styles.scss";
import { ResultOverflow } from "../ResultOverflow";
import { SquareSection } from "../SquareSection";
import { GameContext } from "../../providers/Game";
import { useContext } from "react";

export const GameBoard = () => {
  const { matrix, getCurrentPlayer } = useContext(GameContext);

  const renderSquares = () => {
    return matrix.map((row, i) => (
      <div className="gameboard--row" key={i}>
        {row.map((col, y) => (
          <SquareSection row={i} column={y} key={`${i}_${y}`} />
        ))}
      </div>
    ));
  };

  return (
    <>
      <ResultOverflow />
      <div className="gameboard">
        {renderSquares()}
        <div className="gameboard--playername">
          <b>Próximo Jogador : </b> {getCurrentPlayer()}
        </div>
      </div>
    </>
  );
};
