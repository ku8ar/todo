import React, { PropTypes, Component } from 'react'
import cn from 'classnames'
import searcher from 'utils/searcher'
import './ComplexInputGroup.scss'

export default class ComplexInputGroup extends Component {
  static propTypes = {
    children: PropTypes.any,
    search: PropTypes.string,
    text: PropTypes.string
  }
  render () {
    const { children, search, text } = this.props
    const isTop = !!search && searcher(search, text)
    return (
      <div className={cn('pt-input-group pt-large group', { 'top': isTop })}>
        {children}
      </div>
    )
  }
}
