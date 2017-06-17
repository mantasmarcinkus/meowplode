import { Action, Dispatch } from "redux";
import { Player } from "./models";
export const LEADERBOARD_GET = "LEADERBOARD_GET";

export function getLeaderboard() {
  return (dispatch: Dispatch<any>) => {
    fetch(`api/leaderboard`)
      .then(response => response.json())
      .then(players => {
        dispatch({
          payload: players,
          type: LEADERBOARD_GET,
        });
      });
  };
}
export interface ActionCreators {
  getLeaderboard(): (dispatch: Dispatch<any>) => void;
}
const ACTION_HANDLERS: { [key: string]: any } = {
  [LEADERBOARD_GET]: (state: State, action: Action & { payload: Player[] }) => {
    return {
      ...state,
      players: action.payload,
    };
  },
};

export interface State {
  players: Player[] | null;
}

const initialState: State = {
  players: null,
};

export default function reducer(state = initialState, action: Action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
