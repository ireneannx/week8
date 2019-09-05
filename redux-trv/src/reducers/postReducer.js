import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {} //represents the single posts we add for which we get a response back
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_POST:
      return {
        ...state,
        item: action.payload //payload will be that single post
      }
    default:
      return state;
  }
}