export const Condition = ({ value, children }) => {
  return <>{value ? children : null}</>;
};
