//this will hold an action controller 

const initialState = {
  movies: [],
  movie_details: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, movies: action.payload }
    case "GET_ONE_MOVIE":
      return { ...state, movie_details: action.payload }
    default:
      return { ...state }
  }
}

