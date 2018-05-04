import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovies } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchMovies(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input
          className="my-search"
          placeholder="Search for movies or TV series' by title"
          value={this.state.term}
          onChange={this.onInputChange}
          />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchMovies },dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
