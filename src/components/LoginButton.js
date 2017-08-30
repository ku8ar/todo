import React, { Component, PropTypes } from 'react'
import { Menu, MenuItem, Popover, Position } from '@blueprintjs/core'
import cn from 'classnames'
import './LoginButton.scss'

export default class extends Component {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    loginFacebook: PropTypes.func,
    logoutFacebook: PropTypes.func
  }
  render () {
    const { loginFacebook, logoutFacebook, name, id } = this.props
    return (
      <Popover content={(
        <Menu>
          <MenuItem iconName='pt-icon-log-in' text='Login' onClick={loginFacebook} disabled={name} />
          <MenuItem iconName='pt-icon-log-out' text='Logout' onClick={logoutFacebook} disabled={!name} />
        </Menu>
      )} position={Position.BOTTOM_LEFT}>
        <button className={cn('pt-button pt-minimal', { 'pt-icon-user': !name })} type='button'>
          {name && <img className='avatar' src={`https://graph.facebook.com/${id}/picture`} />}
          {name || 'Login'}
        </button>
      </Popover>
    )
  }
}
