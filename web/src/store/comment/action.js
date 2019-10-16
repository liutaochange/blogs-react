import { GET_COMMENTS, COMMENT_ADD } from '../actionType'
export const commentAddAction = data => ({
  type: COMMENT_ADD,
  data
})
export const getCommentsAction = data => ({
  type: GET_COMMENTS,
  data
})
