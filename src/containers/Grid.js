import { connect } from 'react-redux'
import actions from 'actions/'
import Grid from 'components/Grid'

const mapStateToProps = (state) => ({
  lists: state.lists,
  notes: state.notes,
  isGrid: state.settings.isGrid,
  gridCols: state.settings.gridCols,
  gridRowHeight: state.settings.gridRowHeight
})

export default connect((mapStateToProps), actions)(Grid)
