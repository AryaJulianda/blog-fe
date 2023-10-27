import { combineReducers } from "redux";
import { articleReducers } from "./articleReducers";
import { authReducers } from "./authReducers";

const rootReducer = combineReducers({
  article: articleReducers,
  auth: authReducers
})

export default rootReducer;