import * as React from "react";
import { Dispatch } from "redux";
import { Player } from "../models";
import { ActionCreators, State } from "../module";

const Cat = require("../assets/cat.png");
const Tombstone = require("../assets/tombstone.png");

const QUESTION_COUNT = 10;

export interface Props extends Partial<ActionCreators & State> {
  name: string;
}
export const Leaderboard = (props: Props) => {
  if (!props.players) {
    return <div>Loading...</div>;
  } else if (props.players.length === 0) {
    return (null);
  }

  const listOfPlayers = props.players.map(x => (
    <div key={x.dateCreated} className="leaderboard-row">
      <div className="leaderboard-image">
        <img alt="result" src={x.result ? Cat : Tombstone} height="24" />
      </div>
      <div className="leaderboard-name">
        <span style={{ fontWeight: props.name === x.name ? "bold" : "normal" }}>{x.name}</span>
        <span> ({x.successfullyAnswered}/{QUESTION_COUNT})</span>
      </div>
    </div>));
  return (
    <div>
      <div style={{ fontSize: 18, marginBottom: 7 }}>How did other players do?</div>
      <div className="leaderboard">
        {listOfPlayers}
      </div>
    </div>
  );
};

export default Leaderboard;
