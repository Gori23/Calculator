import "../index.css";
import Screen from "../App2";

const DisplayPart = ({ toDisplay }) => {
  console.log({ toDisplay });
  return (
    <div className="displayPart">
      <div className="header">
        <div className="header1">Vector</div>
        <div className="header2">Cd-191</div>
        <div className="header3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="header4">
          <span>10</span>
          <span>digits</span>
        </div>
      </div>
      <div className="displayBorder">
        <div className="display">
          <Screen number={toDisplay}></Screen>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DisplayPart;
