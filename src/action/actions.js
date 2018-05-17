import * as types from '../constants/actionTypes.js'

export const loginSubmit = (userLoginInfo) => {
  return {type: types.LOGIN_SUBMIT, payload: userLoginInfo}
}