import { combineReducers } from 'redux'
import locationReducer from './location'
import lists from './lists'
import notes from './notes'
import settings from './settings'
import { RELOAD_STORE } from 'actionTypes'

export const createRootReducer = asyncReducers => {
  const appReducer = combineReducers({
    location: locationReducer,
    lists,
    notes,
    settings,
    ...asyncReducers
  })
  return (state, action) => {
    if (action.type === RELOAD_STORE) {
      state = action.payload
    }
    return appReducer(state, action)
  }
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
  store.asyncReducers[key] = reducer
  store.replaceReducer(createRootReducer(store.asyncReducers))
}

export default createRootReducer