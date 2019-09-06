import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from './movieACTION';
import { bindActionCreators } from 'redux'


class Movies extends Component {

  //call the action in componentDidMount which will get the movie from the axios call 
  componentDidMount() {
    this.props.getMovies()
  }


  render() {
    let { movies } = this.props;

    console.log("movie component props", this.props)


    return (
      <div>
        {movies.map((movie) => {
          return (<div>
            <img src={movie.images.poster}></img>
          </div>)
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
const mapDispatchToProps = dispatch => bindActionCreators({ getMovies }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Movies);