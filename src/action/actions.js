import * as types from '../constants/actionTypes.js'

export const submitLoginInfo = (userLoginInfo) => {
  return function getLoginInfo(dispatch) {
    console.log('innsideeee get Login')
    const fetchedPromise = fetch('/api/login',
      {
        method: "POST",
        body: JSON.stringify(userLoginInfo),
        credentials: true,
        headers: { 'content-type': 'application/json' }
      })
      .then(res => res.json())
      .then(userInfo => userInfo)
      .catch(err => console.log('error logining in up')
      )

    const payloadForReducer = (userInfo) => {
      return { type: types.INIT_USER_INFO, payload: userInfo }
    }
    return fetchedPromise.then(
      res => dispatch(payloadForReducer(res)),
    );
  }
};