import { EDIT_ARTICLE, ADD_ARTICLE, UPDATE_ARTICLE } from "../constants/action-types";

const modeReducer = (mode = ADD_ARTICLE, action) => {
  switch (action.type) {
    case EDIT_ARTICLE:
      return EDIT_ARTICLE;
    case ADD_ARTICLE:
      return ADD_ARTICLE;
    case UPDATE_ARTICLE:
      return ADD_ARTICLE;
    default: return mode
  }
};

export default modeReducer;
