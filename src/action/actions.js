import * as types from '../constants/actionTypes.js'


export const syncAction = () => {
  return {type: types.SYNC_ACTION, payload: true}
}



