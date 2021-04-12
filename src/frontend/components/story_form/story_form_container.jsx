import { connect } from 'react-redux'
import { createStory } from '../../actions/story_actions'
import StoryForm from './story_form'

const mapStateToProps = state => ({
  isAdmin: state.session.role === 'Admin'
})

const mapDispatchToProps = dispatch => ({
  createStory: story => dispatch(createStory(story))
})

const StoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)

export default StoryFormContainer

