import { Component } from "react";
import { Reducer } from "redux";
import { AppStore } from "../../store/appStore";
import { injectReducer } from "../../store/reducers";
import Container from "./container";
import { startGame } from "./module";

interface Require extends NodeRequire {
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, key: string) => void;
}

export default (store: AppStore) => ({
  path: "game",
  getComponent(nextState: any, cb: any) {

    (require as Require).ensure([], (require: any) => {
      const reducer = (require("./module") as any).default as Reducer<any>;
      injectReducer(store, { key: "game", reducer });
      cb(null, Container);
    }, "game");
  },
  onEnter(nextState: AppStore) {
    store.dispatch(startGame(nextState.location.query.name));
  },
});
