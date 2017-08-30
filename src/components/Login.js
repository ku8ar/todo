import React, { PropTypes, Component } from 'react'
import './Login.scss'

export default class extends Component {
  static propTypes = {
    name: PropTypes.string,
    loginUser: PropTypes.func
  }
  handleFacebookLogin = () =>
    this.props.loginUser('facebook')
  handleGuestLogin = () =>
    this.props.loginUser()
  render () {
    return (
      <div className='login'>
        <div>
          <h1>TODO App</h1>
          <div>
            <div className='pt-card pt-elevation-0 pt-interactive' onClick={this.handleFacebookLogin}>
              <div className='fb-logo' />
            </div>
            <div className='pt-card pt-elevation-1 pt-interactive' onClick={this.handleGuestLogin}>
              <span>Guest</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
