import "./Styles.scss";
import { useContext } from "react";
import { GameContext } from "../../providers/Game";

export const ResultOverflow = () => {
  const label_text = () => (winner ? `${winner} VENCEU` : "SEM VENCEDOR");

  const { winner } = useContext(GameContext);
  const { getIsCompleted } = useContext(GameContext);

  const getIsFinished = () => {
    return getIsCompleted() || winner;
  };

  if (!getIsFinished()) return null;

  return (
    <div className="result-overflow">
      <div className={`result-overflow--label ${winner && "has-winner"}`}>
        {label_text()}
      </div>
    </div>
  );
};
