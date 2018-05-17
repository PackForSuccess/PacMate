const initialState = {
  userInfo: null
}

//The action passed into our reducer comes from the dispatch.
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_USER_INFO':
      return {
          ...state, userInfo : action.payload
        }
    default:
      return state;
  }
};

export default firstReducer;



