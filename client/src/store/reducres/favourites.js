import {
  ADD_FAVOURITE,
  FETCH_FAVOURITE,
  REMOVE_FAVOURITE,
} from "../contants/favourites";

const initialState = {
  favourites: [],
};

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAVOURITE:
      return { ...state, favourites: action.payload };
    case ADD_FAVOURITE:
      return { ...state, favourites: [...state.favourites, action.payload.toString()] };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((fav) => fav.toString() !== action.payload.toString()),
      };
    default:
      return state;
  }
};
