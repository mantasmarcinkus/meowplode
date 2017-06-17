import { connect } from "react-redux";
import Game from "./components/Game";
import { clearGame, endGame, startGame, submitOption, timeOut } from "./module";
import { State } from "./module";

const mapStateToProps = ({
    game: {
      questions,
      question,
      name,
      providedResults,
      success,
      imageSource,
      lastQuestion,
    },
  }: { game: State }) => {
  return {
    imageSource,
    lastQuestion,
    name,
    providedResults,
    question,
    success,
  };
};

const mapDispatchToProps = {
  clearGame,
  endGame,
  startGame,
  submitOption,
  timeOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
