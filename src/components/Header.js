import React, { Component, PropTypes } from 'react'
import LoginButton from 'containers/LoginButton'
import './Header.scss'

export default class Header extends Component {
  static propTypes = {
    search: PropTypes.string,
    editSettings: PropTypes.func
  }
  handleSearchChange = (e) =>
    this.props.editSettings('search', e.target.value)
  handleOpenSettings = () =>
    this.props.editSettings('isDialog', true)
  render () {
    const { search } = this.props
    return (
      <nav className='pt-navbar pt-dark'>
        <div className='pt-navbar-group pt-align-left'>
          <div className='pt-navbar-heading'>TODO</div>
          <div className='pt-input-group'>
            <span className='pt-icon pt-icon-search' />
            <input className='pt-input' type='search'
              placeholder='Search...' dir='auto'
              value={search} onChange={this.handleSearchChange} />
          </div>
        </div>
        <div className='pt-navbar-group pt-align-right'>
          <LoginButton />
          <span className='pt-navbar-divider' />
          <button className='pt-button pt-minimal pt-icon-cog' onClick={this.handleOpenSettings} />
        </div>
      </nav>
    )
  }
}
