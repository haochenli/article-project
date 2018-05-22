export const addArticle = article => ({
  type: "ADD_ARTICLE",
  payload: article
});

export const deleteArticle = articleId => ({
  type: "DELETE_ARTICLE",
  id: articleId
})

export const inputOnchange = content => ({
  type: "INPUT_ONCHANGE",
  content: content
})