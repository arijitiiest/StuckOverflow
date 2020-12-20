import {
  ADD_FAVOURITE,
  FETCH_FAVOURITE,
  REMOVE_FAVOURITE,
} from "../contants/favourites";
import axois from "axios";

export const fetchFavourites = () => async (dispatch) => {
  try {
    const { data } = await axois.get("/api/sessions");

    dispatch({ type: FETCH_FAVOURITE, payload: data.favourites });
  } catch (err) {
    console.log(err);
  }
};

export const addFavourite = (question_id) => async (dispatch) => {
  try {
    await axois.post("/api/sessions", { question_id });

    dispatch({ type: ADD_FAVOURITE, payload: question_id });
  } catch (err) {
    console.log(err);
  }
};

export const removeFavourite = (question_id) => async (dispatch) => {
  try {
    await axois.delete("/api/sessions", {
      data: {
        question_id,
      },
    });

    dispatch({ type: REMOVE_FAVOURITE, payload: question_id });
  } catch (err) {
    console.log(err);
  }
};
