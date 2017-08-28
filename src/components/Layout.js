import React, { PropTypes, Component } from 'react'
import './Layout.scss'

const DEF_BG_NAME = 'bg.jpg'

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.any,
    background: PropTypes.string
  }
  render () {
    const { children, background } = this.props
    return (
      <div className={'layout'} style={{ backgroundImage: `url(${background || DEF_BG_NAME})` }}>
        {children}
      </div>
    )
  }
}
