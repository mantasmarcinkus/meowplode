import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";
import { Submission } from "../../models";
import Game from "../Game";

jest.mock("../../../Leaderboard/container");

// as any. good for injection, bad for testing, should be filled though
const testProps: any = {
  imageSource: "image",
  lastQuestion: false,
  name: "text",
  providedResults: [],
  question: { id: "1", value: "val", options: [] },
  questions: [],
  success: null,
};

describe("<Game />", () => {
  let wrapper: ShallowWrapper<any, any>;
  beforeEach(() => {
    wrapper = shallow(<Game {...testProps} />);
  });
  it("renders full", () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
  it("renders Loading...", () => {
    wrapper = shallow(<Game {...testProps} questions={null} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
  it("renders Loading...", () => {
    wrapper = shallow(<Game {...testProps} questions={null} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
  it("renders EndGame...", () => {
    wrapper = shallow(<Game {...testProps} success={true} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
