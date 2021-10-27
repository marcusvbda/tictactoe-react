import "./Styles.scss";
import { GameContext } from "../../providers/Game";
import { useContext } from "react";

export const SquareSection = ({ row, column }) => {
  const { matrix, setValue } = useContext(GameContext);

  const current_value = matrix[row][column];

  const handleClick = () => {
    setValue(row, column);
  };

  return (
    <div className="square" onClick={handleClick}>
      {current_value}
    </div>
  );
};
