import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from "../constants/action-types";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    case DELETE_ARTICLE:
      let resutlt = deleteActicle(state, action.id);
      return result
    case EDIT_ARTICLE:
    //  let result = editArticle(state, action);
    //  console.log('result is', result)
     console.log('action is', action)
     return [...state, {selectedArticle: action.article}]
    default:
      return state;
  }
};

function deleteActicle (state, id) {
  return state.filter(item => item.id !== id)
};

function editArticle (state, action) {
  let result = state.map(item => {
    if(item.id === action.article.id) {
      return {
        id: action.article.id,
        title: action.article.title
      }
    }
    return item
  })
  return result
};

export default articleReducer;
