import { connect } from 'react-redux'
import actions from 'actions/'
import GridOverlay from 'components/GridOverlay'

const mapStateToProps = (state) => ({
  isGrid: state.settings.isGrid,
  gridCols: state.settings.gridCols,
  gridRowHeight: state.settings.gridRowHeight
})

export default connect((mapStateToProps), actions)(GridOverlay)
