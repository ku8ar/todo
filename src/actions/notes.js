import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from '../actionTypes'

const addNote = (listKey) => ({
  type: ADD_NOTE,
  payload: listKey
})

const removeNote = (noteKey) => ({
  type: REMOVE_NOTE,
  payload: noteKey
})

const editNote = (noteKey, key, value) => ({
  type: EDIT_NOTE,
  payload: { noteKey, key, value }
})

export default {
  addNote,
  removeNote,
  editNote
}
