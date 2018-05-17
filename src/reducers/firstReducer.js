const initialState = {
  userInfo: null
}

//The action passed into our reducer comes from the dispatch.
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_INFO':
      console.log('made it to login submit')
      let userInfo;
      
      fetch('/api/login', {
        method: "POST",
        body: JSON.stringify(action.payload),
        credentials: true,
        headers: { 'content-type': 'application/json' }
      }).then(res => res.json())
        .then(body => userInfo = body)
        .then(newState => {
          console.log(newState, 'newState')
          return {
            ...state, userInfo
          }
        })
        .catch(err => console.log('error logining in')
      )      
    default:
      return state;
  }
};

export default firstReducer;



