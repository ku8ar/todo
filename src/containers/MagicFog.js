import { connect } from 'react-redux'
import actions from '../actions/'
import MagicFog from 'components/MagicFog'

const mapStateToProps = (state) => ({
  search: state.settings.search
})

export default connect((mapStateToProps), actions)(MagicFog)
