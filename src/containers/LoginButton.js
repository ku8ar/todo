import { connect } from 'react-redux'
import actions from 'actions/'
import LoginButton from 'components/LoginButton'

const mapStateToProps = (state) => ({
  name: state.user.name,
  id: state.user.id,
  isLogged: state.user.isLogged
})

export default connect((mapStateToProps), actions)(LoginButton)
