import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from './movieACTION';
import { Picture } from './Movies';
import styled from 'styled-components';




class ShowMovie extends Component {

  componentDidMount = () => {
    this.props.getMovie(this.props.match.params.id)
  }

  render() {
    console.log("show movie", this.props)
    return (
      <div>
        {/* have to show both because sometimes movie details will load but not the images. SO YA THERE WILL BE AN EMPTY THING THERE BECAUSE IT HASNT LOADED */}
        {(this.props.movie_details && this.props.movie_details.images) ?
          <MainFrame>
            <Picture src={this.props.movie_details.images.fanart} />
            <Frame>
              <h3>{this.props.movie_details.title}</h3>
              <p>Year:{this.props.movie_details.year}</p>
              <p>{this.props.movie_details.synopsis}</p>
              <a href={this.props.movie_details.trailer}>Watch Trailer</a>
            </Frame>
          </MainFrame>
          : <p>Loading...</p>}

        {/* i am reusing styled picture component from earlier */}
      </div>

    )

  }
}

const mapStateToProps = (state) => {
  return ({ movie_details: state.moviereducer.movie_details })
}

const mapDispatchToProps = dispatch => bindActionCreators({ getMovie }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovie);

//styled components
export const Frame = styled.div`
border: 2px solid red;
`
export const MainFrame = styled.div`
display: flex;
`
