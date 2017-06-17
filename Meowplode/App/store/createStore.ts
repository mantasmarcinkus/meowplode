import { browserHistory } from "react-router";
import {
  applyMiddleware,
  compose,
  createStore as createReduxStore,
} from "redux";
import thunk from "redux-thunk";
import { AppStore } from "./appStore";
import { updateLocation } from "./location";
import makeRootReducer from "./reducers";

const createStore = (initialState: AppStore): AppStore => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const composeEnhancers = compose;

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const m = applyMiddleware(...middleware);
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(m),
  ) as AppStore;

  store.asyncReducers = {};

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store));

  return store;
};

export default createStore;
