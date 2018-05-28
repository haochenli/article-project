import { EDIT_ARTICLE, UPDATE_ARTICLE } from "../constants/action-types";

const selectedReducer = (selectedArticle={}, action) => {
  switch (action.type) {
    case EDIT_ARTICLE:
      return action.article;
    case UPDATE_ARTICLE:
      return {}
    default: return selectedArticle
  }
};

export default selectedReducer;
