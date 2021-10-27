export const processWinner = (matrix) => {
  const hasHorizontalWinner = () => {
    const checkRow = (row) => {
      let result =
        matrix[row].every((x) => matrix[row][0] === x) && matrix[row][0];
      return !result ? null : result;
    };
    return checkRow(0) || checkRow(1) || checkRow(2);
  };

  const hasVerticalWinner = () => {
    const checkColumn = (column) => {
      let column_values = [
        matrix[0][column],
        matrix[1][column],
        matrix[2][column],
      ];
      let result =
        column_values.every((x) => column_values[0] === x) && column_values[0];
      return !result ? null : result;
    };
    return checkColumn(0) || checkColumn(1) || checkColumn(2);
  };

  const hasDiagonalWinner = () => {
    const checkDiagonal = (type) => {
      let column_values = null;
      if (type === "left-to-right") {
        column_values = [matrix[0][0], matrix[1][1], matrix[2][2]];
      } else {
        column_values = [matrix[0][2], matrix[1][1], matrix[2][0]];
      }
      let result =
        column_values.every((x) => column_values[0] === x) && column_values[0];
      return !result ? null : result;
    };
    return checkDiagonal("left-to-right") || checkDiagonal("right-to-left");
  };
  return (
    hasHorizontalWinner(matrix) ||
    hasVerticalWinner(matrix) ||
    hasDiagonalWinner(matrix)
  );
};
