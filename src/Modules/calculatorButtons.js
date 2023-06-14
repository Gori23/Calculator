import "../index.css";
import { GreyButton } from "./GreyButton";
import { NumberButton } from "./numberButton";
import { TopRowButton } from "./TopRowButton";

const CalculatorButtons = ({
  onNumberClickAction,
  onSumClickAction,
  onSpecialButtonAction,
}) => {
  return (
    <div className="buttons">
      <TopRowButton value={"MRC"} index={1} action={onNumberClickAction} />
      <TopRowButton value={"M-"} index={2} action={onNumberClickAction} />
      <TopRowButton value={"M+"} index={3} action={onNumberClickAction} />
      <TopRowButton value={"CE"} index={4} action={onNumberClickAction} />
      <TopRowButton
        index={5}
        action={onNumberClickAction}
        className="button ceButton button5"
      >
        <div className="topCeButton">ON</div>
        <div className="cross"></div>
        <div className="bottomCeButton">C</div>
      </TopRowButton>
      <NumberButton value={7} index={6} action={onNumberClickAction} />
      <NumberButton value={8} index={7} action={onNumberClickAction} />
      <NumberButton value={9} index={8} action={onNumberClickAction} />
      <GreyButton value={"%"} index={9} action={onSpecialButtonAction} />
      <GreyButton value={"&#8730;"} index={10} action={onSpecialButtonAction}>
        &#8730;
      </GreyButton>
      <NumberButton value={4} index={11} action={onNumberClickAction} />
      <NumberButton value={5} index={12} action={onNumberClickAction} />
      <NumberButton value={6} index={13} action={onNumberClickAction} />
      <GreyButton value={"&#247;"} index={14} action={onSpecialButtonAction}>
        &#247;
      </GreyButton>
      <GreyButton
        value={"+"}
        index={15}
        className="button button15"
        action={onSpecialButtonAction}
      />
      <GreyButton value={"-"} index={16} action={onSpecialButtonAction} />
      <NumberButton value={1} index={17} action={onNumberClickAction} />
      <NumberButton value={2} index={18} action={onNumberClickAction} />
      <NumberButton value={3} index={19} action={onNumberClickAction} />
      <GreyButton value={"*"} index={20} action={onSpecialButtonAction}>
        X
      </GreyButton>
      <NumberButton value={"."} index={21} action={onSpecialButtonAction} />
      <NumberButton value={"reverse"} index={22} action={onSpecialButtonAction}>
        <div className="topSpecialButton">+</div>
        <div className="cross"></div>
        <div className="bottomSpecialButton">-</div>
      </NumberButton>
      <NumberButton value={0} index={23} action={onNumberClickAction} />
      <GreyButton value={"="} index={24} action={onSumClickAction} />
    </div>
  );
};

export default CalculatorButtons;
