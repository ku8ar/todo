import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import GridBox from 'react-gridbox'
import cn from 'classnames'
import List from 'components/List'
import Note from 'components/Note'
import './Grid.scss'

export default class extends Component {
  static propTypes = {
    gridCols: PropTypes.number,
    gridRowHeight: PropTypes.number,
    addList: PropTypes.func,
    isGrid: PropTypes.bool,
    lists: PropTypes.array,
    notes: PropTypes.array,
    search: PropTypes.string,
    editGrid: PropTypes.func
  }
  handleAddList = (e) =>
    this.props.addList({
      x: ~~(e.clientX / window.innerWidth * this.props.gridCols),
      y: ~~((e.clientY - ReactDOM.findDOMNode(this).getBoundingClientRect().top) / this.props.gridRowHeight),
      w: ~~(this.props.gridCols / 4), // 1/4 grid
      h: ~~(window.innerHeight / 3 / this.props.gridRowHeight) // 1/3 grid
    })
  handleGridChange = (lists) =>
    this.props.editGrid(lists)
  render () {
    const { lists, notes, gridCols, gridRowHeight, isGrid, ...props } = this.props
    const style = isGrid ? { // @TODO: slow!!!!
      backgroundSize: `${window.innerWidth / gridCols}px ${gridRowHeight}px`
    } : {}
    return (
      <div style={style} className={cn('grid-overlay', { 'show-borders': isGrid })}
        onDoubleClick={this.handleAddList}>
        <GridBox layout={lists} onChange={this.handleGridChange}
          cols={gridCols} rowHeight={gridRowHeight} resizeClassName='resize-corner'>
          {lists.map(list =>
            <List key={list.key} listKey={list.key} style={'list-item-style'}
              {...list} {...props}>
              {notes.filter(note => note.listKey === list.key).map(note =>
                <Note key={note.key} noteKey={note.key} {...note} {...props} />
              )}
            </List>
          )}
        </GridBox>
      </div>
    )
  }
}
