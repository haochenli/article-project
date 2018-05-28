import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import inputTextReducer from "./inputTextReducer";
import modeReducer from "./modeReducer"
import selectedReducer from './selectedReducer'

export default combineReducers({ 
  articles: articleReducer, 
  content: inputTextReducer,
  mode: modeReducer,
  selectedArticle: selectedReducer
});
