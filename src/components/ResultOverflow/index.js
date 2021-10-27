import "./Styles.scss";
import Condition from "../Condition";

function ResultOverflow() {
  const label_text = "";
  const is_finished = false;

  return (
    <Condition condition={is_finished}>
      <div className="result-overflow">
        <div className="result-overflow--label">{label_text}</div>
      </div>
    </Condition>
  );
}

export default ResultOverflow;
