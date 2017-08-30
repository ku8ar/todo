import React, { PropTypes, Component } from 'react'
import Grid from 'containers/Grid'
import actions from 'actions/'
import { connect } from 'react-redux'

class GridView extends Component {
  static propTypes = {
    router: PropTypes.object,
    isLogged: PropTypes.bool
  }
  componentWillMount () {
    if (!this.props.isLogged) this.redirectToLoginView()
  }
  componentWillReceiveProps (nProps) {
    if (!nProps.isLogged) this.redirectToLoginView()
  }
  redirectToLoginView = () => // @FIXME: shitty boilerplate!!!
    this.props.router.push('/login')
  render () {
    return (
      <Grid />
    )
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged
})

export default connect((mapStateToProps), actions)(GridView)
