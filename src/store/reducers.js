import { combineReducers } from 'redux'
import locationReducer from './location'
import lists from './lists'
import notes from './notes'
import settings from './settings'
import user from './user'
import { RELOAD_STORE } from 'actionTypes'

export const createRootReducer = asyncReducers => {
  const appReducer = combineReducers({
    location: locationReducer,
    lists,
    notes,
    settings,
    user,
    ...asyncReducers
  })
  return (state, action) => {
    // special func to reload entire store. Must be in root reducer.
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
