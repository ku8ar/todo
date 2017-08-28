import { ADD_LIST, REMOVE_LIST, EDIT_LIST, EDIT_GRID } from '../actionTypes'

const addList = (list) => ({
  type: ADD_LIST,
  payload: list
})

const removeList = (listKey) => ({
  type: REMOVE_LIST,
  payload: listKey
})

const editList = (listKey, key, value) => ({
  type: EDIT_LIST,
  payload: { listKey, key, value }
})

const editGrid = (lists) => ({
  type: EDIT_GRID,
  payload: lists
})

export default {
  addList,
  removeList,
  editList,
  editGrid
}
