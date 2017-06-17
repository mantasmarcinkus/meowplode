import { combineReducers, Reducer, ReducersMapObject, Store } from "redux";
import leaderboardReducer from "../routes/Leaderboard/module";
import { AppStore } from "./appStore";
import locationReducer from "./location";

export const makeRootReducer = (asyncReducers?: ReducersMapObject): Reducer<AppStore> => {
  return combineReducers<AppStore>({
    leaderboard: leaderboardReducer,
    location: locationReducer,
    ...asyncReducers,
  });
};

export const injectReducer = (store: AppStore, { key, reducer }: { key: string, reducer: Reducer<any> }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    return;
  }

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
