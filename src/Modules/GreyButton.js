export const GreyButton = (props) => {
  return (
    <button
      onClick={() => props.action(props.value)}
      className={
        props.className
          ? props.className
          : `button greyButton button${props.index}`
      }
    >
      {props.children ? props.children : props.value}
    </button>
  );
};
