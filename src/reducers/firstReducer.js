const initialState = {
  userInfo: null,
  upcomingTrips: 
  [{trip_id: 1, location: 'Paris', departure_date: 'Mar 1, 2019', return_date: 'Mar 28, 2019'},
  {trip_id: 2, location: 'London', departure_date: 'Jun 15, 2018', return_date: 'Jun 25, 2018'},
  {trip_id: 3, location: 'Denver', departure_date: 'Jan 3, 2019', return_date: 'Jan 17, 2019'}],
  items: {
  '1': ['contacts', 'phone', 'computer', 'dress', 'flats'],
  '2': ['contacts', 'phone', 'computer', 'pants', 'jacket'],
  '3': ['contacts', 'phone', 'computer', 'pants', 'jacket']}
}

//The action passed into our reducer comes from the dispatch.
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_USER_INFO':
      console.log('usernInfo', action.payload )
      return {
          ...state, userInfo : action.payload
        }
    default:
      return state;
  }
};

export default firstReducer;



