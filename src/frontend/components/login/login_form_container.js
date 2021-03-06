import { connect } from 'react-redux'
import { loginUser } from '../../actions/session_actions'
import LoginForm from './login_form'

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
})

const LoginFormContainer = connect(
  null,
  mapDispatchToProps
)(LoginForm)

export default LoginFormContainer;