import {
  FETCH_QUESTIONS,
  ADD_QUESTIONS,
  LOADING_FALSE,
  LOADING_TRUE,
} from "../contants/question";
import axois from "axios";

export const fetchQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });

    const { data } = await axois.get("/api/questions");

    dispatch({
      type: FETCH_QUESTIONS,
      payload: data.questions,
    });

    dispatch({ type: LOADING_FALSE });
  } catch (err) {
    console.log(err);
  }
};

export const addQuestions = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const current_page = getState().question.current_page;

    const { data } = await axois.get(`/api/questions/?page=${current_page + 1}`);

    dispatch({
      type: ADD_QUESTIONS,
      payload: data,
    });

    dispatch({ type: LOADING_FALSE });
  } catch (err) {
    console.log(err);
  }
};
