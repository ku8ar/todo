import { EDIT_SETTINGS } from '../actionTypes'

const ACTION_HANDLERS = {
  [EDIT_SETTINGS]: (state, action) =>
    ({ ...state, [action.payload.key]: action.payload.value })
}

const initialState = {
  gridCols: 100,
  gridRowHeight: 10,
  search: '',
  isDialog: false,
  background: '',
  isGrid: false
}

export default function locationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
