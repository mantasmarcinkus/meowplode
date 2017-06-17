import { browserHistory } from "react-router";
import { Action, Dispatch } from "redux";
import { AppStore } from "./appStore";
// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = "LOCATION_CHANGE";

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange(location: Location | string = "/") {
  return {
    payload: location,
    type: LOCATION_CHANGE,
  };
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }: { dispatch: Dispatch<any> }) => {
  return (nextLocation: Location | any) => dispatch(locationChange(nextLocation));
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = browserHistory.getCurrentLocation();

export default function locationReducer(state = initialState, action: Action & { payload: string }) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state;
}
