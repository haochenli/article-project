import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import inputTextReducer from "./inputTextReducer";
import actionInfoReducer from "./actionInfoReducer"

export default combineReducers({ 
  articles: articleReducer, 
  content: inputTextReducer,
  action: actionInfoReducer
});
