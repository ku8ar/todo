import React, { PropTypes, Component } from 'react'
import './MagicFog.scss'
import cn from 'classnames'

export default class MagicFog extends Component {
  static propTypes = {
    search: PropTypes.string
  }
  getText = () => {
    const { search } = this.props
    switch (true) {
      case !!search: return `Search results for "${search}"...`
      default: return ''
    }
  }
  render () {
    const text = this.getText()
    return (
      <div className={cn('fog', { 'wake-up': !!text })}>
        <span className='help-text'>{text}</span>
      </div>
    )
  }
}
