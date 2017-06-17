import { Router } from "react-router";
import {
  Dispatch,
  Reducer,
  ReducersMapObject,
  Store,
} from "redux";

export interface AppStore extends Store<any> {
  asyncReducers: ReducersMapObject;
  dispatch: (f: any) => Dispatch<any>;
  location: { query: { name: string } };
  router: Router;
  replaceReducer(asyncReducers: Reducer<AppStore>): void;
  unsubscribeHistory?(): void;
}
