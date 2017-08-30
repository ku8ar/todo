import { OAuth } from 'oauthio-web'

const PUBLIC_KEY = '7K2VEvGvev8x_5DXL8kE12nonos'

/**
 * i can singleton xDDD
 */
export default class FacebookConnector {
  static instance = null
  static getInstance = () => {
    if (!FacebookConnector.instance) {
      FacebookConnector.instance = new FacebookConnector()
    }
    return FacebookConnector.instance
  }
  connection = null
  constructor () {
    OAuth.initialize(PUBLIC_KEY)
  }
  login = () =>
    new Promise((resolve, reject) =>
      OAuth.popup('facebook')
      .done((result) => {
        this.connection = result
        return resolve(this)
      })
      .fail(reject)
    )
  fetchMe = () =>
    new Promise((resolve, reject) =>
      this.connection.get('/me')
      .done(resolve)
      .fail(reject)
    )
}
