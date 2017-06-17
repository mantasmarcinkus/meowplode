import * as React from "react";
import { Provider } from "react-redux";
import { browserHistory, Router } from "react-router";
import { Store } from "redux";

interface AppProps {
  store: Store<any>;
  routes: any;
}
export default class App extends React.Component<AppProps, {}> {
  public shouldComponentUpdate() {
    return false;
  }
  public render() {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: "100%" }}>
          <Router history={browserHistory} children={this.props.routes} />
        </div>
      </Provider>
    );
  }
}
