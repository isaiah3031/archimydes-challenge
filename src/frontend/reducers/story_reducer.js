import * as types from '../constants/action_types'

const storyReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case types.RECEIVE_STORY_LIST:
      return Object.assign({}, state, action.stories)
    default:
      return state;
  }
}

export default storyReducer