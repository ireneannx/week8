import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  //whenever we wanna send data, we call dispatch
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(postsdata => dispatch({
      type: FETCH_POSTS,
      payload: postsdata
    }));
}