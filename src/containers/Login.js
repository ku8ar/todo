import { connect } from 'react-redux'
import actions from 'actions/'
import Login from 'components/Login'

const mapStateToProps = (state) => ({
  name: state.user.name
})

export default connect((mapStateToProps), actions)(Login)
