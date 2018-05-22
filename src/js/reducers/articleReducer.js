import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";

const articleReducer = (articles = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...articles, action.payload];
    case DELETE_ARTICLE:
      let result = deleteActicle(articles, action.id);
      return result;
    default:
      return articles;
  }
};

function deleteActicle (articles, id) {
  return articles.filter(item => item.id !== id)
};


export default articleReducer;
