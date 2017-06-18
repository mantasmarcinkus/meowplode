import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";
import Question from "../Question";

jest.mock("../../../Leaderboard/container");

// as any. good for injection, bad for testing, should be filled though
const testProps: any = {
  imageSource: "image",
  lastQuestion: false,
  name: "text",
  providedResults: [],
  question: {
    id: "1",
    options: [
      { id: "2", value: "opt1" },
      { id: "3", value: "opt2" },
    ],
    value: "val",
  },
};

describe("<Question />", () => {
  let wrapper: ShallowWrapper<any, any>;
  beforeEach(() => {
    wrapper = shallow(<Question {...testProps} />);
  });
  it("renders", () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
});
