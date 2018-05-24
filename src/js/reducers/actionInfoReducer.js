import { EDIT_ARTICLE } from "../constants/action-types";

const actionInfoReducer = (actionType='', action) => {
  console.log('In reducer', action)
  switch (action.type) {
    case EDIT_ARTICLE:
      return action
    default:
      return action;
  }
};

export default actionInfoReducer;
