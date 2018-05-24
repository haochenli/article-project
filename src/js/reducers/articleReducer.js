import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from "../constants/action-types";

const articleReducer = (articles = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...articles, action.payload];
    case DELETE_ARTICLE:
      return deleteActicle(articles, action.id);
    case EDIT_ARTICLE:
    console.log(action)
     let result = deleteActicle(articles, action.article.id);
     console.log(result)
     return result
    default:
      return articles;
  }
};

function deleteActicle (articles, id) {
  return articles.filter(item => item.id !== id)
};


export default articleReducer;
