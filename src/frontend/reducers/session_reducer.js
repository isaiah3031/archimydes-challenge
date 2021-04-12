import * as types from '../constants/action_types.js'
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { user } : {};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case (types.RECEIVE_CURRENT_USER):
      return action.user
    default:
      return state
  }
}

export default sessionReducer