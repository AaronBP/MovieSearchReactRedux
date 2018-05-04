import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovies } from '../actions/index';

class MovieList extends Component {
  // make a request to show some "hot movies" or something, just before the user searches
  componentDidMount(){
    var moviesSearchTitle = 'Star Wars'
    this.props.fetchMovies(moviesSearchTitle);
  }

  renderMovies(movieData){
    var divStyle = {
      backgroundImage: 'url(' + movieData.Poster + ')'
    }
    return (
      <div className="movie-list-item" key={movieData.imdbID} style={divStyle}>
        <div className="movie-desc">
          <div className="movie-title">{movieData.Title}</div>
          <div className="movie-year">{movieData.Year}</div>
          <div className="movie-type">{movieData.Type}</div>
        </div>
      </div>
    );
  }

  render(){
    if(this.props.movies[0]) {
      if(this.props.movies[0].Response==="True"){
        return (
          <div className="movie-list-container">
            {this.props.movies[0].Search.map(this.renderMovies)}
          </div>
        );
      }
      else {
        return (
          <div>{this.props.movies[0].Error}</div>
        );
      }
    }
    else {
      return (
        <div>Search for a movie</div>
      );
    }
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchMovies}, dispatch)
}

function mapStateToProps({movies}) {
  return { movies };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
