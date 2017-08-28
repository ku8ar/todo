import { connect } from 'react-redux'
import actions from '../actions/'
import Layout from 'components/Layout'

const mapStateToProps = (state) => ({
  background: state.settings.background
})

export default connect((mapStateToProps), actions)(Layout)
