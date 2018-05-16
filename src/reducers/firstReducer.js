const initialState = {
  syncData: false
}

//The action passed into our reducer comes from the dispatch.
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SYNC_ACTION':
      return {
        ...state,
        syncData: action.payload
      }
    default:
      return state;
  }
};




export default firstReducer;



