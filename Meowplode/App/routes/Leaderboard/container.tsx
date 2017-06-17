import * as React from "react";
import { connect } from "react-redux";
import Leaderboard, { Props } from "./components/Leaderboard";
import { getLeaderboard, State } from "./module";

class Container extends React.Component<Props, {}> {
  public render() { return <Leaderboard {...this.props} />; }
  public componentWillMount() {
    if (this.props.getLeaderboard) {
      this.props.getLeaderboard();
    }
  }
}

const mapStateToProps = ({ leaderboard: { players } }: { leaderboard: State }, { name }: { name: string }) => {
  return {
    name,
    players,
  };
};

const mapDispatchToProps = {
  getLeaderboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container as any);
