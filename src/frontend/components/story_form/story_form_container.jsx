import { connect } from 'react-redux'
import { createStory } from '../../actions/story_actions'
import StoryForm from './story_form'

const mapDispatchToProps = dispatch => ({
  createStory: story => dispatch(createStory(story))
})

const StoryFormContainer = connect(
  null,
  mapDispatchToProps
)(StoryForm)

export default StoryFormContainer

