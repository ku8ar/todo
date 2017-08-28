import React, { PropTypes, Component } from 'react'
import './MagicFog.scss'
import cn from 'classnames'

export default class MagicFog extends Component {
  static propTypes = {
    search: PropTypes.string
  }
  render () {
    const { search } = this.props
    const isMuggy = !!search
    return (
      <div className={cn('fog', { 'wake-up': isMuggy })} />
    )
  }
}
