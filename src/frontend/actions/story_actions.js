import * as types from '../constants/action_types'
import * as StoryAPIUtil from '../util/story_api_util'

const receiveStoryList = (stories) => ({
  type: types.RECEIVE_STORY_LIST,
  stories
})

const receiveStory = (story) => ({
  type: types.RECEIVE_STORY,
  story
})

export const fetchStoryList = () => dispatch =>
  StoryAPIUtil.fetchStoryList().then(stories => dispatch(receiveStoryList(stories)))

export const createStory = (story) => dispatch => {
  return StoryAPIUtil.createStory(story).then(story => dispatch(receiveStory(story)))
}

export const editStory = (id, story) => dispatch => {
  return StoryAPIUtil.setStatus(id, story).then(story =>
    dispatch(receiveStory(story))
  )
}

export const fetchStory = (id) => dispatch => {
  return StoryAPIUtil.getStory(id).then(story => dispatch(receiveStory))
}