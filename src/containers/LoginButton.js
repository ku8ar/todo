import { connect } from 'react-redux'
import actions from 'actions/'
import LoginButton from 'components/LoginButton'

const mapStateToProps = (state) => ({
  name: state.facebook.name,
  id: state.facebook.id
})

export default connect((mapStateToProps), actions)(LoginButton)
