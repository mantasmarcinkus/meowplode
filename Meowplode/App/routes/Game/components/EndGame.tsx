import { Path } from "history";
import * as React from "react";
import { Router } from "react-router";
import { AppStore } from "../../../store/appStore";
import Leaderboard from "../../Leaderboard/container";
import { ActionCreators, DefinedState } from "../module";
const KeyHandler = (require("react-key-handler") as any).default;
const KEYPRESS = (require("react-key-handler") as any).KEYPRESS;
const KEYUP = (require("react-key-handler") as any).KEYUP;

const TEXT = (success: boolean) => success
  ? {
    buttonText: "Let's save another one!",
    newPlayerText: "New saver?",
    title: "Yay, you saved a kitten",
  }
  : {
    buttonText: "Try to save atleast one",
    newPlayerText: "Let someone else try..",
    title: "So sad...",
  };

interface Props extends Pick<DefinedState & ActionCreators,
  "name" | "clearGame" | "startGame" | "success"> {
  router: Path[] | Router;
}

export default class EndGame extends React.Component<Props, {}> {
  constructor() {
    super();
    this.onRetryClick = this.onRetryClick.bind(this);
    this.onNewPlayerClick = this.onNewPlayerClick.bind(this);
  }
  public render() {
    const texts = TEXT(this.props.success);
    return (
      <div>
        <KeyHandler keyEventName={KEYPRESS} keyValue={"Enter"} onKeyHandle={this.onRetryClick} />
        <KeyHandler keyEventName={KEYUP} keyValue={"Escape"} onKeyHandle={this.onNewPlayerClick} />
        <div style={{ fontSize: 28, margin: 30 }}>{texts.title}</div>
        <button className="border" onClick={this.onRetryClick}>{texts.buttonText}</button><br />
        <button className="answer" onClick={this.onNewPlayerClick}>{texts.newPlayerText}</button>
        <div style={{ marginTop: 20 }}>
          <Leaderboard name={this.props.name} />
        </div>
        <div style={{ fontSize: 10, marginTop: 15 }}>
          <a href="https://www.buzzfeed.com/chelseamarshall/meows?utm_term=.clGnJmJZ4#.nvAZ6z6lK">
            Find out more about kittens! (Hints here!)
          </a>
        </div>
      </div>
    );
  }
  private onRetryClick() {
    this.props.startGame(this.props.name);
  }
  private onNewPlayerClick() {
    this.props.clearGame();
    (this.props.router as Path[]).push("/");
  }
}
