import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  INPUT_ONCHANGE,
  UPDATE_ARTICLE,
  EDIT_ARTICLE
} from '../constants/action-types'

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});

export const deleteArticle = articleId => ({
  type: DELETE_ARTICLE,
  id: articleId
})

export const inputOnchange = content => ({
  type: INPUT_ONCHANGE,
  content: content
})

export const updateArticle = newArticle => ({
  type: UPDATE_ARTICLE,
  newArticle: newArticle
})

export const editArticle = article => ({
  type: EDIT_ARTICLE,
  article: article
})