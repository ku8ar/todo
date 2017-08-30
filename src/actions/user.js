import { EDIT_USER, RELOAD_STORE } from '../actionTypes'
import FacebookConnector from 'utils/FacebookConnector'

const editUser = (data) => ({
  type: EDIT_USER,
  payload: data
})

// @TODO: clean
const loginUser = (type) =>
  async (dispatch, getState) => {
    switch (type) {
      case 'facebook': {
        try {
          const connector = await FacebookConnector.getInstance().login()
          const result = await connector.fetchMe()
          dispatch(editUser({ ...result, isLogged: true }))
        } catch (e) {
          console.log(e)
        }
        break
      }
      default: dispatch(editUser({ isLogged: true }))
    }
  }

// @TODO: clean
const logoutUser = () =>
  (dispatch, getState) => {
    dispatch({
      type: EDIT_USER,
      payload: { name: '', id: '', isLogged: false }
    })
    dispatch({
      type: RELOAD_STORE,
      payload: undefined // @FIXME: redux hack to clear store
    })
  }

export default {
  loginUser,
  logoutUser
}
