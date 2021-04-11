import { connect } from 'react-redux'
import { fetchStoryList } from '../../actions/story_actions'
import LoginForm from './login_form'

const mapStateToProps = state => ({
  currentUser: state.session,
  stories: state.entities.stories
})

const mapDispatchToProps = dispatch => ({
  fetchStoryList: () => dispatch(fetchStoryList())
})

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginFormContainer;