export const NumberButton = ({ value, action, index, children }) => {
  return (
    <button
      onClick={() => action(value)}
      className={`button numberButton button${index}`}
    >
      {children ? children : value}
    </button>
  );
};
