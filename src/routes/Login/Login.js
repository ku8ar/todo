import React, { PropTypes, Component } from 'react'
import Login from 'containers/Login'
import actions from 'actions/'
import { connect } from 'react-redux'

class LoginView extends Component {
  static propTypes = {
    router: PropTypes.object,
    isLogged: PropTypes.bool
  }
  componentWillMount () {
    if (this.props.isLogged) this.redirectToLoginView()
  }
  componentWillReceiveProps (nProps) {
    if (nProps.isLogged) this.redirectToLoginView()
  }
  redirectToLoginView = () => // @FIXME: shitty boilerplate!!!
    this.props.router.push('/')
  render () {
    return (
      <Login />
    )
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged
})

export default connect((mapStateToProps), actions)(LoginView)
