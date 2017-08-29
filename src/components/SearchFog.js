import React, { PropTypes, Component } from 'react'
import './SearchFog.scss'
import cn from 'classnames'

export default class extends Component {
  static propTypes = {
    search: PropTypes.string
  }
  render () {
    const { search } = this.props
    return (
      <div className={cn('fog', { 'wake-up': !!search })}
        onDrop={this.handleDrop}>
        {search && (
          <span className='help-text'>
            Search results for "{search}"...
          </span>
        )}
      </div>
    )
  }
}
