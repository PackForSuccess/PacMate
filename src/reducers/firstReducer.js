const initialState = {
  userInfo: null,
  upcomingTrips: 
  [{trip_id: 1, location: 'Switzerland', departure_date: 'Mar 1, 2019', return_date: 'Mar 28, 2019'},
  {trip_id: 2, location: 'Germany', departure_date: 'Jun 15, 2018', return_date: 'Jun 25, 2018'},
  {trip_id: 3, location: 'Brazil', departure_date: 'Jan 3, 2019', return_date: 'Jan 17, 2019'},
  {trip_id: 4, location: 'Ohio', departure_date: 'Jun 1, 2018', return_date: 'Jun 12, 2018'}]
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



