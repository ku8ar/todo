import { EDIT_FACEBOOK } from '../actionTypes'
import FacebookConnector from 'utils/FacebookConnector'

const editFacebook = (data) => ({
  type: EDIT_FACEBOOK,
  payload: data
})

const loginFacebook = () =>
  async (dispatch, getState) => {
    try {
      const connector = await FacebookConnector.getInstance().login()
      const result = await connector.fetchMe()
      dispatch(editFacebook(result))
    } catch (e) {
      console.log(e)
    }
  }

const logoutFacebook = () => ({
  type: EDIT_FACEBOOK,
  payload: { name: '', id: '' }
})

export default {
  loginFacebook,
  logoutFacebook
}
