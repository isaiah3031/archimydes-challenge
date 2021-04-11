import * as types from '../constants/action_types.js'

const sessionReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case (types.RECEIVE_CURRENT_USER):
      return action.user
    default:
      return state
  }
}

export default sessionReducer