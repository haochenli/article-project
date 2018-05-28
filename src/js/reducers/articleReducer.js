import { UPDATE_ARTICLE, ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from "../constants/action-types";

const articleReducer = (articles = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...articles, action.payload];
    case DELETE_ARTICLE:
      return deleteActicle(articles, action.id);
    case UPDATE_ARTICLE:
      return updateArticle(articles, action.newArticle)
    default:
      return articles;
  }
};

function updateArticle (articles, newArticle) {
  return articles.map(item => {
    if(item.id === newArticle.id){
      return newArticle
    } else return item
  })
}

function deleteActicle (articles, id) {
  debugger
  return articles.filter(item => item.id !== id)
};


export default articleReducer;
