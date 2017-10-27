import { USER_AUTHENTICATED } from '../actions/actionTypes'

const authenticationStatusReducer = (state = false, action) => {
  switch (action.type) {
    case(USER_AUTHENTICATED):
      return action.payload 
    default:
      return state
  }
}

export default authenticationStatusReducer
