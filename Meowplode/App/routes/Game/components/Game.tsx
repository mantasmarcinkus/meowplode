import * as React from "react";
import { AppStore } from "../../../store/appStore";
import { ActionCreators, DefinedState as Props } from "../module";
import EndGame from "./EndGame";
import Question from "./Question";
import Timer from "./Timer";

/*
* Game manager class. Manages the game and the end game.
*/
export default class Game extends React.Component<Props & ActionCreators & AppStore, {}> {
  public render() {
    let components;
    if (this.props.success != null) {
      components = (
      <EndGame
        startGame={this.props.startGame}
        name={this.props.name}
        success={this.props.success}
        router={this.props.router}
        clearGame={this.props.clearGame}
      />);
    } else if (!this.props.question) {
      components = <div>Loading..</div>;
    } else {
      components = (
        <div>
          <Question
            question={this.props.question}
            submitOption={this.props.submitOption}
            providedResults={this.props.providedResults}
            name={this.props.name as string}
            endGame={this.props.endGame}
            lastQuestion={this.props.lastQuestion}
          />
          <Timer secondsRemaining={45} timeOut={this.props.timeOut} />
        </div>
      );
    }

    return (
      <div>
        <img src={this.props.imageSource} style={{ maxHeight: 120 }} />
        {components}
      </div>
    );
  }
}
