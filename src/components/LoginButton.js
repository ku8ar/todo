import React, { Component, PropTypes } from 'react'
import { Menu, MenuItem, Popover, Position } from '@blueprintjs/core'
import cn from 'classnames'
import './LoginButton.scss'

export default class extends Component {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    isLogged: PropTypes.bool,
    logoutUser: PropTypes.func
  }
  render () {
    const { logoutUser, name, id } = this.props
    return (
      <Popover content={(
        <Menu>
          <MenuItem iconName='pt-icon-log-out' text='Logout' onClick={logoutUser} />
        </Menu>
      )} position={Position.BOTTOM_LEFT}>
        <button className={cn('pt-button pt-minimal', { 'pt-icon-user': !name })} type='button'>
          {name && <img className='avatar' src={`https://graph.facebook.com/${id}/picture`} />}
          {name || 'Guest'}
        </button>
      </Popover>
    )
  }
}
