import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import inputTextReducer from "./inputTextReducer";

export default combineReducers({ 
  articles: articleReducer, 
  content: inputTextReducer
});
