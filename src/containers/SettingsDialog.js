import { connect } from 'react-redux'
import actions from '../actions/'
import SettingsDialog from 'components/SettingsDialog'

const mapStateToProps = (state) => ({
  isDialog: state.settings.isDialog,
  isGrid: state.settings.isGrid
})

export default connect((mapStateToProps), actions)(SettingsDialog)
