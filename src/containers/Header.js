import { connect } from 'react-redux'
import actions from 'actions/'
import Header from 'components/Header'

const mapStateToProps = (state) => ({
  search: state.settings.search
})

export default connect((mapStateToProps), actions)(Header)
