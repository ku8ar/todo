import React, { PropTypes, Component } from 'react'
import { withRouter } from 'react-router'
import actions from 'actions/'
import { connect } from 'react-redux'
import './HomeView.scss'
import Grid from 'react-gridbox'
import List from 'components/List'
import Note from 'components/Note'
import GridOverlay from 'containers/GridOverlay'

const ITEM_STYLE = {
  height: '100%',
  width: '100%',
  border: '1px solid black'
}

export class HomeView extends Component {
  static propTypes = {
    gridCols: PropTypes.number,
    gridRowHeight: PropTypes.number,
    lists: PropTypes.array,
    notes: PropTypes.array,
    search: PropTypes.string,
    editGrid: PropTypes.func,
    addList: PropTypes.func
  }
  handleGridChange = (lists) =>
    this.props.editGrid(lists)
  render () {
    const { lists, notes, gridCols, gridRowHeight, ...props } = this.props
    console.log('HomeView')
    return (
      <GridOverlay>
        <Grid layout={lists} onChange={this.handleGridChange} cols={gridCols} rowHeight={gridRowHeight}>
          {lists.map(list =>
            <List key={list.key} listKey={list.key} style={ITEM_STYLE}
              {...list} {...props}>
              {notes.filter(note => note.listKey === list.key).map(note =>
                <Note key={note.key} noteKey={note.key} {...note} {...props} />
              )}
            </List>
          )}
        </Grid>
      </GridOverlay>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  lists: state.lists,
  notes: state.notes,
  gridCols: state.settings.gridCols,
  gridRowHeight: state.settings.gridRowHeight
})
export default withRouter(connect((mapStateToProps), actions)(HomeView))
