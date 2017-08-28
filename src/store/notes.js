import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from '../actionTypes'
import uuid from 'uuid/v4'

const ACTION_HANDLERS = {
  [ADD_NOTE]: (state, action) =>
    [...state, {
      key: uuid(),
      listKey: action.payload,
      text: '',
      isDone: false
    }],
  [REMOVE_NOTE]: (state, action) =>
    state.filter(note => note.key !== action.payload),
  [EDIT_NOTE]: (state, action) =>
    state.map(note => note.key === action.payload.noteKey
      ? { ...note, [action.payload.key]: action.payload.value }
      : note)
}

const initialState = [
]

export default function locationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
