import axios from 'axios'
//action creator 
export const getMovies = () => {
  return async function (dispatch) {
    const res = await axios.get('https://tv-v2.api-fetch.website/movies/3?sort=trending&order=1&genre=documentary')
    return dispatch({
      type: "GET_MOVIES",
      payload: res.data
    })
  }
}

export const getMovie = (movieid) => {
  return async function (dispatch) {
    const res = await axios.get(`https://tv-v2.api-fetch.website/movie/${movieid}`)
    return dispatch({
      type: "GET_ONE_MOVIE",
      payload: res.data
    })
  }
}