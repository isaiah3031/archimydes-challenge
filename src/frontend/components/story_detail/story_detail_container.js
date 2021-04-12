import { connect } from 'react-redux'
import { editStory } from '../../action/story_actions'

const mapStateToProps = state => ({
  isAdmin: state.session.isAdmin,
  stories: state.entities.stories
})

const mapDispatchToProps = dispatch => ({
  editStory: (id, status) => dispatch(editStory(id, status))
})

const StoryDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDetail)

export default StoryDetailContainer