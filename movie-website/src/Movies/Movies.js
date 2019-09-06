import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, clearMovieData } from './movieACTION';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


class Movies extends Component {

  //call the action in componentDidMount which will get the movie from the axios call 
  componentDidMount() {
    this.props.getMovies()
  }

  //to fix bug where previous movie details get shown on slow data when you click on a movie
  componentWillUnmount() {
    this.props.clearMovieData()
  }


  render() {
    let { movies } = this.props;

    console.log("movie component props", this.props)


    return (
      <div>
        <h1>Movies</h1>
        {movies.map((movie) => {
          return (
            <Link to={movie._id}><Picture src={movie.images.poster}></Picture></Link>)
        })}
      </div>
    );
  }
}

//mapStateToProps
const mapStateToProps = state => ({
  movies: state.moviereducer.movies
})

//mapDispatchToProps
const mapDispatchToProps = dispatch => bindActionCreators({ getMovies, clearMovieData }, dispatch)

// styled components part . If you wanna create a styled component of paragraph, write styled.p. Note that youre syling the components. So even the components that I made will have that. For example, if i made a particular component for a particular type of image called "<img2/>", then use styled.img2. 
export const Picture = styled.img`
padding: 0.25em 1em;
width: 300px;
`
// 

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

