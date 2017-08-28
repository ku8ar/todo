import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import './GridOverlay.scss'

export default class GridOverlay extends Component {
  static propTypes = {
    gridCols: PropTypes.number,
    gridRowHeight: PropTypes.number,
    children: PropTypes.any,
    addList: PropTypes.func,
    isGrid: PropTypes.bool
  }
  handleAddList = (e) =>
    this.props.addList({
      x: ~~(e.clientX / window.innerWidth * this.props.gridCols),
      y: ~~((e.clientY - ReactDOM.findDOMNode(this).getBoundingClientRect().top) / this.props.gridRowHeight)
    })
  render () {
    const { children, gridCols, gridRowHeight, isGrid } = this.props
    const style = isGrid ? { // @TODO: slow!!!!
      backgroundSize: `${window.innerWidth / gridCols}px ${gridRowHeight}px`
    } : {}
    return (
      <div style={style} className={cn('grid-overlay', { 'show-borders': isGrid })}
        onDoubleClick={this.handleAddList}>
        {children}
      </div>
    )
  }
}
