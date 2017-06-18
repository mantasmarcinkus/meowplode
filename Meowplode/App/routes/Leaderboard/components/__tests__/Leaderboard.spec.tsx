import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";
import Leaderboard from "../Leaderboard";

jest.mock("../ImageLoader");

const testProps = {
  name: "text",
  players: [
    { dateCreated: "date1", result: true, successfullyAnswered: 10, name: "text" },
    { dateCreated: "date2", result: false, successfullyAnswered: 7, name: "text2" },
  ],
};
describe("<Leaderboard />", () => {
  let wrapper: ShallowWrapper<any, any>;
  beforeEach(() => {
    wrapper = shallow(<Leaderboard name="text"/>);
  });
  it("renders with name only", () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
  it("renders with name and players", () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
});
