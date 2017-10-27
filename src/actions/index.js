import { USER_AUTHENTICATED } from './actionTypes'

export const setAuthenticationStatus = (status) => ({
  type: USER_AUTHENTICATED,
  payload: status
})
