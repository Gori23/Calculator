import "../index.css";

const Number = (props) => {
  let arr = [];

  for (let i = 1; i < 31; i++) {
    let className = `grid-item grid-item-${props.number} grid-element-${i}`;
    if (i == 26 && props.dot !== "") {
      className += "-dot";
    }

    if (i == 4 || i === 6 || i === 16 || i === 18 || i === 28 || i === 30) {
      arr.push(
        <div className={className}>
          <div className="up triangle" />
          <div className="right triangle" />
          <div className="left triangle" />
          <div className="down triangle" />
        </div>
      );
      continue;
    }
    arr.push(<div className={className} />);
  }
  return <div className="grid-container">{arr}</div>;
};

export default Number;
