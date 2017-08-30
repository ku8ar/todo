import { EDIT_USER } from '../actionTypes'

const ACTION_HANDLERS = {
  [EDIT_USER]: (state, action) =>
    ({ ...state, ...action.payload })
}

const initialState = {
  name: '',
  id: '',
  isLogged: false
}

export default function locationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
