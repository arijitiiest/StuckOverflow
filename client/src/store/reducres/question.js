import {
  FETCH_QUESTIONS,
  ADD_QUESTIONS,
  LOADING_FALSE,
  LOADING_TRUE,
} from "../contants/question";

const initialState = {
  questions: [],
  current_page: 1,
  isLoading: false,
  hasMore: true,
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TRUE:
      return { ...state, isLoading: true };
    case LOADING_FALSE:
      return { ...state, isLoading: false };
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    case ADD_QUESTIONS:
      return {
        ...state,
        questions: [...state.questions, ...action.payload.questions],
        current_page: state.current_page + 1,
        hasMore: action.payload.has_more
      };
    default:
      return state;
  }
};
