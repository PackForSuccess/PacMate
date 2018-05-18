const initialState = {
  userInfo: null,
  upcomingTrips: 
  [{trip_id: 1, location: 'Paris', departure_date: 'Mar 1, 2019', return_date: 'Mar 28, 2019'},
  {trip_id: 2, location: 'London', departure_date: 'Jun 15, 2018', return_date: 'Jun 25, 2018'},
  {trip_id: 3, location: 'Denver', departure_date: 'Jan 3, 2019', return_date: 'Jan 17, 2019'}],
  items: {
  '1': ['TO BRING:', 'contacts', 'glasses', 'phone', 'computer', 'black dress', 'flats', 'toothbrush', 'toothpaste', 'boots', 'fedora', '29 intimate wear', '29 socks', 'pyjamas', 'skincare', 'makeup'],
  '2': ['TO BRING:', 'contacts', 'glasses', 'sunglasses', 'phone', 'computer', 'charger for both phone and computer', 'pants', 'jacket', 'toothbrush', 'toothpaste', 'sundress', 'skirts', 'distressed shorts', 'v-neck bodysuit', 'pyjamas', '29 intimate wear', 'skincare', 'makeup'],
  '3': ['TO BRING:', 'contacts', 'glasses', 'sunglasses', 'phone', 'computer', 'charger for both phone and computer', 'pants', 'jacket', 'birkenstock sandals', 'flip-flops', 'bikini', 'dress', '29 intimate wear', 'pyjamas', 'skincare', 'makeup']}
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



