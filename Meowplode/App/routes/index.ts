import CoreLayout from "../layouts/Layout";
import { AppStore } from "../store/appStore";
import GameRoute from "./Game";
import Home from "./Home";

export const createRoutes = (store: AppStore) => ({
  childRoutes : [
    GameRoute(store),
  ],
  component   : CoreLayout,
  indexRoute  : Home,
  path        : "/",
});

export default createRoutes;
