import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";
import { Dispatch } from "redux";
import EndGame from "../EndGame";

jest.mock("../../../Leaderboard/container");

let startGameResult: string = "";
let clearGameResult: boolean = false;

const testProps = {
  clearGame: () => { clearGameResult = true; },
  name: "text",
  router: [] as string[],
  startGame: (name: string) => (dispatch: Dispatch<any>) => { startGameResult = name; },
  success: true,
};

describe("<EndGame />", () => {
  let wrapper: ShallowWrapper<any, any>;
  beforeEach(() => {
    wrapper = shallow(<EndGame {...testProps} />);
  });
  it("renders", () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
  it("onRetryClick calls startGame", () => {
    (wrapper.instance() as any).onRetryClick();
    expect(startGameResult).toEqual("");
  });
  it("onRetryClick calls clear game", () => {
    (wrapper.instance() as any).onNewPlayerClick();
    expect(clearGameResult).toEqual(true);
  });
});
