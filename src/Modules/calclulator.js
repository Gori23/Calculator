import CalculatorButtons from "./calculatorButtons";
import DisplayPart from "./displayPart";
import "../index.css";
import React from "react";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "0",
      currentOperations: [],
      currentNumbers: [],
    };
  }

  getOperationsAndNumbers = () => {
    let operations = [];
    let specialOperations = ["+", "-", "/", "*"];
    let numbers = [];
    let currentNumber = "";
    for (let i = 0; i < this.state.text.length; i++) {
      if (specialOperations.indexOf(this.state.text[i]) !== -1) {
        if (i === 0) {
          currentNumber += this.state.text[i];
          continue;
        }
        operations.push(this.state.text[i]);

        if (currentNumber !== "") {
          numbers.push(currentNumber);
          currentNumber = "";
        }

        if (specialOperations.indexOf(this.state.text[i + 1]) !== -1) {
          currentNumber += this.state.text[i + 1];
          i += 1;
        }
      } else {
        currentNumber += this.state.text[i];
      }
    }
    debugger;
    numbers.push(currentNumber);
    this.setState({
      operations: [...operations],
      currentNumbers: [...numbers],
    });
  };

  sum = () => {
    if (this.state.text[0] === "-") {
      this.setState({
        text: "0".concat(this.state.text),
      });
    }
    this.getOperationsAndNumbers();
    let liczby = this.state.currentNumbers.map(function (c) {
      return parseFloat(c);
    });
    console.log(this.state.operations);
    console.log(this.state.currentNumbers);

    var math_it_up = {
      "+": function (x, y) {
        return x + y;
      },
      "-": function (x, y) {
        return x - y;
      },
      "*": function (x, y) {
        return x * y;
      },
      "/": function (x, y) {
        return x / y;
      },
    };
    Array.prototype.insert = function (index, ...items) {
      this.splice(index, 0, ...items);
    };

    let operations = this.state.operations;

    while (operations.indexOf("*") !== -1 || operations.indexOf("/") !== -1) {
      let index =
        operations.indexOf("*") === -1
          ? operations.indexOf("/")
          : operations.indexOf("*");
      let sum = math_it_up[operations[index]](liczby[index], liczby[index + 1]);
      operations.splice(index, 1);
      liczby.splice(index, 2);
      liczby.insert(index, sum);
    }

    let sum = 0;
    for (let c = 0; c < operations.length; c++) {
      sum += math_it_up[operations[c]](liczby[c], liczby[c + 1]);
    }

    if (liczby.length === 1) {
      sum += liczby[0];
    }

    this.setState(
      {
        text: String(sum),
      },
      () => {
        console.log(sum);
      }
    );
  };

  onSpecialButtonClick = (i) => {
    this.getOperationsAndNumbers();

    let specialOperations = ["+", "-", "/", "*"];

    switch (i) {
      case ".": {
        let lastNumber =
          this.state.currentNumbers[this.state.currentNumbers.length - 1];
        if (lastNumber.indexOf(".") !== -1) {
          return;
        }
        break;
      }
      case "+":
      case "-":
      case "/":
      case "*": {
        let lastDigit = this.state.text[this.state.text.length - 1];
        if (lastDigit === i) {
          return;
        }
        if (specialOperations.indexOf(lastDigit) !== -1) {
          let temporaryText = this.state.text.slice(
            0,
            this.state.text.length - 1
          );
          this.setState({
            text: temporaryText + i,
          });
          return;
        }
        break;
      }

      case "reverse": {
        if (this.state.text === "0") {
          return;
        }

        if (this.state.text[this.state.text.length] === ".") {
          return;
        }
        debugger;
        console.log(this.state.currentNumbers.length);
        console.log(this.state.currentNumbers);
        if (this.state.currentNumbers.length === 1) {
          debugger;
          this.setState({
            text: (parseFloat(this.state.text) * -1).toString(),
          });
          return;
        }
        break;
      }
    }

    this.setState({
      text: (this.state.text += i),
    });
  };

  onNumberButtonClick = (i) => {
    if (this.state.text === "0") {
      this.setState({
        text: i.toString(),
      });
      return;
    }

    this.setState({
      text: (this.state.text += i.toString()),
    });
  };

  render() {
    return (
      <div className="calculator">
        <DisplayPart toDisplay={this.state.text} />
        <div></div>
        <CalculatorButtons
          onSpecialButtonAction={this.onSpecialButtonClick}
          onNumberClickAction={this.onNumberButtonClick}
          onSumClickAction={this.sum}
        />
      </div>
    );
  }
}
