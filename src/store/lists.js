import { ADD_LIST, REMOVE_LIST, EDIT_LIST, EDIT_GRID } from '../actionTypes'
import uuid from 'uuid/v4'

const ACTION_HANDLERS = {
  [ADD_LIST]: (state, action) => {
    return [...state, {
      key: uuid(),
      x: 1,
      y: 1,
      w: 20,
      h: 20,
      text: '',
      ...action.payload
    }]
  },
  [REMOVE_LIST]: (state, action) =>
    state.filter(list => list.key !== action.payload),
  [EDIT_LIST]: (state, action) =>
    state.map(list => list.key === action.payload.listKey
      ? { ...list, [action.payload.key]: action.payload.value }
      : list),
  [EDIT_GRID]: (state, action) =>
    action.payload
}

const initialState = [
]

export default function locationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
