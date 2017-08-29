import { connect } from 'react-redux'
import actions from '../actions/'
import SearchFog from 'components/SearchFog'

const mapStateToProps = (state) => ({
  search: state.settings.search
})

export default connect((mapStateToProps), actions)(SearchFog)
