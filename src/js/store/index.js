import { createStore } from "redux";
import combineReducers from "../reducers/index";
import reduxMiddlewares from '../reduxMiddlewares';

const store = createStore(
  combineReducers,
  {},
  reduxMiddlewares
);

export default store;
