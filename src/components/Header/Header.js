import React, { Component, PropTypes } from 'react'
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
          <input className='pt-input' placeholder='Search...' type='text'
            value={search} onChange={this.handleSearchChange} />
        </div>
        <div className='pt-navbar-group pt-align-right'>
          <span className='pt-navbar-divider' />
          <button className='pt-button pt-minimal pt-icon-cog' onClick={this.handleOpenSettings} />
        </div>
      </nav>
    )
  }
}
