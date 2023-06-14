import React from "react";
import "./App.css";
import Number from "./Modules/number";
import Character from "./Modules/character";

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr: [] };
  }

  componentDidMount() {
    this.splitEveryCharacter(this.props.number);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.number !== this.props.number) {
      this.splitEveryCharacter(this.props.number);
    }
  }

  splitEveryCharacter(text) {
    let arr = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ".") {
        if (i === text.length - 1) {
          arr.push(text.substring(i, i + 1));
          continue;
        }
        arr.push(text.substring(i, i + 2));
        i += 1;
        continue;
      }
      arr.push(text.substring(i, i + 1));
    }

    this.preRender(arr);
  }

  preRender(text) {
    let someArray = [];
    let tempElement = "";
    text.forEach((element) => {
      if (element.match("[0-9]")) {
        let number;

        if (element.indexOf(".") !== -1) {
          tempElement += ".";
          number = element.split(".")[1];
        }

        someArray.push(
          <Number number={number ? number : element} dot={tempElement} />
        );
        tempElement = "";
      } else if (element === ".") {
        someArray.push(<Number number="empty" dot={"."} />);
      } else {
        someArray.push(<Character number={element} />);
      }
    });
    someArray.push();
    this.setState({
      arr: someArray,
    });
  }

  render() {
    return <div className="numberContainer">{this.state.arr}</div>;
  }
}

export default Screen;
