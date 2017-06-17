import * as React from "react";
import { ActionCreators, DefinedState } from "../module";
const KeyHandler = (require("react-key-handler") as any).default;
const KEYPRESS = (require("react-key-handler") as any).KEYPRESS;

interface Props extends Pick<DefinedState & ActionCreators,
  "question" | "endGame" | "lastQuestion" | "providedResults" | "name" | "submitOption"> { }

export default class Question extends React.Component<Props, {}> {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onOptionSubmit = this.onOptionSubmit.bind(this);
  }
  public render() {
    const options = this.props.question.options.map(option => (
      <span key={option.id} style={{ display: "block" }}>
        <button
          className="answer"
          value={option.id}
          onClick={this.onOptionSubmit}
        >
          {option.value}
        </button>
      </span>),
    );
    const keyHandlers = this.props.question.options.map((option, index) => (
      <KeyHandler
        key={index}
        keyEventName={KEYPRESS}
        keyValue={(index + 1).toString()}
        onKeyHandle={this.handleKeyPress}
      />),
    );
    return (
      <div>
        {keyHandlers}
        <div className="question">{this.props.question.value}</div>
        {options}
      </div>
    );
  }
  private handleKeyPress({ key }: { key: number }) {
    this.onOptionSubmit({ target: { value: this.props.question.options[key - 1].id } });
  }
  private onOptionSubmit({ target: { value } }: any) {
    if (this.props.lastQuestion) {
      this.props.endGame({
        name: this.props.name,
        providedResults: [
          ...this.props.providedResults,
          { questionId: this.props.question.id, optionId: value },
        ],
      });
    }

    this.props.submitOption(this.props.question.id, value);
  }
}
