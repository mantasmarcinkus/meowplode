import * as React from "react";
import { ActionCreators, DefinedState } from "../module";

const FONT_SIZE = 60;
const COLOR = "#FF530D";

interface Props extends Pick<ActionCreators, "timeOut"> {
  secondsRemaining: number;
}

interface State {
  secondsRemaining: number;
  fontSize: number;
  color: string;
}
export default class Timer extends React.Component<Props, State> {
  private interval: any; // Typescript and javascript hacking is great. Using the same variable for different types.
  constructor(props: Props) {
    super(props);
    this.state = {
      color: COLOR,
      fontSize: FONT_SIZE,
      secondsRemaining: props.secondsRemaining,
    };
    this.tick = this.tick.bind(this);
  }
  public tick() {
    this.setState({
      color: this.getColor(this.state.secondsRemaining),
      fontSize: this.getFontSize(this.state.fontSize, this.state.secondsRemaining),
      secondsRemaining: this.state.secondsRemaining - 1,
    });

    if (this.state.secondsRemaining <= 0) {
      this.props.timeOut();
      clearInterval(this.interval);
    }
  }
  public componentDidMount() {
    this.setState({ secondsRemaining: this.props.secondsRemaining, fontSize: FONT_SIZE, color: COLOR });
    this.interval = setInterval(this.tick, 1000);
  }
  public componentWillUnmount() {
    clearInterval(this.interval);
  }
  public render() {
    const minutes = ("0" + parseInt((this.state.secondsRemaining / 60).toString(), 10)).slice(-2);
    const seconds = ("0" + parseInt((this.state.secondsRemaining % 60).toString(), 10)).slice(-2);
    return (
      <div className="digital" style={{ fontSize: this.state.fontSize, color: this.state.color, height: 100 }}>
        <span>{minutes}:{seconds}</span>
      </div>
    );
  }
  private getFontSize(fontSize: number, secondsRemaining: number) {
    return secondsRemaining < 7 ? FONT_SIZE * 1.3 : FONT_SIZE;
  }
  private getColor(secondsRemaining: number) {
    return secondsRemaining < 7 ? "red" : COLOR;
  }
}
