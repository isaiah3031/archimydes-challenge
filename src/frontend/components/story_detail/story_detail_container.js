import { connect } from 'react-redux'
import { editStory, fetchStory } from '../../actions/story_actions'
import StoryDetail from './story_detail'

const mapStateToProps = state => ({
  isAdmin: state.session.isAdmin,
  story: state.entities.stories
})

const mapDispatchToProps = dispatch => ({
  editStory: (id, status) => dispatch(editStory(id, status)),
  fetchStory: (id) => dispatch(fetchStory(id))
})

const StoryDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDetail)

export default StoryDetailContainer