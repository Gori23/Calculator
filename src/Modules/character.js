import "../index.css";

const Character = (props) => {
  let n = props.number;

  let body = [];

  for (let i = 1; i < 37; i++) {
    body.push(
      <div
        className={`grid-item-character grid-item-character-${n} grid-element-character-${i}`}
      />
    );
  }
  return <div className="grid-container-character">{body}</div>;
};

export default Character;
