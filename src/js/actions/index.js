export const addArticle = article => ({
  type: "ADD_ARTICLE",
  payload: article
});

export const deleteArticle = articleId => ({
  type: "DELETE_ARTICLE",
  id: articleId
})

export const editArticle = (article) => ({
  type: "EDIT_ARTICLE",
  article: article 
})