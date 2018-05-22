import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import textReducer from "./inputTextReducer";

export default combineReducers({ 
  articles: articleReducer, 
  content: inputTextReducer
});
