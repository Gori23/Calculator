export const TopRowButton = (props) => {
  return (
    <button
      onClick={() => props.action(props.value)}
      className={
        props.className
          ? props.className
          : `button topRowButton button${props.index}`
      }
    >
      {props.children ? props.children : props.value}
    </button>
  );
};
