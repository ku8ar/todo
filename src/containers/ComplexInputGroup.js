import { connect } from 'react-redux'
import actions from '../actions/'
import ComplexInputGroup from 'components/ComplexInputGroup'

const mapStateToProps = (state) => ({
  search: state.settings.search
})

export default connect((mapStateToProps), actions)(ComplexInputGroup)
