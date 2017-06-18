import Reducer, { GAME_CLEAR, GAME_END, GAME_START, initialState, SUBMIT_OPTION } from "../module";

const gameStartPayload = {
  imageSource: "image",
  name: "text",
  questions: [
    { id: "1" },
    { id: "2" },
  ],
};
const gameEndPayload = {
  imageSource: "image",
  name: "text",
  success: false,
};
const submitOptionState = {
  imageSource: "image",
  lastQuestion: false,
  name: "text",
  providedResults: [],
  question: {
    id: "2", options: [{ id: "3", value: "value" }], value: "value",
  },
  questions: [
    { id: "1", value: "value", options: [{ id: "2", value: "value" }] },
  ],
  success: false,
};
describe("Game Reducer", () => {
  it("GAME_START", () => {
    const result = Reducer(initialState, { type: GAME_START, payload: gameStartPayload });
    expect(result).toEqual({
      imageSource: "image",
      lastQuestion: false,
      name: "text",
      providedResults: [],
      question: {
        id: "1",
      },
      questions: [
        { id: "2" },
      ],
      success: null,
    });
  });
  it("renders with name and players", () => {
    const result = Reducer(submitOptionState, { type: SUBMIT_OPTION, payload: gameStartPayload });
    expect(result).toEqual({
      imageSource: "image",
      lastQuestion: true,
      name: "text",
      providedResults: [
        {
          imageSource: "image",
          name: "text",
          questions: [
            {
              id: "1",
            },
            {
              id: "2",
            },
          ],
        },
      ],
      question: {
        id: "1",
        options: [
          {
            id: "2",
            value: "value",
          },
        ],
        value: "value",
      },
      questions: [

      ],
      success: false,
    });
  });
  it("GAME_END", () => {
    const result = Reducer({ ...initialState, name: "text"}, { type: GAME_END, payload: gameEndPayload });
    expect(result).toEqual({
      imageSource: "image",
      lastQuestion: null,
      name: "text",
      providedResults: [],
      question: null,
      questions: null,
      success: false,
    });
  });
  it("GAME_CLEAR", () => {
    const result = Reducer(initialState, { type: GAME_CLEAR, payload: {} });
    expect(result).toEqual(initialState);
  });
});
