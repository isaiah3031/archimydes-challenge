import * as types from '../constants/action_types'
import * as StoryAPIUtil from '../util/story_api_util'

const receiveStoryList = (stories) => ({
  type: types.RECEIVE_STORY_LIST,
  stories
})

export const fetchStoryList = () => dispatch =>
  StoryAPIUtil.fetchStoryList().then(stories => dispatch(receiveStoryList(stories)))

export const createStory = (story) => dispatch =>
  StoryAPIUtil.createStory(story)
