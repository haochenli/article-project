import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from "../constants/action-types";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    case DELETE_ARTICLE:
      let result = deleteActicle(state, action.id);
      return result
    default:
      return state;
  }
};

function deleteActicle (state, id) {
  return state.filter(item => item.id !== id)
};


export default articleReducer;
