import { connect } from 'react-redux'
import { fetchStoryList } from '../../actions/story_actions'
import StoryList from './story_list'

const mapStateToProps = state => ({
  currentUser: state.session,
  stories: state.entities.stories
})


const mapDispatchToProps = dispatch => ({
  fetchStoryList: () => dispatch(fetchStoryList())
})

const StoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryList)

export default StoryFormContainer;