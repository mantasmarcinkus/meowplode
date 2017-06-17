import { Action, Dispatch, Reducer } from "redux";
import "whatwg-fetch";
import { GameStart, Question, Result, SelectedOption, Submission } from "./models";

export const GAME_START = "GAME_START";
export const GAME_END = "GAME_END";
export const GAME_CLEAR = "GAME_CLEAR";
export const SUBMIT_OPTION = "SUBMIT_OPTION";

export const submitOption = (questionId: string, optionId: string) => {
  return {
    payload: { questionId, optionId },
    type: SUBMIT_OPTION,
  };
};

export const clearGame = () => ({ type: GAME_CLEAR });

export const startGame = (name: string) => {
  return (dispatch: Dispatch<any>) => {
    fetch(`api/game/start/?name=${name}`)
      .then(response => response.json())
      .then(questions => {
        fetch("http://api.giphy.com/v1/gifs/translate?s=cat&api_key=dc6zaTOxFJmzC")
          .then(response => response.json())
          .then(giphyObj =>
            dispatch({
              payload: {
                imageSource: giphyObj.data.images.fixed_height.url,
                name,
                questions,
              },
              type: GAME_START,
            }));
      });
  };
};

export const timeOut = () => {
  return (dispatch: Dispatch<any>) => {
    // It's quite simple. Fix this!
    fetch(`api/game/start/?name=${name}`)
      .then(response => response.json())
      .then(questions => {
        fetch("http://api.giphy.com/v1/gifs/translate?s=explosion&api_key=dc6zaTOxFJmzC")
          .then(response => response.json())
          .then(giphyObj =>
            dispatch({
              payload: {
                imageSource: giphyObj.data.images.fixed_height.url,
                success: false,
              },
              type: GAME_END,
            }));
      });
  };
};

export const endGame = (submitObject: Submission) => {
  return (dispatch: Dispatch<any>) => {
    fetch(`api/game/submit`,
      {
        body: JSON.stringify(submitObject),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
      .then(response => response.json())
      .then(result => {
        const query = result.success ? "happy%20cat" : "explosion";
        fetch(`http://api.giphy.com/v1/gifs/translate?s=${query}&api_key=dc6zaTOxFJmzC`)
          .then(response => response.json())
          .then(giphyObj =>
            dispatch({
              payload: {
                imageSource: giphyObj.data.images.fixed_height.url,
                success: result.success,
              },
              type: GAME_END,
            }));
      });
  };
};
export interface ActionCreators {
  startGame(name: string): (dispatch: Dispatch<any>) => void;
  submitOption(question: string, optionId: string): void;
  endGame(submitObject: Submission): (dispatch: Dispatch<any>) => void;
  timeOut(): (dispatch: Dispatch<any>) => void;
  clearGame(): void;
}
export const actions: ActionCreators = {
  clearGame,
  endGame,
  startGame,
  submitOption,
  timeOut,
};

const ACTION_HANDLERS = {
  [GAME_START]: (state: State, action: Action & { payload: GameStart }) => {
    const questions = action.payload.questions.slice(1);
    const lastQuestion = questions.length === 0;
    return {
      ...state,
      imageSource: action.payload.imageSource,
      lastQuestion,
      name: action.payload.name,
      question: action.payload.questions[0],
      questions,
      success: null,
    };
  },
  [SUBMIT_OPTION]: (state: State, action: Action & { payload: SelectedOption }) => {
    const question = state.questions ? state.questions[0] : null;
    const questions = state.questions ? state.questions.slice(1) : [];
    const lastQuestion = questions.length === 0;

    return {
      ...state,
      lastQuestion,
      providedResults: [
        ...(state.providedResults as SelectedOption[]),
        action.payload,
      ],
      question,
      questions,
    };
  },
  [GAME_END]: (state: State, action: Action & { payload: Result }) => {
    return {
      ...initialState,
      imageSource: action.payload.imageSource,
      name: state.name,
      success: action.payload.success,
    };
  },
  [GAME_CLEAR]: (state: State, action: Action) => {
    return {
      ...initialState,
    };
  },
} as any;

export interface DefinedState extends State {
  name: string;
  questions: Question[];
  question: Question;
  providedResults: SelectedOption[];
  success: boolean;
  imageSource: string;
  lastQuestion: boolean;
}
export interface State {
  name: string | null;
  questions: Question[] | null;
  question: Question | null;
  providedResults: SelectedOption[] | null;
  success: boolean | null;
  imageSource: string;
  lastQuestion: boolean | null;
}

const initialState: State = {
  imageSource: "",
  lastQuestion: null,
  name: null,
  providedResults: [],
  question: null,
  questions: null,
  success: null,
};

export default function reducer(state = initialState, action: Action): State {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
