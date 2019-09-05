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

export const createPost = (postData) => dispatch => {
  console.log('action called'); //goes into this when called
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POST,
      payload: post
    }));

}