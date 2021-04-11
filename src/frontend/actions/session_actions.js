import * as types from '../constants/action_types'
import { login } from '../util/session_api_util'

export const receiveCurrentUser = user => ({
  type: types.RECEIVE_CURRENT_USER,
  user
})

export const loginUser = user => dispatch => {
  login(user).then(user => {
    return dispatch(receiveCurrentUser(user))
  })
}