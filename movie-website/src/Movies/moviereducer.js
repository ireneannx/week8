//this will hold an action controller 

const initialState = {
  movies: [],
  movie_details: {},
  isLoaded: false, //to show if Movies component has already been loaded once. If so, there is no need to make axios call by calling GET_MOVIE action again and again.
  time: ""
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, movies: action.payload, isLoaded: true, time: new Date() } //this is where youre changing the state
    case "GET_ONE_MOVIE":
      return { ...state, movie_details: action.payload }
    case "CLEAR_DATA":
      return { ...state, movie_details: {} }
    default:
      return { ...state }
  }
}

//reducers take an action and change the state based on the action