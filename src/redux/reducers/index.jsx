import { combineReducers } from "redux";
import { articleReducers } from "./articleReducers";

const rootReducer = combineReducers({
  article: articleReducers
})

export default rootReducer;