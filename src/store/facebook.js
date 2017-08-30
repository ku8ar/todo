import { EDIT_FACEBOOK } from '../actionTypes'

const ACTION_HANDLERS = {
  [EDIT_FACEBOOK]: (state, action) =>
    ({ ...state, ...action.payload })
}

const initialState = {
  name: '',
  id: ''
}

export default function locationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
