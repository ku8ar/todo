import { connect } from 'react-redux'
import actions from '../actions/'
import SettingsMenu from 'components/SettingsMenu'

const mapStateToProps = (state) => ({
  isDialog: state.settings.isDialog,
  isGrid: state.settings.isGrid,
  gridCols: state.settings.gridCols,
  gridRowHeight: state.settings.gridRowHeight
})

export default connect((mapStateToProps), actions)(SettingsMenu)
