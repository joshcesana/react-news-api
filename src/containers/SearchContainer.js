import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import { connect } from 'react-redux';


class SearchContainer extends Component {
  state = {
    search: ''
  }

  render() {
    return (
      <div>
        <SearchForm />
      </div>
    )
  }
}

export default connect()(SearchContainer);
