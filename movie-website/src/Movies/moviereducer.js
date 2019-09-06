//this will hold an action controller 

const initialState = {
  movies: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, movies: action.payload }
    default:
      return { ...state }
  }

}