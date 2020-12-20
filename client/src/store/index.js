import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { questionReducer } from "./reducres/question";
import { favouriteReducer } from "./reducres/favourites";

const reducer = combineReducers({
  question: questionReducer,
  favourite: favouriteReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
