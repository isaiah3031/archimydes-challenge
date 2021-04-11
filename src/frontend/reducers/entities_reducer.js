import { combineReducers } from 'redux'
import StoryListReducer from '../reducers/story_reducer'

const entitiesReducer = combineReducers({
  stories: StoryListReducer
})

export default entitiesReducer