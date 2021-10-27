import "./Styles.scss";
import { Condition } from "../Condition";
import { useContext } from "react";
import { GameContext } from "../../providers/Game";

export const ResultOverflow = () => {
  const label_text = () => (winner ? `${winner} VENCEU` : "SEM VENCEDOR");

  const { winner } = useContext(GameContext);
  const { getIsCompleted } = useContext(GameContext);

  const is_finished = () => {
    return getIsCompleted() || winner;
  };

  return (
    <Condition value={is_finished()}>
      <div className="result-overflow">
        <div className={`result-overflow--label ${winner && "has-winner"}`}>
          {label_text()}
        </div>
      </div>
    </Condition>
  );
};
