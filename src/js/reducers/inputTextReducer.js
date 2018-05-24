import { INPUT_ONCHANGE, EDIT_ARTICLE } from "../constants/action-types";

const inputTextReducer = (content = '', action) => {
  switch(action.type) {
    case INPUT_ONCHANGE:
      return action.content
    case EDIT_ARTICLE:
      return action.article.title
    default:
      return ''
  }
}

export default inputTextReducer;